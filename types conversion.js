function SomeClassOne() {
    this.val = 'One';
}

var o = new SomeClassOne();
console.log(o.val); // One

function SomeClassTwo() {
    this.val = 'Two';
    return {val: 'Three'}; //если конструктор возвращает объект,
}

o = new SomeClassTwo();
console.log(o.val); // Three

const a = {key: 'foo'};
const b = {key: 'bar'};
const c = {};

c[a] = 123;
console.log(c[a], c[b], c[c]); // ключ [Object Object] поэтому 123 123 123
c[b] = 345;
console.log(c[a], c[b], c[c]); //?? 345 345 345

//******************
let aa = 42;
let bb = 'foo'; //преобразовано в Number -> NaN -> ничему никогда не равно
console.log(a < b, a > b, a == b, Number(bb));

//******************
const bool = new Boolean(false); //value --> 0, -0, null, false, NaN, undefined, '' - false, else true
if (bool) console.log(`if(bool) ${bool}`); //если существует
if (bool == false) console.log(`if(bool)==false ${bool}`); //

//******************
console.log(`true + false ${true + false}`); //1
console.log(`12/\'6\' ${12 / '6'}`); //2
console.log(`'number' + 15 + 3 ${'number' + 15 + 3}`); //number153
console.log(`15 + 3 + 'number' ${15 + 3 + 'number'}`); //18number
console.log(`[1] > null ${[1] > null}`); //true --> 1>0
console.log(`"foo" + + "bar" ${"foo" + +"bar"}`); //fooNaN
console.log(`'true' == true ${'true' == true}`); //false --> 'true'-> NaN
console.log(`false == 'false' ${false == 'false'}`); //false --> 'false'-> NaN
console.log(`null == '' ${null == ''}`); //false - пустая строка всегда NaN
console.log(`!!"false" == !!"true" ${!!'false' == !!'true'}`); //Оператор !! конвертирует строки true и false в булевое //
// значение true, так как это не пустые строки. А дальше оператор
// == просто сравнивает два булевых значения безо всяких преобразований.
console.log(`[‘x’] == ‘x’ ${['x'] == 'x'}`); //true
//Оператор == вызывает численное преобразование для массива.
//Метод массива valueOf() возвращает сам массив, а значит
// результат игнорируется, так как не является примитивом.
// Далее, вызывается метод массива toString(), который
// конвертирует [‘x’] в строку ‘x’
console.log(`[] + null + 1 ${[] + null + 1}`);//null1 ''+null+1
console.log(`[1,2,3] == [1,2,3] ${[1, 2, 3] == [1, 2, 3]}`);//false - разные ссылки
console.log(`{}+[]+{}+[1] ${{} + [] + {} + [1]}`);// ??? [object Object]1   '' ' '
console.log(`!+[]+[]+![] ${!+[] + [] + ![]}`); //truefalse
console.log(`new Date(0) - 0 --> ${new Date(0) - 0}`);//количество миллисекунд прошедших с начала Unix эпохи --> 0-0=0
console.log(`new Date(0) + 0 --> ${new Date(0) + 0}`);//+ --> toString
console.log(`'b' + 'a' + + 'a' ${'b' + 'a' + +'a'}`); //baNaN
console.log(`1 + '1' - '1' ${1 + '1' - '1'}`); //1+'1'=11 - '1'=10
console.log(`1 > 2 > 3 ${1 > 2 > 3}`); //1>2 --> false >3 --> false
console.log(`3 < 2 < 1 ${3 < 2 < 1}`); //3<2 --> false <1 --> true

//******************
const foo = {
    toString: function () {
        return 5;
    },
    valueOf: function () {
        return 'foo';
    }
};

console.log(foo.toString() + 1); //6
console.log(foo + 1); //foo1 воспринимает как строку --> при арифм операциях вызывается valueOf()
console.log(+foo); //NaN

//******************
const foo2 = {
    toString: function () {
        return 'foo';
    },
    valueOf: function () {
        return 5;
    }
};
console.log(foo2 + 'bar'); //5bar --> вызывает valueOf
//Оператор + вызывает преобразование в режиме по умолчанию,
// Object подразумевает численное преобразование в таком случае,
// используя сначала метод valueOf(), а затем уже toString()
console.log([foo2, 'bar'].join('')); //foobar При строковом преобразовании —
// вызов toString(), а уже потом valueOf().

//******************
function MyObj(val) {
    this.val = val;
    this.valueOf = function () {
        console.log(`'valueOf' --> ${this.val}`);
        return this.val.valueOf();
    };
    this.toString = function () {
        console.log(`'toString' --> ${this.val}`);
        return this.val.toString();
    };
}

var aObj = new MyObj(1);
var bObj = new MyObj('2');

console.log(`typeOf 1, '2'  ${typeof aObj.val} ${typeof bObj.val}`);

console.log(aObj > bObj); //false 1<2
console.log(aObj + bObj); //12
console.log(aObj, bObj); //???


// let str='8 bgsj';
// console.log(~~str[0]);
