var cluster = require('cluster');
var http = require('http'),
    route = require('./router');

// var numCPUs = require('os').cpus().length;


if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < 2; i++) {
        cluster.fork().on('online', function (err, data) {
            console.log('new happy alive worker!');
        });
    }

    cluster.on('listening', function (worker, address) {
        console.log("A worker is now connected to " + address.address + ":" + address.port);
    });

    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died :(');
    });

} else {
    http.createServer(function (req, res) {

        route(req, function (err, content) {
            var content = "This was answered by worker with ID:\n" + cluster.worker.id + " " + content;
            if (err) {
                res.statusCode = err;
                res.setHeader('Content-Type', 'text/plain');

                res.end(content + err);
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.end(content);
            }
        });

    }).listen(8000);
}
