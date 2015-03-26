"use strict";

var math = require('mathjs'),
    fb = require('../../math/Fibbonacci'),
    http = require('http');

math.getFibbonacciNumber = fb;

http.createServer(function (request, response) {
    response.end('Hello World');
}).listen(8686);

console.log('server started at localhost:8686');

module.exports = math;
