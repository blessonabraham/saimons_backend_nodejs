const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

let Schema = mongoose.Schema;

let TestSchema = new Schema({
        name: {
            type: String,
            required: true,
            enum: ["andaman & nicobar", "andhra pradesh", "arunachal pradesh", "assam", "bihar", "chandigarh", "chhattisgarh", "dadra & nagar haveli", "daman & diu", "delhi", "goa", "gujarat", "haryana", "himachal pradesh", "jammu & kashmir", "jharkhand", "karnataka", "kerala", "lakshadweep", "madhya pradesh", "maharashtra", "manipur", "meghalaya", "mizoram", "nagaland", "orissa", "pondicherry", "punjab", "rajasthan", "sikkim", "tamil nadu", "tripura", "uttar pradesh", "uttaranchal", "west bengal"]
        }
    },
    {
        timestamps: true
    });

TestSchema.plugin(beautifyUnique);
module.exports = Test = mongoose.model('Test', TestSchema);