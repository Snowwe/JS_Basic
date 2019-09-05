var myVar = 'hello';

function myFunc() {
    console.log(myVar); //undefined
    var myVar = 'goodbye';
    console.log(myVar); //goodbye
}

myFunc();
console.log(myVar); //hello

//******************
var a = 1;
var b = 2;
(function () {
    console.log('1 - a, b ', a, b); //1, undef
    var b = 3; //другая перем
    console.log('2 - a, b ', a, b); //1, 3
    a += b;
    console.log('3 - a, b ', a, b); //4, 3
})();

console.log('a, b ', a, b); //4, 2

//****************** !!!
function getClo() { //передача части аргументов и получение обратно
    // ф-ции, которая ожидает остальные аргументы
    var canYouSeeMe = 'here I\'m';
    return (function theClo() {
        return {canYoySeeIt: canYouSeeMe ? 'yes!' : 'no'};
    })
}

var clo = getClo();
console.log('see it ' + clo().canYoySeeIt); //see it yes!

//****************** ??
var x = 'global';

function outer() {
    var y = 'outer';
    console.log('\n1 - x,y ' + x, y);

    function inner() { //вообще не вызывается
        var x = 'inner';
        console.log('2 - x,y ' + x, y);
    }
}

outer();

console.log('3 - x ' + x); //global

//******************
function makeAdder(a) {
    return function (b) { //записывает в переменную функцию
        return a + b;
    }
}

let x2 = makeAdder(5); //x2 - функция, частичное применение,
// корирование
let y2 = makeAdder(20);
console.log('\n1 - x2\n' + x2);
x2(6); //вызываем функцию b=6 result 11
y2(7); //27
console.log(`2 - x2(6) = ${x2(6)}, y2(7) = ${y2(7)}`);

