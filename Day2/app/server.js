var http = require('http'),
    express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');;

var app = express(),
    routes = require('./routes/index'),
    users = require('./routes/users');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: false
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', routes);
app.use('/Users', users);

var server = http.createServer(app);

server.listen(8080);
