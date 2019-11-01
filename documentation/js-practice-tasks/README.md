# Практические задания
1. Написать код который будет находить в массиве минимальное или максимальное значение
2. Написать реализацию следующих методов
```javascript
const initialArr = [2,4,6,8]

const result = multipleMap(initialArr, function (item) { return item * 2 })
result === [4,8,12,16]

const result2 = getSumm(initialArr, function (currentItem, item) { return currentItem + item })
result2 === 20
    
const arrSymbols = ['aa', 'vv', 'ssa']
const resSymbols = getSymbols(arr, elem => elem.includes('a'))
resSymbols === ["aa", "ssa"]
   
   var arrs = [
        function (param) { return param + 2 },
        function (param) { return param - 2 },
        function (param) { return param * 2 },
        function (param) { return param / 2 }
        ]
result === [5, 3, 10, 5]

   var resSort = mySort([4, 2, 7, 11, 1, 11])

   function mySort (arrIn) {
       var max
       return arrIn.map(() => {
           max = Math.max(...arrIn)
           arrIn[arrIn.indexOf(max)] = null
           return max
       })

   }
resSort === [11, 11, 7, 4, 2, 1]

var res = replacer('str string ing', '$')
res === '*** ****** ***'
```


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
7. Написать функцию 
