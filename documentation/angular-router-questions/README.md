1. Какие Route Guards есть, как определить, зачем нужны.
::: tip
**CanActivate** - разрешает/запрещает доступ к маршруту; <br/>
**CanActivateChild** -разрешает/запрещает доступ к дочернему маршруту; <br/>
**CanDeactivate** - разрешает/запрещает уход с текущего маршрута; <br/>
**Resolve** - выполняет какое-либо действие перед переходом на маршрут, обычно ожидает данные от сервера; <br/>
**CanLoad** - разрешает/запрещает загрузку модуля, загружаемого асинхронно. <br/>
```typescript
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject(AuthService) private auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean> {
    return this.auth.isLoggedIn
  }
}
```
:::
2. Итрефейс **Resolve**, как может быть использован с роутом
::: tip
**Resolve** выполняеться после всех гуардов и возвращает какието данные которое можно получить в компоненте
```typescript
export class EventsListComponent implements OnInit {
    events:IEvent[]
    constructor(private route: ActivatedRoute) {}
   
    ngOnInit() { 
        this.events = this.route.snapshot.data['events'];
    }
```
::: 
3. Нужно ли отписываться от подписка на роут
::: tip
```typescript
ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.name = params['name'];
  });
}
```
Нет, роутер делает это самостоятельно (так написано в доке но вроде есть ишью что не отписываеться)
:::
4. Как передавать параметры в роут
::: tip
```html
<a [routerLink]="['profile']" [queryParams]="{id: 3}">Profile</a>
<a [routerLink]="['profile']" [fragment]="address">Profile</a>
```
```typescript
this.router.navigate(['profile', 3], {
  queryParams: { id: 3 },
  fragment: 'address' //http://localhost:4200/profile?id=3#address
})
```
:::
5. Цикл роута 
 ::: tip
 `NavigationStart` <br>
 `RoutesRecognized` - cопоставление URL-адресов и редиректы<br>
 `GuardsCheckStart` и `GuardsCheckEnd`<br>
 `ResolveStart` `ResolveEnd` <br>
 `ActivationStart`, `ActivationEnd`, `ChildActivationStart`, `ChildActivationEnd`<br>
 `Updating` - последний шаг в навигационном цикле 
 ```typescript
 class MyService {
   constructor(public router: Router, logger: Logger) {
     router.events.pipe(
        filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
     ).subscribe((e: RouterEvent) => {
       logger.log(e.id, e.url);
     });
   }
 }
 ```
 :::
 
