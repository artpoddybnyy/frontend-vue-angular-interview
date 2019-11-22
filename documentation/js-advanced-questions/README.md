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
6. Тег `<sript>`, **defer** и атрибуты 
::: tip
* **defer** откладывает на конец загрузки документа
* **async** документ не ожидает загрузку скрипта
:::
7. Как открыть почтовый клиент 
::: tip
`<a href="mailto:vlad@htmlbook.ru?subject=Вопрос по HTML">`
:::
8. Что такое **Web Workers API**
9. Можно ли открыть или закрыть окно JS'ом
 ::: tip
 * window.open() **(не работает в асинхронной опирации)**
 * window.close()
 :::
10. Что такое пассивное прослушивание событий
11. Объект `FormData`, получение объекта `FormData` из HTML формы
12. Как создать объет revers mapping, как взять ключ по значению
```javascript
object[object['name'] = 1] = 'name'
```
