let express = require('express');
let client = require('../models/Client');

let router = express.Router();

router.post('/add_new', (req, res) => {
    const {
        name, mobile, state, district, location, address, staff_name, staff_contact_number,
        email_id, base_machine, breaker, deal, followup_date, comment, sales_filter
    } = req.body;

    const newClient = new client({
        employee_id: req.user.id,
        name,
        mobile,
        state,
        district,
        location,
        address,
        staff_name,
        staff_contact_number,
        email_id,
        base_machine,
        breaker,
        deal,
        followup_date,
        comment,
        sales_filter
    });

    newClient.save()
        .then(user => res.json(GlobalSuccessRespose(user)))
        .catch(err => res.json(GlobalErrorRespose(err.toString())));
});

module.exports = router;