# JS интевью
1. Как работает JS **(event loop)**
2. ООП и функциональное програмирование
3. Что такое асинхронная функция, что такое промисифицированая функция
4. Высплытие **(hoisting)** переменных и функций
5. Что такое ссылочные типы данных, базовые типы данных
6. Что такое **this**, поведение в функция. Отчличие стрелочных и обычных функций, функции генераторы
7. Что такое **pure function**
8. Замыкание, лексическое окружение, карирование
9. **ES6** модули, какие приимущества (не попадает в глобальную область видимости)
10. Классы, паттерны проектирования, клыссы Set и Map
* cтатические свойства
* super()
* getters, setters
11. Методы сбособы итерации по массивам и объектам
12. Что такое и как работает **деструктуризация**
13. Как взять уникальные элементы из массива объектов, как сделать массив уникальных элементов
14. Рекурсия и древовидная структура 
15. Остаточные параметры и параметры по умалчанию в функциях
16. **Promise**, **async await**, **Promise.all() Promise.race()**
17. Всплытие браузерных событий по **DOM**
18. Класс **FileReader**, доступ к файловой системе
19. **try catch** блок
20. Класс **Proxy**, манипуляции с функциями
21. **WebSocket api** 
22. Регулярные выражения, методы
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
6. Какую анимацию и как использовать  **transition**, **animation**
7. Как отследить анимацию **transition**, **animation** (начало, окончание)
8. Тег `<pre>`, что он делает
9. Тег `<sript>`, **defer** (откладывает на конец загрузки документа) и  **async** (документ не ожидает загрузку скрипта) атрибуты 
10. Что такое **srcset**, **dataset** атрибуты на елементах
11. Как выровнять елемнт в контейнере по вертикали и горизонтали
12. Как открыть почтовый клиент `<a href="mailto:vlad@htmlbook.ru?subject=Вопрос по HTML">`
13. Приоритет индексирования анимации и **transform** z-index
# Vue интевью
1. Как работает цикл компонента, где компонент не доступен, цикл **updated** и **nextTick** (updated не гарантирует что дочерние компоненты буду отрисованы)
2. Как работает реактивность, методы массива которые сохраняют реактивность, как исправить потерю реативности **Vue.$set()**, как сделать свойство не реактивным Object.freez()
3. Дерективы и фильтры, ползовательские дерективы (хуки **bind inserted update componentUpdated unbind**) и фильтры,
плагины **(Vue.use(plugin))** 
4. Props (type, default, required, validator), прокидывание данных обратно (какой способ предпочтительнее: cb, emmit)
5. Компоненты `<component>`, `<keep-alive>`+ 2 хука(activated, deactivated), `<transition>&<transition-group>` + хуки + аттрибуты 
* миксины, приоритет миксина и компонент
6. Слоты, для чего нужны
7. Асинхронная  загрузка компонентов в роуте и локально в компоненте, дефолтные компоненты при асинхронной загрузке компонентов
8. Функциональные компоненты
9. $refs, $listeners, $attrs
10. События `@event` и модификаторы событий **.self . stop . once**
11. Если сделать computed свойство стрелочной функцией, что будет 
12. Vue.Observable({})
14. Опция **provide** и **inject**
15. 
13. Что такое ssr, nuxt.js, что такое гидрация в nuxt
# Vuex интевью
1. Как брать данные из store, что такое кеширование геттеров
2. Как изменять состояние хранилища, ассинхронное митирование состояния (**rootState**, **rootGetters**)
3. Модули Vuex, как взять state из одного модуля в другом как менять состояние одного из другого `commit('module/mutation', data, {root:true})`
4. Плагины Vuex, подписка и отслеживаниеа мутаций
5. Динамическая загрузка **Vuex** модулей `(this.$store.registerModule("notifications", state))`
# Vue  router интевью
1. Как передать props в компонент роутера
2. Разница между **$router.push** и **$router.replace**, что такое **$router.go(-1)**
3. Хуки роутера (глобальные **beforeEach beforeResolve afterEach**, в компоненте или в объекте роутера **beforeRouteEnter beforeRouteUpdate beforeRouteLeave**)
4. Загрузка данных с сервера при инициализации компонента в **beforeRouterEnter** или в **created** хуке. Как установить данные в компоненте из хука **beforeRouterEnter**, как заблокировать переход в случае необходимости
5. Денамические пути, необязательный денамический путь `{ path: '/optional-params/:foo?' }`
6.  
```javascript
 watch: {
    '$route' (to, from) {
      // обрабатываем изменение параметров маршрута...
    }
  }
```
vs
```javascript
beforeRouteUpdate (to, from, next) {
    // обрабатываем изменение параметров маршрута...
    // не забываем вызвать next()
  }
```
7. Как управлять позицыей скрола при переходах маршрута
8. Что такое метаданные маршрута для чего их модно использовать
# Практические задания
1. Написать код который будет находить в массиве минимальное или максимальное значение
2. Написать реализацию следующих методов
```javascript
const initialArr = [2,4,6,8]
const result = multipleMap(initialArr, function (item) { return item * 2 })
const result2 = getSumm(initialArr, function (currentItem, item) { return currentItem + item })
    
const arrSymbols = ['aa', 'vv', 'ssa']
const resSymbols = getSymbols(arr, elem => elem.includes('a'))
```
`result = [4,8,12,16]`
`result2 = 20`
`resSymbols = ["aa", "ssa"]`

3. Написать реализацию функции `sum()` что бы в результате работы кода получилось число 7
 ```javascript
       sum(1);
       sum(2);
       sum(4);
```

4. Написать собственную реализацию что бы код работал
```javascript
let observable = new Observable();
let observer = new Observer();

observable.addObserver(observer);

setInterval(function () {
  observable.setState({ val: Math.floor(Math.random() * (10 - 1)) + 1 })
}, 1000);

observer.subscribe(function (data) {
  if (data.val > 5) {
    console.log('>5', data)
  }
})

observer.subscribe(function (data) {
  if (data.val < 5) {
    console.log('<5', data)
  }
})

observer.subscribe(function (data) {
  if (data.val === 5) {
    console.log('=5', data)
  }
})
```
5. Написать собственную реализации функции или класса **MyPromise**
```javascript
function getUserAddress() {
  return new MyPromise((resolve, reject) => {
    setTimeout(function() {
       resolve('data')
    }, 1000)
  })
}
getUserAddress().then(data => {
  console.log(data)
})
```
6. Как нативно получить квери параметр с url (new URLSearchParams)
7. Написать свой async await
```javascript
async(function* () {
    var res = yield getAsyncData()
    //some ations
    var res2 = yield getAsyncData()
       //some ations
})
``` 
