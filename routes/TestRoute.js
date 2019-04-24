let express = require('express');
let test = require('../models/Test');

let router = express.Router();

router.get('/', (req, res) => {
    // test.find().then((items => res.json(GlobalSuccessRespose(items))))
    res.json(GlobalSuccessRespose())
});

router.post('/', (req, res) => {
    let {name} = req.body;
    const newTest = new test({
        name
    });

    newTest.save()
        .then(user => res.json(user))
        .catch(err => res.json(GlobalErrorRespose(err.toString())));
});

module.exports = router;