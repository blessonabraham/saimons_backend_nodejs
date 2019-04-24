let express = require('express');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let auth = require('../middleware/auth');
let employee = require('../models/Employee');

let router = express.Router();

router.get('/', auth, (req, res) => {
    employee.find().then((items => res.json(GlobalSuccessRespose(items))))
});

router.post('/login', (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        res.status(400).json(GlobalErrorRespose('Please enter all fields'));
    }

    // Check for existing employee
    employee.findOne({email})
        .then(user => {
            if (!user) return res.status(400).json(GlobalErrorRespose('User Does not exist'));

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json(GlobalErrorRespose('Invalid credentials'));
                    res.json(GlobalSuccessRespose(jwt.sign({id: user.id}, require('config').get('jwtSecret'))))
                })
                .catch(err => res.json(GlobalErrorRespose(err.toString())));
        })
        .catch(err => res.json(GlobalErrorRespose(err.toString())));


});

router.post('/register', (req, res) => {
    let {name, email, password, mobile} = req.body;
    const newUser = new employee({
        name,
        email,
        password,
        mobile
    });

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            if (err) res.json(GlobalErrorRespose('Please enter all fields'));
            newUser.password = hash;
            newUser.save()
                .then(user => res.json(GlobalSuccessRespose(jwt.sign({id: user.id}, require('config').get('jwtSecret')))))
                .catch(err => res.json(GlobalErrorRespose(err.toString())));
        });
    });
});

module.exports = router;