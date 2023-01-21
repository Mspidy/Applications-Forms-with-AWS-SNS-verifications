const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config')
const UserRouter = require('./routes/user');
var cors = require('cors')
var sns = require("aws-node-sns");
const AWS = require("aws-sdk");

const app = express();
app.use(express.json())

app.use('/user',cors(corsOptions), UserRouter)

var corsOptions = {
    origin:"http://localhost:4200",
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true}))


sns.createClient({
    accessKeyId: "",
    secretAccessKey: "",
    region: "",
  });

mongoose.Promise = global.Promise;



mongoose.connect(dbConfig.url,{
    useNewUrlParser:true
}).then(()=>{
    console.log("Database connected Successfully!!!");
}).catch((err)=>{
    console.log('Could not connected to the database',err);
    process.exit();
});


app.get('/', (req,res)=>{
    try{
        res.json({"message":"Successfully get data"})
    } catch(err){
        console.log(err)
    }
});

app.post("/user/otp", (req,res)=>{
    const recipients = req.body.phone;
    const SMSType = "Transactional";
    const SENDERID = "ANAND";
    const otp = Math.floor(1000 + Math.random() * 9000);
    const text = `${otp},is the OTP for New User`;
    if(recipients){
        sns.sendSMS(text, recipients, SENDERID, SMSType, function(error,data){
            if(error){
                res.status(404).json({ status: "failed", err: error});
            } else{
                console.log("OTP sent successfully !!!");
                res.status(200).json({ status: "success", data: {data:data, otp:otp}});
            }
        });
    } else{
        res.status(404).json({status:"failed", msg: "Enter a number"});
    }
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000 !!!")
})