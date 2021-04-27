
const mongo = require('mongoose');
const Schema = mongo.Schema

const Mongoodb = new Schema({
    Dname: {
        type: String,
        require: true
    },
    Dlastname: {
        type: String,
        require: true
    },
    Dnumber: {
        type: String,
        require: true
    },
    Daddress: {
        type: String,
        require: true
    },
    Dort: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now 
    }
})
const User = mongo.model('user', Mongoodb);
module.exports = User; 

