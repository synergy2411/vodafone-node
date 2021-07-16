const express = require("express");
const cors = require("cors");
const { getUsers, createUser, getUser, deleteUser, updateUser } = require("./controller/routes/user.routes")
require("./db");


const PORT = process.env.PORT || 9090;

const app = express();

app.use(cors())

app.use(express.json())         // will parse request body and attach it with req.body object

app.get("/users", getUsers)

app.post("/users", createUser)

app.get("/users/:id", getUser)

app.delete("/users/:id", deleteUser)

app.patch("/users/:id", updateUser)

app.listen(PORT, () => console.log("Server started at PORT : ", PORT))

module.exports = app;