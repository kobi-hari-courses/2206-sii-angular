function max(a, b) {
    if (a > b) return a;
    return b;
}

function Person(firstName, lastName) {
    // initialize the object
    this.firstName = firstName;
    this.lastName = lastName;

    Person.prototype.counter++;
}

Person.prototype.log = function() {
    console.log('I am a person ' + this.firstName + ' ' + this.lastName);
}

Person.prototype.counter = 0;


var p1 = new Person('John', 'Smith');
var p2 = new Person('Jane', 'Smith');

var o = {};


var a1 = [10, 20, 30];

var a2 = {
    0: 10, 
    1: 20, 
    2: 30
}


var f1 = function() {}

