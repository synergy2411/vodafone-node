const UserModel = require("../model/user.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const MY_SUPER_SECRET_KEY = process.env.SECRET_KEY || "MY secret key pharase"


const createUser = async (req, res) => {
    if(req.body){
        const { password } = req.body;
        try{
            const hashedPassword = await bcryptjs.hash(password, 12);
            const newUser = new UserModel({...req.body, password : hashedPassword })
            try{
                const user = await newUser.save()
                const token = jwt.sign({id : user._doc._id}, MY_SUPER_SECRET_KEY , { expiresIn : "2 days"})
                return res.send({...user._doc, password : null, token})
            }catch(err){
                console.log(err)
                return res.send({message : "unable to create", err})
            }
        }catch(err){
            console.log("unable to hash password")
        }
    }else{
        return res.send({message : "request body not found"})
    }
}

const getProfile =  (req, res) => {
    // Check for email & password from DB

    jwt.verify(req.token, MY_SUPER_SECRET_KEY, async (err, decode) => {
        if(err){
            return res.send({message : "token not valid"})
        }
        console.log("DECODE : ", decode);
        const { id } = decode;
        try{
            const user = await UserModel.findById(id)
            return res.send({...user._doc, password: null, message : "SUCCESS"})
        }catch(err){
            console.log(err)
            return res.send({message : "unable to find user"})
        }
    });
}

module.exports = {
    createUser,
    getProfile
}