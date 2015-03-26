var express = require('express'),
    fib = require('../lib/math/Fibbonacci');

var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
    res.render('index', {});
});

router.get('/fib', function (req, res, next) {
    var content = '<h1>' + fib(req.query.min || 10) + '</h1>';
    content += "\n" + req.query;
    content += "\n" + req.params;
    content += "\n" + req.baseUrl;
    res.end(content);
});

router.post('/fib', function (req, res, next) {
    var content = '<h1>' + fib(req.body.fib) + '</h1>';
    res.send(content);
});

module.exports = router;
