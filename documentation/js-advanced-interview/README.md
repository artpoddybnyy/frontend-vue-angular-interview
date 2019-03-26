# JS интевью advanced 
1. Что такое **window** и **document**
2. Что такое атрибуты у ключа объекта
```javascript
Object.defineProperty(obj, 'key', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'static'
    });
```
3. Где лучше хранить данные на стороне клиента 
::: tip
**indexDB**, **local storage**, **websql**
:::
4. Как синхронизировать две вкладки
::: tip
слушать **localstorage**, 
на одно и тойже вкладке **localstorage** нельзя слушать
:::
5. Какие события можно слушать на input, отличе **blur** и **focusout**
::: tip
у **blur** нет дальнейшего всплытия
:::
6. Какую анимацию и как использовать  **transition**, **animation** в чем отличие, можно ли остановить анимацию. 
Что такое **transform**, **transform-origin**. **transform-origin** у **svg**
::: tip
* `animation-play-state:paused;`
* transform-origin у svg 0% 0% по умолчанию
:::
7. Как отследить анимацию **transition**, **animation** (начало, окончание)
8. Тег `<pre>`, что он делает
9. Тег `<sript>`, **defer** и атрибуты 
::: tip
* **defer** откладывает на конец загрузки документа
* **async** документ не ожидает загрузку скрипта
:::
10. Что такое **srcset**, **dataset** атрибуты на елементах
11. Как выровнять елемнт в контейнере по вертикали и горизонтали
12. Как открыть почтовый клиент 
::: tip
`<a href="mailto:vlad@htmlbook.ru?subject=Вопрос по HTML">`
:::
13. Приоритет индексирования анимации **transform** и z-index
14. Что такое **Web Workers API**
15. Можно ли открыть или закрыть окно JS'ом
 ::: tip
 * window.open() **(не работает в асинхронной опирации)**
 * window.close()
 :::

16. Как отображать картинки base64 
 ::: tip
 * `background-image: url("")`, 
 * `<img src="" />` 
 * `data:image/png;base64, код`
 :::
17. Что такое пассивное прослушивание событий
18. Что такое **svg** и как анимировать **svg**
