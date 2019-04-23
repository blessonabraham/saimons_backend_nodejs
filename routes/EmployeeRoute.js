let express = require('express');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let auth = require('../middleware/auth');
let user = require('../models/Employee');

let router = express.Router();

router.get('/', auth, (req, res) => {
    user.find().then((items => res.json(items)))
});

router.post('/register', (req, res) => {
    let {name, email, password, mobile} = req.body;
    const newUser = new user({
        name,
        email,
        password,
        mobile
    });

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            if (err) res.json(GlobalErrorRespose());
            newUser.password = hash;
            newUser.save()
                .then(user => res.json(jwt.sign({id: user.id}, require('config').get('jwtSecret'))))
                .catch(err => res.json(GlobalErrorRespose(err.toString())));
        });
    });
});

module.exports = router;