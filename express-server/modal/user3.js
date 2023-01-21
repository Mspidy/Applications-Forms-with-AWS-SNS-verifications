var mongoose = require('mongoose');
var schema3 = new mongoose.Schema({
    fullnames:{
        type: String,
        default:''
    },
    headline:{
        type: String,
        default:''
    },
    companyname:{
        type: String,
        default:''
    },
    position:{
        type:String,
        default:''
    },
    dateofjoining:{
        type:String,
        default:''
    },
    workdescription:{
        type:String,
        default:''
    },
    usedskills:{
        type:String,
        default:''
    },
    skillsname:{
        type:String,
        default:''
    },
    yoe:{
        type:String,
        default:''
    },
    projecttitle:{
        type:String,
        default:''
    },
    projecturl:{
        type:String,
        default:''
    },
    projectdescription:{
        type:String,
        default:''
    },
    projectdurations:{
        type:String,
        default:''
    },
    name:{
        type:String,
        default:''
    },
    issuingorganisation:{
        type:String,
        default:''
    },
    certificate:{
        type:String,
        default:''
    },
    email:{
        type:String,
        default:''
    },
    phone:{
        type:String,
        default:''
    },
    skypeid:{
        type:String,
        default:''
    }
});

var user3 = new mongoose.model('user3', schema3);
module.exports = user3;