const express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer')
const mongoose = require('mongoose')
const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any())

app.use('/', route);

mongoose.connect("mongodb+srv://thorium-cohort:qwertyuiop@cluster0.xyklh.mongodb.net/group25Database?authSource=admin&replicaSet=atlas-wc30tm-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", {
    useNewUrlParser: true
})
.then(() => console.log('Connected to Database'))
.catch(err => console.log(err))

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});