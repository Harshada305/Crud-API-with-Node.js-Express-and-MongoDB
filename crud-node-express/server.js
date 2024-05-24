const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const UserRoute = require('./app/routes/User')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});



const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});




app.use('/user',UserRoute)



app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});