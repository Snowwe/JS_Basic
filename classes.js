class Person {

    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }

    set name(name){
        this._name = name;
    }

    set age(age){
        this._age = age;
    }

    info() {
        return console.log(this._name + 's age is ' + this._age);
    }
}

const john = new Person('john', 34);
john.info();