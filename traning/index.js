
/** example of apply, inject this Math class to get min value of array */
var arr = [1,22,33];
let number = Math.min.apply(null, arr);
console.log(number);


/** carring and clouser */

    let carri = function() {
            let sum = 0;
        return function(num) {
             return sum += num

        };
    };

    let sum = carri();

    sum(1);
    sum(2);
    sum(4);
    
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

/** this setTimeout can see variable j because hosting */

setTimeout(() => console.log(j));

/** example of closure */
for (var j = 0; j < 3; j++) {
    (j => setTimeout(() => console.log(j), 300))(j);
}
/** timer with setTimeout */
 function f(i) {
        if (i < 0 ) return;
        setTimeout(()=> f(i), 1000);
        console.log(i);
        i--;
    }
    f(5)


/** get only unique elements of array */
console.log([... new Set([1,2,1,2,3,1,3])]);



var kvArray = [["key1", "value1"], ["key2", "value2"]];
// Используйте конструктор Map для преобразования двумерных массивов в ассоциативные
var myMap = new Map(kvArray);

myMap.get("key1"); // вернёт "value1"




/** check if string palindrom */

function isPalindrom(text) {
        if (text.length <= 1) {
            return true
        }
        if (text.charAt(0) !== text.charAt(text.length - 1)) {
            return false
        }
        return isPalindrom(text.substr(1, text.length - 2))
    }
    isPalindrom('text')

/** transfor multi array to array */

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

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

 function bind(func, context) { 
  return function () { 
    func.call(context);
  } 
};



/** iterate by object Tree structure */


    var obj = {
        a: {
            a: {
                a: {
                    a: 'aaaaa'
                }
            }
        },
        b: {
            b: {
                b: {
                    b: 'bbbbbb'
                }
            }
        }
    };

    function eachRecursiveByObject(obj) {
        for (let k in obj) {
            if (typeof obj[k] === "object" && obj[k] !== null) {
                console.log(obj[k]);
                eachRecursiveByObject(obj[k]);
            }
            else {
                console.log(obj[k]);
            }
        }

    }
    eachRecursive(obj)

/** iterate by array of objects Tree structure */

     var obj = [{
        a: [{
            a:[{
                a: 'aaaaaa'
            }]
        }]
    },
        {a: [{
            a:[{
                a:'bbbbbbb'
            }]
            }]

    }]


    function eachRecursiveByArrayOfObjs(obj) {
        for (let i = 0; i < obj.length; i++) {
           if (Array.isArray(obj[i])) {
               eachRecursiveByArrayOfObjs(obj[i])
           } else {
               for (let k in obj[i]) {
                   if (typeof obj[i][k] === "object" && obj[i][k] !== null) {
                       console.log(obj[i][k]);
                       eachRecursiveByArrayOfObjs(obj[i][k]);
                   }
                   else {
                       console.log(obj[i][k]);
                   }
               }
           }

        }


    }
    eachRecursiveByArrayOfObjs(obj)

/** finde longest_palindrome in string */
 function is_Palindrome(str1) {
        let rev = str1.split("").reverse().join("");
        return str1 == rev;
    }

    function longest_palindrome(str1) {

        let max_length = 0;
        let maxp = '';

        for (let i = 0; i < str1.length; i++) {
            let subs = str1.substr(i, str1.length);

            for (let j = subs.length; j >= 0; j--) {
                let sub_subs_str = subs.substr(0, j);
                if (sub_subs_str.length <= 1)
                    continue;

                if (is_Palindrome(sub_subs_str)) {
                    if (sub_subs_str.length > max_length) {
                        max_length = sub_subs_str.length;
                        maxp = sub_subs_str;
                    }
                }
            }
        }
        return maxp;
    }


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