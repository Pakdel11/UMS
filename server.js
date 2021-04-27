const express = require("express");
const expresslayout = require("express-ejs-layouts");
const app = express();
const routes = require('./routes/page.js')
const db = require('./database/config/key').DBP;
const MongoDB = require('mongoose');
const path = require('path');

app.use(expresslayout);
app.set('view engine', 'ejs');
app.use('/view', express.static(path.join(__dirname, 'view')));
// app.use(bodyParser.json())
// app.use
// Database connection
MongoDB.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log('Mongodb has been connected'))
    .catch(err=> console.log(err))


// router linked
app.use(express.urlencoded({extended: false }))
app.use('/', routes)



// connect the server
const port = process.env.PORT || 3000;
app.listen(port, console.log(`ther server is runing on port ${port}`));