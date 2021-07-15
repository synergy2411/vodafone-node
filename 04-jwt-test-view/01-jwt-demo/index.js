const express = require("express");
require("./db");
const { createUser, getProfile } = require("./controller/routes/user.routes")
const env = require("dotenv");

env.config();
// process.env
const PORT = process.env.PORT || 9090
const app = express();

app.use(express.json());

// app.get("/users", )

app.post("/users", createUser)

const ensureToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    if(authHeader){
        // Bearer <token>
        const token = authHeader.split(" ")[1]
        if(token){
            req.token = token;
            next()
        }else{
            return res.send({message : "Token does not exist"})
        }
    }else{
        return res.send({message : "Auth header not exist"})
    }
}


app.get("/users/profile", ensureToken, getProfile)

app.listen(PORT, () => console.log("Server started at PORT : ", PORT))