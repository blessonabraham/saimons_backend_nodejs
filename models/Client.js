const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

let Schema = mongoose.Schema;

let ClientSchema = new Schema({
        employee_id: {
            type: String
        },
        name: {
            type: String,
            required: true
        },
        mobile: {
            type: Number,
            required: true,
        },
        state: {
            type: Number,
            required: true,
        },
        district: {
            type: Number,
            required: true,
        },
        geolocation: {
            type: [Number],
            index: '2d',
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        staff_name: {
            type: String,
            required: true,
        },
        staff_contact_number: {
            type: String,
            required: true,
        },
        email_id: {
            type: String,
            required: true,
        },
        base_machine: {
            type: String,
            required: true,
        },
        breaker: {
            type: Number,
            required: true,
            enum: [400, 450, 650, 750, 1000, 1400]
        },
        deal: {
            type: String,
            required: true,
            enum: ['hot', 'cold']
        },
        followup_date: {
            type: Date,
        },
        comment: {
            type: String
        },
        sales_filter: {
            type: String,
            required: true,
            enum: ['margin_money_received', 'dd_received', 'advance_received', 'finance_tie_up', 'negotiation_stage', 'requirement_identified', 'breaker_delivered']
        },
    },
    {
        timestamps: true
    });

ClientSchema.plugin(beautifyUnique);
module.exports = Client = mongoose.model('Client', ClientSchema);