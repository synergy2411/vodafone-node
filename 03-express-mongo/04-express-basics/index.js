const express = require("express")
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res, next) => {
    // res.send({message : "SUCCESS"})
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(9090, () => {console.log("Server started at PORT : 9090")})








// const users = [
//     {id: 1, email : "test1@test.com", age : 34},
//     {id: 2, email : "test2@test.com", age : 36},
//     {id: 3, email : "test3@test.com", age : 38},
// ]

// app.get("/users", (req, res) => {           // http://localhost:9090/users - GET
//     res.send({users})
// })

// app.post("/users", (req, res) => {          // http://localhost:9090/users - POST
//     res.send({message : "POST API SUCCESS"});
// })

// app.get("/users/:id", (req, res) => {
//     const {id} = req.params;
//     console.log("ID - ", id);
//     // const position = users.findIndex(user => user.id === Number(id))
//     const position = users.findIndex(user => user.id == id)
//     if(position >= 0){
//         console.log("USER - ", position);
//         return res.send({payload : users[position]});
//     }
//     return res.send({message : "Not Found"})
// })


// http:localhost:9090/