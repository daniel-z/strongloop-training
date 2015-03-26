"use strict";

module.exports = function myModule(name) {
    name = name || "StrongLooop";
    return {
        speak: function speak() {
            return "Hello " + name + " !!!";
        }
    }
};
