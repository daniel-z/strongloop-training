"use strict";

var fb = require("./fibbonacci");
var MathCalc = require('./MathCalc');

var num1 = 5,
    num2 = 5,
    fbmin = 1000;

console.log("Add:         " + num1 + " & " + num2 + " = " + MathCalc.add(num1, num2));
console.log("substact:    " + num1 + " & " + num2 + " = " + MathCalc.subs(num1, num2));
console.log("divide:      " + num1 + " & " + num2 + " = " + MathCalc.div(num1, num2));
console.log("multiply:    " + num1 + " & " + num2 + " = " + MathCalc.mult(num1, num2));
console.log("fibbonacci:  " + fbmin + " = " + fb(fbmin));
