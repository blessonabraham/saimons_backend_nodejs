let express = require('express');
let client = require('../models/Client');
let auth = require('../middleware/auth');

let router = express.Router();

router.get('/get_my_clients_list', auth, (req, res) => {
    client.find({employee_id: req.user.id})
        .then((items => res.json(GlobalSuccessRespose(items))))
        .catch(err => res.json(GlobalErrorRespose(err.toString())));
});

router.get('/get_clients_list_hot', auth, (req, res) => {
    client.find({
        employee_id: req.user.id,
        deal: 'hot'
    }).then((items => res.json(GlobalSuccessRespose(items))))
        .catch(err => res.json(GlobalErrorRespose(err.toString())));
});

router.get('/get_clients_geo/:lat/:long', auth, (req, res) => {
    client.find({
        geolocation: {
            $geoWithin: {
                $centerSphere: [[req.params.lat, req.params.long],
                    40 / 3963.2]
            }
        }
    }).then((items => res.json(GlobalSuccessRespose(items))))
        .catch(err => res.json(GlobalErrorRespose(err.toString())));

});

router.post('/add_new', (req, res) => {
    const {
        name, mobile, state, district, geolocation, address, staff_name, staff_contact_number,
        email_id, base_machine, breaker, deal, followup_date, comment, sales_filter
    } = req.body;

    const newClient = new client({
        employee_id: req.user.id,
        name,
        mobile,
        state,
        district,
        geolocation,
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