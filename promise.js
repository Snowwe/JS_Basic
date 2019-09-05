Promise.resolve(Promise.reject()).then(
    ifResolved => console.log('yes', ifResolved),
    ifRejected => console.log('no', ifRejected),
);

console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');

var thenable = { then: function(resolve) {
        resolve("Resolving");
        console.log("Logging");
        throw new TypeError("Throwing");
    }};

var p3 = Promise.resolve(thenable);
p3.then(function(v) {
    console.log('then', v);
}, function(e) {
    console.log('catch', v);
});


console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');
//
// Promise.reject('a')
//     .catch(p => p + 'b')
//     .catch(p => p + 'c')
//     .then(p => p + 'd')
//     .finally(p => p + 'e')
//     .then(p => console.log(p));
//
// console.log('f');

console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');

Promise.resolve('BatMan')
    .then(function (val) {
        console.log('then', val);
        throw new Error('Error happen');
        return 'OMG!';
    })
    .then((val) => console.log('then', val))
    .catch((val) => {
        console.log('catch', val);
        return Promise.reject();
    })
    .then(firstHandler, secondHandler)
    .then(firstHandler, secondHandler)
    .then(firstHandler, secondHandler);

function firstHandler(val) {
    console.log('first', val);
}

function secondHandler(val) {
    console.log('second', val);
}

console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');

// Promise.reject('start')
//     .finally(val => {
//         console.log('finally-1', val);
//         return 'one';
//     })
//     .catch(val => {
//         console.log('catch-2', val);
//         return 'two';
//     })
//     .finally(val => {
//         console.log('finally-3', val);
//         return 'three';
//     })
//     .then(val => {
//         console.log('then-4', val);
//         return 'four';
//     })
//     .finally(val => {
//         console.log('finally-5', val);
//         return 'five';
//     })
//     .then(val => console.log('result', val));

// console.log('finish');

console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');

function promiseTimeout(value, timer) {
    var cb = function (resolve, reject) {
        setTimeout(() => {
            resolve(value);
        }, timer);
    };

    return new Promise(cb);
}

promiseTimeout('TWO', 2000).then(data => console.log(data));
promiseTimeout('ONE', 1000).then(data => console.log(data));

console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');
