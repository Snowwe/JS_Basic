//Напишите функцию F, так чтобы new F === F
function F() {
    return F;
}

console.log(new F() === F);

console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');
// //Напишите программу, которая выводит на экран числа
// // от 1 до 100. При этом вместо чисел, кратных трем,
// // программа должна выводить слово «Fizz», а вместо
// // чисел, кратных пяти — слово «Buzz». Если число кратно
// // и 3, и 5, то программа должна выводить слово «FizzBuzz»
// function fizzBuzz(n = 100) {
//     for (let i = 1; i < n; ++i) {
//         (!(i % 3) && !(i % 5))
//             ? console.log('FizzBuzz') : (!(i % 3))
//             ? console.log('Fizz') : (!(i % 5))
//                 ? console.log('Buzz') : console.log(i);
//
//         // if (!(i % 3) && !(i % 5)) {
//         //     console.log('FizzBuzz');
//         // } else if (!(i % 3)) {
//         //     console.log('Fizz');
//         // } else if (!(i % 5)) {
//         //     console.log('Buzz');
//         // } else {
//         //     console.log(i);
//         // }
//     }
// }
//
// fizzBuzz();
console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');

//Напишите функцию, принимающую на вход строку, и
// возвращающую первый символ, который встречается
// в строке только один раз. Если это буква, то она
// должна быть в том регистре, в котором она встретилась
// в строке. Например, для строки mAmaN вернуть N.
// Если все символы встречаются больше одного раза,
// вернуть пустую строку.
function firstNonRepeatingLetter(str) {
    let str1 = str.toLowerCase();
    str1.search();
    console.log(str1);
    return new Set(str1);


}

console.log(firstNonRepeatingLetter('mAmaN') === 'N',
    firstNonRepeatingLetter('a') === 'a',
    firstNonRepeatingLetter('paPA') === '',
    firstNonRepeatingLetter('Go hang a salami, I\'m a lasagna hog!') === ',');
console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');

// let sum = i => j => j ? f(i + j) : i;
function sum(a) {
    let sum1 = a;

    let func = (...b) => {
        if (b) {
            sum1 += b;
            return func;
        } else return sum1;
    };

    // func.toString = () => sum;
    // func.valueOf = () => sum;
    // return func;
}

// function sum(x) {
//     sum.result = (sum.result) ? sum.result += x : x;
//     sum.valueOf = function() {
//         return sum.result;
//     };
//     return sum;
// }

let s1 = sum(1)(2)(); // 3
let s2 = sum(1)(2)(3)(); // 6
let s3 = sum(2)(2)(2)(2)(2)(); // 10
console.log(s1, s2, s3);

console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');
console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');
console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');
console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');

