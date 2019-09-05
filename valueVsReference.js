const a = {};
clear(a);

function clear(a) {
    a.a = 10;
    a = null;
}

console.log(a); //{ a: 10 }

//самовыз ф-ция ()
(function (a) {
    a.a = 20;
    a = null;
})(a);

console.log(a); //{ a: 20 }

// ​самовыз ф-ция
(function clear(a) {
    a.a = 2;
    a = {a: 3}; //создатся новый обьект, к 'a' не имеет отношения
})(a);

console.log(a); // { a: 2 }

//*****************
const b = {};
const c = b;
let n = 8;

function clear2(d) {//ничего не присвоится, почему?
    d = 1; //объект стал примитивом
    d.foo = null; //не присвоится
}

clear2(c);
clear2(n);
console.log(b, c, n, 'b,c,n');

//***************** !!!
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2}; //невозможно, т.к. образуется циклическая ссылка
//
console.log('foo.x ' + foo.x); // ? { n: 1, x: [Circular] } **undefined ещё не определена
console.log('bar.x ' + bar.x); // ? [object Object]

//*****************
const obj = {
    innerObj: {foo: 9}
};
const z = obj.innerObj; //innerObj: {foo: 9}, ссылка на obj есть
z.x = 25; //innerObj: {foo: 9, x: 25}
console.log(obj.innerObj.x); //25 - ссылка есть и поэтому х: 25 в obj есть

//*****************
const obj2 = {
    innerArr: [{x: 17}]
};
let z2 = obj2.innerArr; //просто массив, ссылки нет
z2 = [{x: 25}];

console.log('obj2.innerArr[0].x: ' + obj2.innerArr[0].x, z2);//17

//*****************
const obj3 = {
    arr: []
};
obj3.arr.push(17);
console.log(obj3.arr, obj3.arr === [17]); //false т.к два обьекта - разные ссылки

//*****************
let val = (function (a) {
    arguments[0] = 10;
    return a;
})(5);

console.log(val); //10 объект arguments — содержит на самом деле
// ссылки, а не значения, и тесно связан с аргументами

//*****************
let User = function () {};
User.prototype.attributes = {
    isAdmin: false
};
let admin = new User('Sam'),
    guest = new User('Bob');

admin.attributes.isAdmin = true;

console.log('admin', admin.attributes.isAdmin); //ссылаются на одну область
console.log('guest', guest.attributes.isAdmin);
