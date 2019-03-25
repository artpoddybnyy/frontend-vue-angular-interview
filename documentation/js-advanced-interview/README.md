# JS интевью advanced 
1. **window** и **document**
2. Что такое атрибуты у ключа объекта
```javascript
Object.defineProperty(obj, 'key', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'static'
    });
```
3. Где лучше хранить данные на стороне клиента (indexDB, local storage)
4. Как синхронизировать две вкладки, как слушать **localstorage** (на одно и тойже вкладке не будет слушать)
5. Какие события можно слушать на input, отличе **blur** и **focusout**(у первого нет дальнейшего всплытия) 
6. Какую анимацию и как использовать  **transition**, **animation** (в чем отличие), можно ли остановить анимацию `animation-play-state:paused;`
* Что такое **transform**, **transform-origin**
7. Как отследить анимацию **transition**, **animation** (начало, окончание)
8. Тег `<pre>`, что он делает
9. Тег `<sript>`, **defer** (откладывает на конец загрузки документа) и  **async** (документ не ожидает загрузку скрипта) атрибуты 
10. Что такое **srcset**, **dataset** атрибуты на елементах
11. Как выровнять елемнт в контейнере по вертикали и горизонтали
12. Как открыть почтовый клиент `<a href="mailto:vlad@htmlbook.ru?subject=Вопрос по HTML">`
13. Приоритет индексирования анимации и **transform** z-index
14. Что такое **Web Workers API**
15. Как закрыть окно JS'ом
15. Как отображать картинки base64 в `background-image: url("")`, `<img />` `data:image/png;base64, код`
16. Что такое пассивное прослушивание событий
17. Что такое и как анимировать **svg**
