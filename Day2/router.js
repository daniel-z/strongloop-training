var http = require('http'),
    parser = require('url'),
    fs = require('fs'),
    path = require('path'),
    math = require('mathjs'),
    fib = require('../Day1/math/Fibbonacci');

math.getFibonacciNumber = fib;

var routes = {
    '/': function () {
        return '<h1>Hola Mundo!</h1>';
    },
    '/fibonacci': function (query) {
        var min = query.minimum || 100;
        return '<h1>' + math.getFibonacciNumber(min) + '</h1>';
    },
    '/hello': function () {
        return "<p>Hello</p>"
    }
};

module.exports = function route(req, cb) {
    var url = parser.parse(req.url, true);

    if (routes[url.pathname]) {

        // in a real server, if the next action is processing a lot, it can not execute any other action
        // blocking the server.
        // we need to make our router async, right now the next execution is synchronous

        process.nextTick(function () {
            cb(null, routes[url.pathname](url.query));
        });

        return;
    }

    var filepath = path.join(__dirname, '/public', '/', url.pathname);
    fs.exists(filepath, function (exists) {
        if (exists) {
            fs.readFile(filepath, function (err, data) {
                if (err) {
                    console.error(err);
                    cb(500);
                } else {
                    cb(null, data);
                }
            });
        } else {
            cb(404);
        }
    });
}
