var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    username:{
        type: String,
        default:''
    },
    mobileNumber:{
        type: Number,
        default: 0
    },
    otp:{
        type: Number,
        default: 0
    }
});

var user2 = new mongoose.model('User2', schema);
module.exports = user2;