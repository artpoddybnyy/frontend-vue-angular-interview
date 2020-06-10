# TS questions
1. Что такое Question mark & exclamation mark
::: answer
Знакоп вопроса помечается опциональные параметры, 
восклицательным обозночает что параметр не можить быть
`null` or `undefined` 
:::
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
::: answer
`public` доступен при создании инстанса класса
`private` не доступен при создании инстанса класса
::: 
6. Что означает `<T extends SomeTipe>`, зачем нужны `generic`
::: answer
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
