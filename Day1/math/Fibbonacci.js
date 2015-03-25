'use strict'

function fibonacci(min, oneBack, twoBack) {
    twoBack = twoBack || 0;
    oneBack = oneBack || 1;

    var next = twoBack + oneBack;

    if (next >= min) {
        return next;
    } else {
        return fibonacci(min, twoBack, next);
    }
}

module.exports = fibonacci;
