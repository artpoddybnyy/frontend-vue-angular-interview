Angular tips & approaches
1. Get service data via injection token
:::tip
```typescript
// token to access a stream with the information you need
export const ORGANIZATION_INFO = new InjectionToken<Observable<Organization>>(
    'A stream with current organization information'
);

export const ORGANIZATION_PROVIDERS: Provider[] = [
    {
        provide: ORGANIZATION_INFO,
        deps: [ActivatedRoute, OrganizationService],
        useFactory: organizationFactory,
    },
];

export function organizationFactory(
    { params }: ActivatedRoute,
    organizationService: OrganizationService
): Observable<Organization> {
    return params.pipe(
        switchMap((params) => {
            const id = params.get('orgId');

            return organizationService.getOrganizationById$(id);
        })
    );
}
```
```typescript
@Component({
    selector: 'organization',
    templateUrl: 'organization.template.html',
    styleUrls: ['organization.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ORGANIZATION_PROVIDERS],
 })
 export class OrganizationComponent {
    constructor(
        @Inject(ORGANIZATION_INFO) readonly organization$: Observable<Organization>,
    ) {}
 }
```
:::
2. Когда `FormControl` вызывает функции `disable` и `enable`, `setValue` и тд. срабатывает `statusChanges` и `valueChanges`
:::tip
Это можно выключить `this.control.disable({emitEvent: false});`
:::
3. Типизация форм
:::tip
```typescript
export class ArticleDTO {
  title: string;
  tags: string;
  date: string;
  referenceIds: number[];

  constructor(formValue: RawFormValue) {
    this.title = formValue.title;
    this.tags = formValue.tags.join(',');
    this.date = formValue.date.toISOString();
    if (formValue.referenceIds && formValue.referenceIds.length > 0) {
      this.referenceIds = formValue.referenceIds;
    }
  }
}

export interface RawFormValue {
  title: string;
  tags: string[];
  date: Date;
  referenceIds?: number[];
}

```

```typescript
  submit() {
    if (this.form.valid) {
      const article = new ArticleDTO(this.form.value as RawFormValue);
      // now send the article DTO to the backend using one of your services
    }
  }
```
:::
4. Отрисовка массива ассинхронно
:::tip
[see post](https://angularbites.com/async-rendering-with-a-single-rx-operator/?utm_campaign=NG-Newsletter&utm_medium=email&utm_source=NG-Newsletter_334)
:::


