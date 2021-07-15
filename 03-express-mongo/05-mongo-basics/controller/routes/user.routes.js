const UserModel = require("../model/user.model");


const getUsers = async (req, res) => {
    try{
        const allUsers = await UserModel.find()
        return res.send({payload : allUsers})
    }catch(err){
        console.log(err);
        return res.send(err)
    }
}

const createUser = async (req, res) => {
    // console.log("REQUEST BODY", req.body)
    try{
    const newUser = new UserModel(req.body)
    const savedUser = await newUser.save()
    return res.send({...savedUser._doc})
    }catch(err){
        console.log(err)
        return res.send(err)
    }
}

const getUser = async (req, res) => {
    const { id } = req.params;
    try{
    const userFound = await UserModel.findById(id);
    if(userFound){
        return res.send({...userFound._doc})
    }else{
        return res.send({message : "User not found."})
    }
    }catch(err){
        console.log(err)
        return res.send(err)
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try{
    const deletedUser = await UserModel.findByIdAndDelete(id)
    return res.send({...deletedUser._doc})
    }catch(err){
        console.log(err)
        return res.send(err)
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    if(req.body){
        try {
        const updatedUser = await  UserModel.findByIdAndUpdate(id, {...req.body})
        return res.send({...updatedUser._doc})
        }catch(err){
            console.log(err)
            return res.send(err)
        }
    }
}


module.exports = { getUsers, createUser, getUser, deleteUser, updateUser }