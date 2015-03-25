"use strict";

module.exports = function (subject) {

    function sayHelloEnglish() {
        return "Hello " + subject;
    };

    function sayHelloFrench() {
        return "Allo " + subject;
    };

    function sayHelloSpanish() {
        return "Hola " + subject;
    };

    return {
        sayHelloEnglish: sayHelloEnglish,
        sayHelloFrench: sayHelloFrench,
        sayHelloSpanish: sayHelloSpanish
    };
};
