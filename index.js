const express = require('express');
const mongoose = require('mongoose');
let auth = require('./middleware/auth');
const app = express();


//Middleware
app.use(express.json());


//Global Functions
global.GlobalErrorRespose = (content = "Sorry, We couldn't find that!") => {
    return {"status": "error", "content": content};
};
global.GlobalSuccessRespose = (content = "That was a success") => {
    return {"status": "success", "content": content};
};


//DB Connection
const db = require('config').get('mongoURI');
mongoose.connect(db, {
    useNewUrlParser: true, useCreateIndex: true
})
    .then(() => console.log('Mongo Connected'))
    .catch(err => {
        console.log(err)
    });


//Main Routing
app.use('/employee', require('./routes/EmployeeRoute'));
app.use('/client', auth, require('./routes/ClientRoute'));
app.use('/attendance', auth, require('./routes/AttendanceRoute'));
app.use('/test', require('./routes/TestRoute'));

// 404 Not Found
app.use('/', (req, res) => {
    res.status(404).json(GlobalErrorRespose())
});


//Server Starts
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server Started on port ${port}`)
});