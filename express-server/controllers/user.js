const UserModel = require('../modal/user');
//const loginUser = require('../modal/user2');

exports.create = async (req,res)=>{
    if(!req.body.username && !req.body.password && !req.body.email && !req.body.mobileNumber && !req.body.re_password){
        res.status(400).send({message: "Content can not be empty!"});
    }

    const user = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        mobileNumber: req.body.mobileNumber,
        repassword: req.body.re_password
    });

    await user.save().then(data=>{
        res.send({
            message: "User login Successfully",
            user:data
        });
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
};

//retrive all user from the database
exports.findAll = async(req,res)=>{
    try{
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch(error){
        res.status(400).json({message: error.message});
    }
};

// exports.create = async (req,res)=>{
//     if(!req.body.username && !req.body.mobileNumber){
//         res.status(400).send({message: "Content can not be empty!"})
//     }

//     const registerUser = new loginUser({
//         username: req.body.username,
//         mobileNumber: req.body.mobileNumber,
//     })
// }