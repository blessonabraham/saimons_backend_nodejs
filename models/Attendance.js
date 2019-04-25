const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

let Schema = mongoose.Schema;

let AttendanceSchema = new Schema({
        employee_id: {
            type: String,
            required: true
        },
        event: {
            type: String,
            required: true,
            enum: ['check_in','check_out']
        }
    },
    {
        timestamps: true
    });

AttendanceSchema.plugin(beautifyUnique);
module.exports = Attendance = mongoose.model('Attendance', AttendanceSchema);