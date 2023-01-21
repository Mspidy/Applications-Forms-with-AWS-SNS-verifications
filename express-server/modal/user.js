var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    username:{
        type: String,
        default:''
    },
    email:{
        type: String,
        default:''
    },
    password:{
        type: String,
        default:''
    },
    mobileNumber:{
        type: Number,
        default:''
    },
    re_password:{
        type: String,
        default:''
    }
});

var user = new mongoose.model('User', schema);
module.exports = user;