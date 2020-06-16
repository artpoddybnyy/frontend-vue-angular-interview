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
3. `ElementRef`, `TemplateRef`, `ViewContainerRef` `Renderer2` 
::: tip
`ElementRef` - верхнеуровяя абстракця, которая содержит в себе ссылку на «нативный» DOM-элемент<br/>
`TemplateRef` - это ссылка на элемент ng-template в вашем компоненте или директиве<br/>
`ComponentRef` - это ссылка на компонет созданный `ComponentFactory`<br/>
`EmbeddedViewRef` - ...<br/>
`ViewContainerRef` - представляет собой ссылку на контейнер компонента или директивы и, кроме доступа к элементу, позволяет 
создавать два типа View — Host Views (View элементы, создаваемые на основе компонентов) и Embedded Views (View элементы, создаваемые на основе готовых шаблонов).
:::
4. `ComponentFactoryResolver`
5. Директивы `ng-template`, `ngTemplateOutlet`, `ngComponentOutlet` и `ng-container`
 ::: tip
 `ngTemplateOutlet`  - для динамического отображения компонентов `<ng-template>`. Так же можно передать данные наверх<br/>
 Aнгуляр не вставляет внутрь `<ng-template>`, а добавляет его сразу после. Изначально `ng-template` ничего не рендерит. Используеться в связке с `ngIf`, `ngSwitch` <br/>
 Для вставки элементов в DOM удобно использовать `<ng-container>` элемент.<br/>
 `ngComponentOutlet` - для динамического отображения компонентов (нужно добавить в `entryComponents`) [see](https://stackblitz.com/edit/angular-ng-component-outlet-example)<br/>
 [see also](http://nataliesmith.ca/blog/ngtemplate-ngcontainer-ngcontent)
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
Запуск отслеживания изменений происходит через `Observable` и `async` pipe, изменения входящих данных примтивного типа компонента,
изменения ссылки на ссылочные типы данных а также изменения `binding` свойств компонента даже если это сылочные типы данных.
:::
11. Что такое `Pure` & `Pure` pipes
12. Как организовать архитиктуру приложения c `changeDetection` стратигией, для чего может понадобиться **immutable.js**
13. Что такое `ChangeDetectorRef`
::: tip
Это абстрактный класс обеспечивающий функциональность `changeDetection` механизма, есть возможно добавить или убрать 
компонент с проверки обновлений
::: 
14. Как работает hook `ngDoCheck`
::: tip
`ngDoCheck` отрабатывает после того как **Zone.js** перехватил событие,
таким образом возможно манипулировать компонентом для мануальной работы с  `ChangeDetectorRef`. 
Если компонент помечен как `OnPush` и событие происходит в нем то `ngDoCheck` отрабатывает и дочернем компоненте, 
но уже гоубже по дереву дочерних не отрабатывает.
:::
