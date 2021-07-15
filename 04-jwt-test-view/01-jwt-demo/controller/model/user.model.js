const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    email : {
        required : true,
        type : String
    },
    password : {
        required: true,
        type : String
    },
    username : {
        type : String
    }
})

module.exports =  model("User", userSchema)