module.exports = function (CoffeeShop) {
    CoffeeShop.status = function (id, cb) {
        CoffeeShop.findById(id, function (err, shop) {
            if (err) {
                cb(err);
                return;
            }
            var hora = (new Date()).getHours();
            var status = (hora >= shop.horaDeApertura &&
                hora >= shop.horaDeCerrado);
            cb(null, {
                status: status
            });
        });
    };
    CoffeeShop.remoteMethod('status', {
        accepts: {
            arg: 'id',
            type: 'any',
            description: 'Model id',
            required: true
        },
        accessType: 'READ',
        returns: {
            arg: 'status',
            type: 'json'
        },
        http: [{
            verb: 'get',
            path: '/:id/status'
        }]
    });
};
