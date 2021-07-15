const express = require("express");
const { getUsers, createUser, getUser, deleteUser, updateUser } = require("./controller/routes/user.routes")
require("./db");

const app = express();

app.use(express.json())         // will parse request body and attach it with req.body object

app.get("/users", getUsers)

app.post("/users", createUser)

app.get("/users/:id", getUser)

app.delete("/users/:id", deleteUser)

app.patch("/users/:id", updateUser)

app.listen(9090, () => console.log("Server started at PORT : 9090"))
