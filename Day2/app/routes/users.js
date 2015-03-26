var express = require('express');
var router = express.Router();

/* GET users listing. */
var users = [{
    id: 1,
    name: 'daniel',
    pet: 'dog'
}, {
    id: 2,
    name: 'juan',
    pet: 'cat'
}, {
    id: 3,
    name: 'maria',
    pet: 'cow'
}];

var getLastUser = function getLastUser() {
    return users[users.length - 1];
};
var getUserById = function getUserById(id) {
    var length = users.length - 1,
        user = null;
    for (var i = 0; i <= length; i++) {
        if (users[i].id == id) {
            user = users[i];
        }
    }
    return user;
};

router.all('/:id([0-9]+)', function (req, res, next) {
    var user = getUserById(req.params.id);
    console.log(req.params.id);
    console.log(user);
    if (!user) {
        next(new Error('No user by that ID!'))
        return;
    }
    req.user = user;
    next();
});

router.get('/', function (req, res, next) {
    res.send(users);
});

router.get('/:id', function (req, res, next) {
    res.send(getUserById(req.params.id));
});

router.post('/', function (req, res, next) {
    var lastUser = getLastUser(),
        newUser = {
            id: lastUser.id + 1,
            name: req.body.name,
            pet: req.body.pet,
        };

    users.push(newUser);
    res.json(newUser);
});

router.get('/:id/', function (req, res, next) {
    res.redirect(301, '/User');
});

module.exports = router;
