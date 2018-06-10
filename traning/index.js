
/** example of apply, inject this Math class to get min value of array */
var arr = [1,22,33];
let number = Math.min.apply(null, arr);
console.log(number);


/** create array from string */
var from = Array.from('String strong');
console.log(from);

/** example of using bind method, f1 in obj return function which lost 'this' but bind set this */
var obj = {
    f1: function () {
        return (function () {
            console.log(this);
        }).bind(this);
    }
};
obj.f1()();

/** this setTimeout can se variable j because hosting */

setTimeout(() => console.log(j));

/** example of closure */
for (var j = 0; j < 3; j++) {
    (j => setTimeout(() => console.log(j), 300))(j);
}

/** get only unique elements of array */
console.log([... new Set([1,2,1,2,3,1,3])]);


/** create array copy */
var a = [1,1,1,1];
var b = new Array(...a);
console.log(b);

/** arguments to array */
(function f1(a,b,c) {
    var res = new Array(...arguments);
    console.log(res);

    var [v,n,m] = [...arguments];
    console.log(v);
})(1,2,3);

/** prototype extending */

function Bear(type) {
    this.type = type;
}

Bear.prototype.grow = function () {
    console.log(this.type);
};

function Polar(type) {
    /** add constructor after Polar.prototype = Object.create(Bear.prototype);*/
    Bear.call(this, type)
}
function Grizzly(type) {
    Bear.call(this, type)
}
/** this action will bring to loose of constructor */
Polar.prototype = Object.create(Bear.prototype);
Grizzly.prototype = Object.create(Bear.prototype);

let polar = new Polar('polar');
let grizzly = new Grizzly('grizzly');

polar.grow();
grizzly.grow();


/** this regex check if string contain at lis on char from interval from a to z */
/([a-z])(?!.*\1)/g.test('aaa');

/** собеседование
 1 . имеет ли дж доступ к файловой системе, модно ли взять файл и че то с ним сделать ?
 - нет не имеет, только  через браузер inpyt type file
 2. что произходит когда дж исполняеться и встречаеться асинхронная функция
 - v8 джавскриптовый движок внутри хрома имеет кучу (распределяемая память) и стек вызовов методов а такэе дом апи (setTimeOut...)
 когда есть асинхронная операция она помещаеться в веб апи (это все плюшки праузера) затем опосле отработки она попадает в очередь
 и затем когда стек вызовов методов пуст она из орчереди перемещпеться в этот стек вызовов методов и там выполняеться
 https://www.youtube.com/watch?time_continue=1546&v=8cV4ZvHXQL4

 setTimeout(function (){
console.log("aaaaaaaaaa")
},100)

 for (var a = 0; a<1000000000; a++){

}


 3. Всплытие в джаваскремпте (когда идет исполнение файла что происходит с переменным, финкциями, var let)

 4.
 */