"use strict";

var http = require('http'),
    hello = require('./helloworld')('Super StrongLoop'),
    fibbonacci = require('../math/Fibbonacci'),
    parser = require('url'),
    fs = require('fs');

var getFile = function getFile(fname, succCb, errCb) {
    var content = fs.readFile('./' + fname, 'utf8',
        function (err, data) {
            if (err) {
                return errCb(err);
            }
            return succCb(null, data);
        });

    return content;
};

function route(req, cb) {
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

var server = http.createServer(function (request, response) {
    var responseString = "",
        routing = {
            "/helloguy": function () {
                var response = hello.speak();
                return {
                    status: 200,
                    response: response
                };
            },
            "/superfibbo": function () {
                var response = fibbonacci(10000).toString();
                return {
                    status: 200,
                    response: response
                };
            }
        };

    // path.join(__dirname, '/public', '/')

    function router(url) {
        if (!routing[url]) {
            if (url.match(/.+\.html/)) {
                var data = getFile(url,
                    function (err, fileContent) {
                        return {
                            status: 200,
                            response: fileContent
                        }
                    },
                    function (err) {
                        return {
                            status: 404,
                            response: err
                        }
                    }
                );
            }

            return {
                status: 404,
                response: "route not found."
            }
        }
        return routing[url]();
    }

    response.statusCode = router(request.url).status;
    response.setHeader('Content-Type', 'text/plain');

    response.end(router(request.url).response);

}).listen(8686, function () {
    console.log('server started at http://localhost:8686');
});

server.on('request', function (message) {
    // console.log(message.headers);
});
