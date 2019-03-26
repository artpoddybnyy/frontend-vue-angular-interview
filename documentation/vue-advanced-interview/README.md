# Vue Advanced
1. Существует ситуация когда нужно асинхронно из хранилища полуить данные и добавить в компонент если данных там еще нет
Данная ситуация приводит к тому что необхоимо выполнить такой код при иницилизации компонента
```javascript
created() {
    this.compoData = this.store.getters('someGetter')
}
```
и затем при добавлении данных в хранилище необходимо за ними проследить
```javascript
watch: {
    'store.getters' (newValue) {
          this.compoData = newValue
    }
}
```
:::tip
необходимо сделать ваш ватчер immediate true
```javascript
'store.getters': {
    heandler (newValue) {
      this.compoData = newValue
    }, 
    immediate: true
}
```
:::
2. Существует ситуация когда нужно при инициализации компонента к примеру подписать на событие DOM а перед тем когда компонент будет унечтожен отписаться от события
Это возмоэно сделать через доболнительную переменную коммпонента в которую можно сохранить подписку а затем делать отписку в нужный момент.
:::tip
 Более компактное решение:
```javascript
created() {
   const escapeHandler = e => {
      if (e.key === 'Escape' && this.show) {
        this.cancel()
      }
    }
    document.addEventListener('keydown', escapeHandler)
    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler)
    })
}
```
:::
