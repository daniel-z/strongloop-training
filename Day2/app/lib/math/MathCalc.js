"use string";

var events = require('events'),
    eventEmitter = new events.EventEmitter();

module.exports = {
    on: eventEmitter.on,
    add: function (val1, val2) {
        eventEmitter.emit('add', {
            a: val1,
            b: val2,
        });
        return val1 + val2;
    },
    subs: function (val1, val2) {
        return val1 - val2;
    },
    div: function (val1, val2) {
        return val1 / val2;
    },
    mult: function (val1, val2) {
        return val1 * val2;
    }
};
