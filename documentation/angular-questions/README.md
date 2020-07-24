# Angular questions
1. Зачем добавлять компоненты в `entryComponents` поле модуля.
::: tip
ангуляр просто не узнает о компоненте, потому что не встретит его в шаблонах.
:::
2. Что такое `@ViewChild`, `@ViewChildren`, `@ContentChild` и `@ContentChildren` декораторы?
::: tip
`@ViewChild` & `@ViewChildren` берем компоненты или html элементы - ngAfterViewInit
`@ContentChild` и `@ContentChildren`  берем контент html, который пробрасываеться в компонент - ngAfterContentInit<br/>
See [Answer](https://tyapk.ru/blog/post/viewchildren-viewchild-contentchildren-and-contentchild)
:::
Что такое `{ static: false }` y `ViewChildren` и `ContentChildren`.
::: tip
Если флаг static имеет значение true, Angular попытается найти элементы при инициализации компонента. Это работает, только если они не находятся в структурной директиве. 
При использовании static: false разрешение выполняется после инициализации или обновления представления.
ng update попытается автоматически ввести правильное значение, если это окажется невозможно, он добавит комментарий с TODO.
:::
3. `ElementRef`, `TemplateRef`, `ViewContainerRef`, `ComponentRef` `Renderer2` 
::: tip
`ElementRef` - верхнеуровяя абстракця, которая содержит в себе ссылку на «нативный» DOM-элемент<br/>
`TemplateRef` - это ссылка на элемент ng-template в вашем компоненте или директиве<br/>
`ComponentRef` - это ссылка на компонет созданный `ComponentFactory`<br/>
`EmbeddedViewRef` - ...<br/>
`ViewContainerRef` - представляет собой ссылку на контейнер компонента или директивы и, кроме доступа к элементу, позволяет 
создавать два типа View — Host Views (View элементы, создаваемые на основе компонентов) и Embedded Views (View элементы, создаваемые на основе готовых шаблонов).
`Renderer2` - позволяет монипулировать с дом элементом методы которго принимают `TemplateRef`
:::
4. `ComponentFactoryResolver`
5. Директивы `ng-template`, `ngTemplateOutlet`, `ngComponentOutlet` и `ng-container`, `ng-content`
 ::: tip
 `ngTemplateOutlet`  - для динамического отображения компонентов `<ng-template>`. Так же можно передать данные наверх<br/>
 Aнгуляр не вставляет внутрь `<ng-template>`, а добавляет его сразу после. Изначально `ng-template` ничего не рендерит. Используеться в связке с `ngIf`, `ngSwitch` <br/>
 Для вставки элементов в DOM удобно использовать `<ng-container>` элемент.<br/>
 `ngComponentOutlet` - для динамического отображения компонентов (нужно добавить в `entryComponents`) [see](https://stackblitz.com/edit/angular-ng-component-outlet-example)<br/>
 [see also](http://nataliesmith.ca/blog/ngtemplate-ngcontainer-ngcontent)
 `ng-content` - проекция контента в компонент по типу слотов, не может содержать внутри себя никакого контента
 :::
5.1 Какой контекст у `ng-template` и что это такое, как это может быть использовано
::: tip
контекст в `ng-template` передаеться с места в которое этот самый темплейт встроили
```html
<ng-template #estimateTemplate let-someVar="estimate">
    <div> Approximately {{someVar}} lessons ...</div> // 'some data here' 
</ng-template>
<ng-container 
   *ngTemplateOutlet="estimateTemplate; context: {estimate: 'some data here'} ">
</ng-container>
```
::: 
5.2 Как передать входящие параметры или сделать эмит  в `ngComponentOutlet`
::: tip
Нужно создать Инжектор и 
:::
6. Что такое async pipe
::: tip
AsyncPipe отслеживает объекты Observable и Promise и возвращает полученное из этих объектов значение. 
:::
7. Reactive Forms `FormControl` `FormGroup`  `FormBuilder` `Validators`<br/>
8. Структурные директивы изменяют структуру DOM с помощью добавления или удаления html-элементов. `ngIf`, `ngSwitch` и `ngFor`.
9. Анимация
10. Angular OnPush Change Detection Strategy в компонентах
::: tip
Это стратегия когда механизм отслеживания изменений не проверяет компонент с 
`changeDetection: ChangeDetectionStrategy.OnPush` и его дочерних компонентов 
(данная проверка происходит через тригер дом событий, промисов, инервалов, таймаутов)
Запуск отслеживания изменений происходит через `async` pipe, изменения входящих данных примитивного типа компонента,
изменения ссылки на ссылочные типы данных а также изменения `binding` свойств компонента даже если это сылочные типы данных.
У каждого компонента есть свой Change Detector.
:::
11. Что такое `Pure` & `ImPure` pipes
::: tip
pure по умолчанию, вызываеться только при изменении его входных агрументов, вторые при каждом перерендеринге 
:::
12. Как организовать архитиктуру приложения c `changeDetection` стратигией, для чего может понадобиться **immutable.js** или **immer.js**
13. Что такое `ChangeDetectorRef`
::: tip
Это абстрактный класс обеспечивающий функциональность `changeDetection` механизма, есть возможно добавить или убрать 
компонент с проверки обновлений
::: 
14. Как работает hook `ngDoCheck`
::: tip
`ngDoCheck` отрабатывает после того как **Zone.js** перехватил событие,
таким образом возможно манипулировать компонентом для мануальной работы с  `ChangeDetectorRef`. 
Если компонент помечен как `OnPush` и событие происходит в нем то `ngDoCheck` отрабатывает и в дочернем компоненте, 
но уже гоубже по дереву дочерних не отрабатывает.
:::
15. Зачем нужно клонировать **HttpRequest** в **HttpInterceptor**?
::: tip
**HttpRequest** иммутабельный объект, что бы установить `headers` к примеру
```typescript
    request = request.clone({ headers: request.headers.set( 'Authorization', 'Bearer ' + this.auth.authToken)});
```
::: 
16. Разница между `ngModelChange` и `change`
::: tip
`ngModelChange` это событие `[(ngModel)]` дерективы `change` нативное дом событие
::: 
17. **NgModule** свойства 
::: tip
`providers` - injectable объекты которые доступны в инжекторе этого модуля [see here](https://tyapk.ru/blog/post/angular-dependency-injection)
`declarations` - компоненты, пайпы, дерективы пренадлежащие этому модулю
`imports` -  другие модули, классы которых необходимы для шаблонов компонентов из текущего модуля <br>
`exports` - набор классов представлений, которые должны использоваться в шаблонах компонентов из других модулей
:::
18. Что такое **Incremental DOM** и **Ivy**?
::: tip
Каждый компонент компилируется в набор инструкций, которые создают DOM-деревья и 
непосредственно обновляют их при изменении данных. Эти функции и есть движок рендеринга.
Если какая-либо инструкция осталась нетронутой, то она не будет использоваться в будущем. <br>
Ivy
:::
19. Что такое `NgZone` 
::: tip
Это обертка над zone.js которая позволяет выполнять что то за пределами зоны, 
таким образоб избегая запуска обнаружения изменений
:::
