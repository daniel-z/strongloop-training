"use strict";

var helloDaniel = require('./parrot')('Daniel');
var helloTom = require('./parrot')('Tom');

console.log(helloDaniel.sayHelloEnglish());
console.log(helloTom.sayHelloEnglish());
console.log(helloDaniel.sayHelloEnglish());
console.log(helloTom.sayHelloEnglish());
