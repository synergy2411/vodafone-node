const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name : String,
    email : String,
    age : Number,
    isAdmin : Boolean
})

const UserModel = model("User", userSchema);

module.exports = UserModel;