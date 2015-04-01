// module.exports = function(server) {
//   // Install a `/` route that returns server status
//   var router = server.loopback.Router();
//   router.get('/', server.loopback.status());
//   server.use(router);
// };

module.exports = function (app) {
    var restApiRoot = app.get('restApiRoot');
    app.get(restApiRoot + '/ping', function (req, res, next) {
        res.end('pong');
    })
};
