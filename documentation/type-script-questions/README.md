# TS questions
1. Что такое Question mark & exclamation mark
::: tip
Знакоп вопроса помечается опциональные параметры, 
восклицательным обозночает что параметр не можить быть
`null` or `undefined` 
:::
2. Типы данных `Tuple`, `never` `union` `enum`
::: tip
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
::: tip
`undefined`
:::
5. Модификаторы доступа, какой по умолчанию, что за `protected`
::: tip
`public` доступен при создании инстанса класса
`private` не доступен при создании инстанса класса
::: 
6. Что означает `<T extends SomeTipe>`, зачем нужны `generic`
::: tip
```javascript
interface Lengthwise {
	length: number;
}

function getLength<T extends Lengthwise>(arg: T): number {
	return arg.length;
}
```
функцмя `getLength` может принимать только тип у которого есть `length` параметр
::: 
7. Что такое `Partial<SomeObject>`
::: tip
Обертка `Partial` отмечвет все свойства объекта как оциональные
таким образом можно обновить любое свойство `Todo`
```javascript
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate }; 
}
```
::: 
