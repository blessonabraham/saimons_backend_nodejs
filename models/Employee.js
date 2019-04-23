const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

let Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: {unique: true}
        },
        password: {
            type: String,
            required: true
        },
        mobile: {
            type: Number,
            required: true,
            index: {unique: true}
        }
    },
    {
        timestamps: true
    });

EmployeeSchema.plugin(beautifyUnique);
module.exports = User = mongoose.model('Employee', EmployeeSchema);