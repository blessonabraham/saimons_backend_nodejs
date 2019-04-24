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
            type: String,
            required: true,
            enum: ["andaman & nicobar", "andhra pradesh", "arunachal pradesh", "assam", "bihar", "chandigarh", "chhattisgarh", "dadra & nagar haveli", "daman & diu", "delhi", "goa", "gujarat", "haryana", "himachal pradesh", "jammu & kashmir", "jharkhand", "karnataka", "kerala", "lakshadweep", "madhya pradesh", "maharashtra", "manipur", "meghalaya", "mizoram", "nagaland", "orissa", "pondicherry", "punjab", "rajasthan", "sikkim", "tamil nadu", "tripura", "uttar pradesh", "uttaranchal", "west bengal"]
        },
        district: {
            type: String,
            required: true,
            enum: ["adoor", "alappuzha", "attingal", "chalakudy", "changanassery", "cherthala", "chittur-thathamangalam", "guruvayoor", "kanhangad", "kannur", "kasaragod", "kayamkulam", "kochi", "kodungallur", "kollam", "kottayam", "kozhikode", "kunnamkulam", "malappuram", "mattannur", "mavelikkara", "mavoor", "muvattupuzha", "nedumangad", "neyyattinkara", "nilambur", "ottappalam", "palai", "palakkad", "panamattom", "panniyannur", "pappinisseri", "paravoor", "pathanamthitta", "peringathur", "perinthalmanna", "perumbavoor", "ponnani", "punalur", "puthuppally", "koyilandy", "shoranur", "taliparamba", "thiruvalla", "thiruvananthapuram", "thodupuzha", "thrissur", "tirur", "vaikom", "varkala", "vatakara"]
        },
        location: {
            type: String,
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
            enum: [400,450,650,750,1000,1400]
        },
        deal: {
            type: String,
            required: true,
            enum: ['hot','cold']
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
            enum: ['margin_money_received','dd_received','advance_received','finance_tie_up','negotiation_stage','requirement_identified','breaker_delivered']
        },
    },
    {
        timestamps: true
    });

ClientSchema.plugin(beautifyUnique);
module.exports = Client = mongoose.model('Client', ClientSchema);