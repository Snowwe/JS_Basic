function foo() { //??
    // console.log('*1 - ' + x, x() + ' - 1*');

    function x() {
        // console.log('*2 - ' + x + ' - 2*');
    }

    var x = 1;
    // console.log('3 - ' + x);
    return typeof x; //почему переменную х
}

let f = foo();
console.log(f); //number

//******************
var myVar = 'hello';

function myFunc() {
    console.log(myVar); //undefined
    var myVar = 'goodbye';
    console.log(myVar); //goodbye
}

myFunc();
console.log(myVar); //hello

//******************
var x = 1;
console.log(x); //1
if (true) {//условный оператор
    var x = 2;
    console.log(x); //2
}
console.log(x); //2 т.к. глобальная область видимости

//****************** ??????????
const ff = (coll) => {
    --coll;
    const iter = (item, coll) => {
        coll+=10;
        console.log(item, coll);
    };
console.log(coll);
};
 // let ff1 = ff(5);

console.log('ff1---> ' + ff(5) + '\n'); //[Function: ff]

//******************
var a = 1;

function foo1() {
    console.log(a);
}

function bar() {
    var a = 2;
    foo1();
}

bar(); //foo1 создана в глоб области и поэтому перем берёт из
// глоб области
console.log(a + '  a\n');

//******************
// Function Declaration – функция, объявленная в основном потоке кода.
// Function Expression – объявление функции в контексте
// какого-либо выражения, например присваивания.
function test() {
    foo(); //ошибка - ещё не существует
    bar();
    var foo = function () { //expression - функциональное выражение
        console.log('FOO');
    };

    function bar() { //declaration - co
        console.log('BAR');
    }
}

test();
