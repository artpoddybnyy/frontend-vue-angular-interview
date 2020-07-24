# TS questions
1. Что такое Question mark & exclamation mark
::: tip
Знак вопроса помечается опциональные параметры, 
восклицательным обозночает что параметр не можить быть
`null` or `undefined` 
:::
2. Типы данных `Tuple`, `never` `union` `enum`
::: tip
`Tuple` - var person: [number, string, boolean] = [1, "Steve", true];<br/>
`never` - функция не должна завершиться или бросить `new Error`<br/>
`enum` - объект котрый поодержывает reverse mapping.<br/>
:::
3. Type Assertion - это кастование неопределенных типов. Intersection Types - пересечение типов
```typescript
let soem: any
let someA : any = <number> soem
// или
let employeeCode = code as number;

function extend<First, Second>(first: First, second: Second): First & Second {
    //...
    return result as First & Second;
}
```
4. Какой тип у переменной определенной так `let soem;`
::: tip
`undefined`
:::
5. Модификаторы доступа, какой по умолчанию, что за `protected`
::: tip
`public` доступен при создании инстанса класса
`private` не доступен при создании инстанса класса
`protected` доступен у классов наследников
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
Обертка `Partial` отмечвет все свойства объекта как опциональные
таким образом можно обновить любое свойство `Todo`
```typescript
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate }; 
}
```
::: 
8. Setter синтаксис
::: tip
отрабатывает когда значение инициализируеться и изменяеться
```typescript
@Input() set repoLimit(newLimit: number) {
  // реализация здесь
}
```
:::
9. Type assertions(Приведение к типу) 2 способа
::: tip
```typescript
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let someValue: any = "this is a string"; 
let strLength: number = (someValue as string).length;
```
:::
10. `readonly` vs `const`
::: tip
`readonly` - присваеваиться свойствам
`const` - присваеваиться перемнным
:::
11. Как обьявить тип массив пользователей `User<Array>`
::: tip
```typescript

interface User {
    name: string | number,
    mail: any
}

interface Users extends Array<User> {}
//or
interface Users {
    [index: number]: User
}

```
:::
12. Что такое **Function Overloading**
::: tip
Название функции одно и тоже но набор входящих параметров разных типов и возвращаемых значений
```typescript
function display(a: string, b: string): void
function display(a: boolean, b: boolean): void
function display(a: number, b: boolean): void
function display(a: boolean, b: string): void

function display(a, b) {
  
}
display(1, false)
display('asd', 'dddd')
display(false, 'dddd')
display(false, 1) //error
```
:::
13.  Ключевое слово `type` и `typeof`.  Как создать какой то `initial obect` не создавая для него отдельно тип через `interface`
::: tip
использовать `typeof`
```typescript
const initialObject = {
    mail: 'string',
    address: 123.133, //number
    aviable: false // bool
}
type SomeInitType = typeof initialObject

const mutateData: SomeInitType = {
    mail: 'some string',
    address: '33', //error
    aviable: 1 // error
}
```
:::
14. Конструкция `as const` или `<const>`
::: tip
делает свойства объектов и массивов `readonly`
```typescript
const action = {
  type: 'SET_HOURS',
  payload: [8, 12, 5, 8]
} as const

// {
//  readonly type: "SET_HOURS";
//  readonly payload: readonly [8, 12, 5, 8];
// }

action.payload.push(12);  // error - Property 'push' does not exist on type 'readonly [8, 12, 5, 8]'.
```
:::
15. Что такое **ReturnType** 
::: tip
Конструктор типов которые возвращает функция
:::
16. Ключевое слово `infer`
::: tip
`infer` это переменная которую можно 
использовать для динамического определения типов
```typescript
type Cater<T> = T extends Array<infer R> ? Array<R> : T

type Parser = Cater<string>

type Parser2 = Cater<number> 

type Parser3 = Cater<Array<number>> 

let r1: Parser = '123123' //бирет Т
let r3: Parser2 = 22 //бирет Т

let r2: Parser3 = 33 // ошибка массив чисел бирет Array<R> так как подходит под условие T extends Array<infer R>
```
::: 

17. Что такое  `keyof`
::: tip
вытаскивает все ключи типа и делает из них тип
```typescript
interface Person {
    name: string;
    age: number;
    location: string;
}

type K1 = keyof Person; // "name" | "age" | "location"
const g: K1 = 'age'
const g: K1 = 'sss' //error нет такого типа 
```
::: 
18. Как использовать внешний не `javascript` код в `typescript`
::: tip
declare var myLibrary;
:::
