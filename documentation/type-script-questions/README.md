# TS questions
1. Что такое Question mark & exclamation mark
2. Типы данных `Tuple`, `never` `union` `enum`
::: answer
`Tuple` - var person: [number, string, boolean] = [1, "Steve", true];<br/>
`never` - функция не должна завершиться или бросить `new Error`<br/>
`enum` - объект котрый поодержывает reverse mapping.<br/>
:::
3. Type Assertion - это кастование неопределенных типов
```javascript
let soem: any
let someA : any = <number> soem
// или
let employeeCode = code as number;
```
4. Какой тип у переменной определенной так `let soem;`
::: answer
`undefined`
:::
5. Модификаторы доступа, какой по умолчанию, что за `protected`
6. Что означает `<T extends SomeTipe>`, зачем нужны `generic`

# RxJS questions
1. Что за объекты типа `Subject`
::: answer
**BehaviorSubject** хранит в себе последнее отправленное им значение. Так, каждому новому обработчику в момент регистрации (вызов subscribe()) будет отправлено это значение.
Начальное значение задается в момент создания RxJS BehaviorSubject.<br/>
**ReplaySubject** способны хранить заданное количество последних значений, которое задается при создании объекта.<br/>
**AsyncSubject** "потребителям" передается только последнее значение объекта и только, когда он завершит свое выполнение (вызов complete()).
:::
2. метод `pipe(), pipeable operators
::: answer
Методу RxJS pipe() передаются только те операторы, которые принимают Observable и возвращают Observable. 
Они находятся в 'rxjs/operators' и называются pipeable operators
:::
3. Что создает `Observable`
::: answer
**of, from, fromEvent, interval** и **new Observable**
:::
