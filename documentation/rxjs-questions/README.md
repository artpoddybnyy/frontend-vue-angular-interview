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
так же либа [until-destroy](https://github.com/ngneat/until-destroy)
:::
7. `Cold` и `Hot` **Observables**
::: tip
`Cold` все подписки на которые получят свой ответ (данные отдаються самим **Observable**)
`of`, `from`, `range`, `interval` and `timer` каждому подписчику дают свои данные <br/>
`Hot` все подписки на которые получят один и тотже ответ (данные отдаються из вне, к примеру вызов `next()`)
:::
8. `zip`, `forkJoin` vs `combineLatest` vs `merge` vs `withLatestFrom`
::: tip
`zip` - это как `Promise.all([])` ожидает пока все отработают хотя бы один раз паралельно и затем выдает значения, 
что бы событие происходило должно отработать всегда все **Observable**
 <br/><br/>
`merge` - мерджит много **Observable** в один поток/подписчик<br/><br/>
`forkJoin` - как `zip` только выдает последнее значение, отрабатывает 1 раз, ждет когда все завершаться
`combineLatest` как `яшз` только отрабатывает когда хотя бы один из переданых **Observable** эммитит значение и получает значение от каждого
`withLatestFrom` как `combineLatest` только тригерром являеться главный поток так как это пайп оператор выдает последнее значение из основного и вторичного
:::
9. какие есть мердж операторы и в чем разница?
::: tip
`merge` - вмердживает **Observable** в выполнение текущего **Observable** не блокирует выполнение основного потока <br><br>
`mergeMap` - так как и `merge` вмердживает и выполняет **Observable** блокируя основной поток пока не завершиться возвращаемый 
**Observable**. Продолжает выполнять все что ниже по цепочке в пайпе `mergeMap(()=> timer(2000))` следующий оператор выполниться через 2 секунды. 
Можно контролировать количество создаваемых `mergeMap` **Observable** гланым потоком. У `concatMap` 1 по умолчанию
```typescript
mergeMap(project: function: Observable, resultSelector: function: any, concurrent: number): Observable
```
`switchMap` - так же как и `mergeMap`только ***завершает на следующей итерации*** этот возвращенный **Observable**. 
`switchMap(() => interval(4000)), map((v)=> {console.log(v)})` интервал начнеться заново<br><br>
`concatMap` так же как и `mergeMap` только ставит в очередь `of(2000, 1000); ...  concatMap(val => delay(val))`
Выполнит сначала задержку в 2 секунды затем в 1 в отличии от `mergeMap`. Новая итерация не начнеться пока не выполниться возвращаемый **Observable**. <br><br>
`mergeScan` - так же как и `mergeMap` только есть аккамулируемое значение которое возвращаеться где то ниже в пайпах, 
не завершает на следующей итерации а продолжает с аккамулируемым значением
```typescript
mergeScan(acc => {
            return interval(1000).pipe(
                scan((a, _) => ++a, 0),
                map(val => val + acc),
                takeUntil(mouseUp$) // нунужно завершить
            );
    
        }, 0)
```
:::
10. 
