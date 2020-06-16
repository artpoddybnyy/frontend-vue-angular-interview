# RxJS questions
1. Что за объекты типа `Subject`
::: tip
**BehaviorSubject** хранит в себе последнее отправленное им значение. Так, каждому новому обработчику в момент регистрации (вызов `subscribe()`) будет отправлено это значение.
Начальное значение задается в момент создания RxJS BehaviorSubject.<br/>
**ReplaySubject** способны хранить заданное количество последних значений, которое задается при создании объекта.<br/>
**AsyncSubject** "потребителям" передается только последнее значение объекта и только, когда он завершит свое выполнение (вызов `complete()`).
:::
2. метод `pipe()`, pipeable operators
::: tip
Методу RxJS `pipe()` передаются только те операторы, которые принимают Observable и возвращают Observable. 
Они находятся в 'rxjs/operators' и называются pipeable operators
:::
3. Что создает **Observable**
::: tip
**of, from, fromEvent, interval** и **new Observable**
:::
4. Разница между  **Observable** & **Subject**
::: tip
**Subject** это единтсвенный источник рассылки данных, а **Observable** на каждый подписки свой
т.е. если сделать `Math.random()` то подписчики **Observable** получат разные значения а **Subject** одно и тоже
:::
5. Как организовать `Reducing number of API Calls to your server using debounceTime`
::: tip
```javascript
const sbj = new rxjs.Subject();
sbj.pipe(rxjs.operators.debounceTime(500))
   .subscribe(console.log)

var inp = document.getElementById('input')

inp.addEventListener('keyup', function (ev) {
    sbj.next(ev.target.value)
})
```
:::
6. Какие способы отписки от **Observable** есть
::: tip
Вызов `unsubscribed`, `complete`, и 
```javascript
.pipe(
    take(number) // number это количесво срабатываний   
    takeUntil(Observable), // пока не сработает Observable
    takeWhile(() => false) // пока не false
);
```
так же https://github.com/ngneat/until-destroy
:::
