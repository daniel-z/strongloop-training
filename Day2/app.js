var http = require('http'),
    parser = require('url'),
    fs = require('fs'),
    path = require('path'),
    math = require('mathjs'),
    fib = require('../Day1/math/Fibbonacci'),
    route = require('router');


var server = http.createServer(function (request, response) {
    route(request, function (err, content) {
        if (err) {
            response.statusCode = err;
            response.setHeader('Content-Type', 'text/plain');

            response.end('' + err);
        } else {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(content);
        }
    });

}).listen(process.env.PORT || 8686, function () {
    console.log('Server running on port ' + process.env.PORT || 8686);
});
