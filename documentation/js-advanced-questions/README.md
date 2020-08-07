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
13. Как отправить файл на сервер?. Прочитать файл с помощью `FileReader` в нужный формат и отправить или `FormData`
```javascript
  let data = new FormData()
  data.append('file', files[0])
  axios.put('/endpoint/url', data, config)
```
как отслеживать процесс выгрузки файла на сервер?
```javascript
  var xhr = new XMLHttpRequest();
  xhr.upload.onprogress = function(event) {
    log(event.loaded + ' / ' + event.total);
  }
```
14. Какие типы ответа можно просит у сервера 
:::answer
""	- DOMString (this is the default value)
"arraybuffer" -ArrayBuffer
"blob" -	Blob
"document" -	Document
"json" -	JSON
"text" -	DOMString
:::
15. `XMLHttpRequest.abort()` что возможно делать?
::: answer
Позволяет отменить реквест и он становиться `canceled`
::: 
16. Что такое тепезированные массивы
17. Что такое мемоизация (кеширование)
::: answer
Сохранение результатов выполнения функций для предотвращения повторных вычислений
:::
18. Как анимировать елемент когда он появляеться в области видимости
::: answer
использовать `new IntersectionObserver(handleIntersection);`
::: 
19. Почему фалы сборки имеют какието рендомные названия?
:::tip
Если бы они имели бы всегда одно название то они бы кешировались бы браузером, а так при каждом новом деплои
клиент имеет последнию версию файлов
:::

