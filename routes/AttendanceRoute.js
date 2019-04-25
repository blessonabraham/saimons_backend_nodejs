let express = require('express');
let attendance = require('../models/Attendance');

let router = express.Router();


router.post('/add_new', (req, res) => {
    const {event} = req.body;

    const newAttendance = new attendance({
        employee_id: req.user.id,
        event
    });

    newAttendance.save()
        .then(user => res.json(GlobalSuccessRespose(user)))
        .catch(err => res.json(GlobalErrorRespose(err.toString())));

});


module.exports = router;