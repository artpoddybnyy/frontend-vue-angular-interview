# Angular questions
1. Зачем добавлять компоненты в `entryComponents` поле модуля.
::: answer
ангуляр просто не узнает о компоненте, потому что не встретит его в шаблонах.
:::
2. Что такое `@ViewChild`, `@ViewChildren`, `@ContentChild` и `@ContentChildren` декораторы?
::: answer
`@ViewChild` & `@ViewChildren` берем компоненты или html элементы - ngAfterViewInit
`@ContentChild` и `@ContentChildren`  берем контент html, который пробрасываеться в компонент - ngAfterContentInit<br/>
See [Answer](https://tyapk.ru/blog/post/viewchildren-viewchild-contentchildren-and-contentchild)
:::
Что такое `{ static: false }` y `ViewChildren` и `ContentChildren`.
::: answer
Если флаг static имеет значение true, Angular попытается найти элементы при инициализации компонента. Это работает, только если они не находятся в структурной директиве. 
При использовании static: false разрешение выполняется после инициализации или обновления представления.
ng update попытается автоматически ввести правильное значение, если это окажется невозможно, он добавит комментарий с TODO.
:::
3. `ElementRef`, `TemplateRef`, `ViewContainerRef` `Renderer2` 
::: answer
`ElementRef` - верхнеуровяя абстракця, которая содержит в себе ссылку на «нативный» DOM-элемент<br/>
`TemplateRef` - это ссылка на элемент ng-template в вашем компоненте или директиве<br/>
`ComponentRef` - это ссылка на компонет созданный `ComponentFactory`<br/>
`EmbeddedViewRef` - ...<br/>
`ViewContainerRef` - представляет собой ссылку на контейнер компонента или директивы и, кроме доступа к элементу, позволяет 
создавать два типа View — Host Views (View элементы, создаваемые на основе компонентов) и Embedded Views (View элементы, создаваемые на основе готовых шаблонов).
:::
4. `ComponentFactoryResolver`
5. Директивы `ng-template`, `ngTemplateOutlet`, `ngComponentOutlet` и `ng-container`
 ::: answer
 `ngTemplateOutlet`  - для динамического отображения компонентов `<ng-template>`. Так же можно передать данные наврх<br/>
 Aнгуляр не вставляет внутрь `<ng-template>`, а добавляет его сразу после. Изначально `ng-template` ничего не рендери. Используеться в связке с `ngIf`, `ngSwitch` <br/>
 Для вставки элементов в DOM удобно использовать `<ng-container>` элемен.<br/>
 `ngComponentOutlet` - для динамического отображения компонентов (нужно добавить в `entryComponents`) [see](https://stackblitz.com/edit/angular-ng-component-outlet-example)<br/>
 [see also](http://nataliesmith.ca/blog/ngtemplate-ngcontainer-ngcontent)
 :::
6. Что такое async pipe
::: answer
AsyncPipe отслеживает объекты Observable и Promise и возвращает полученное из этих объектов значение. 
:::
7. Reactive Forms `FormControl` `FormGroup`  `FormBuilder` `Validators`<br/>
8. Структурные директивы изменяют структуру DOM с помощью добавления или удаления html-элементов. `ngIf`, `ngSwitch` и `ngFor`.
9. Анимация
