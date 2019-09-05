function SuperCar() {
    this.wave = 'dring';
}

SuperCar.prototype.makeSound = function () {
    console.log(this.wave);
};

function Car(color) {
    this.color = color;
}

Car.prototype = new SuperCar();
Car.prototype.sayYes = function () {
    console.log('Yes');
};
const obj = new Car('red');
console.log(obj.sayYes(),'**', obj.makeSound(),'***', obj);



var a = {b: 1},
    c = Object.create(a);
console.log(c.b); //
delete c.b;
console.log(c.b); //
delete a.b;
console.log(c.b); //
a.z = 2;
console.log(c.z); //
c.z = 3;
console.log(a.z); //

console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');

const objA = {
    name: 'Alex',
    sayName: function () {
        console.log(this.name);
    }
};
const objB = {
    name: 'Ben',
    bike: objA.bike
};

var name = 'John';
var bike = objA.bike;

bike();
objA.bike();
objB.bike();
