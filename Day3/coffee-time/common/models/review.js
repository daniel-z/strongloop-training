module.exports = function (Review) {
    Review.beforeRemote('create', function (context, user, next) {
        context.req.body.Rate = Number(context.req.body.Rate);
        console.log('REVIEW BODY: ' + context.req.body.Rate);
        if (!context.req.body.Rate || context.req.body.Rate < 1 || context.req.body.Rate > 5) {
            var err = new Error('Rate must be between 1 and 5');
            err.status = 400;
            next(err);
            return;
        }

        next();
    });
};

/* {
  "username": "daniel",
  "email": "daniel@daniel.com",
  "password": "1234",
  "id": 0
}*/
