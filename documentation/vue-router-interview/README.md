# Vue  router интевью
1. Как передать props в компонент роутера
2. Разница между **$router.push** и **$router.replace**, что такое **$router.go(-1)**
3. Хуки роутера
:::tip
* глобальные **beforeEach beforeResolve afterEach**, 
* в компоненте или в объекте роутера **beforeRouteEnter beforeRouteUpdate beforeRouteLeave**
:::
4. Загрузка данных с сервера при инициализации компонента. Как установить данные в компоненте из хука **beforeRouterEnter**, как заблокировать переход в случае необходимости
:::tip
* в **beforeRouterEnter** или в **created** хуке.
```javascript
beforeRouteEnter (to, from, next) {
  next(vm => {
    // экземпляр компонента доступен как `vm`
  })
}
```
:::
5. Денамические пути, необязательный денамический путь 
:::tip
`{ path: '/optional-params/:foo?' }`
:::
6. Слежение за роутером, разница между
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
8. Что такое метаданные маршрута для чего их можно использовать
