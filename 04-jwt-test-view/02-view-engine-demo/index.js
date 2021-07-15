const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3030

app.set("view engine", "hbs")

app.engine("hbs", exphbs({
    extname : ".hbs",
    layoutsDir : __dirname + "/views/layout",
    partialsDir : __dirname+"/views/partials"
}))

app.get("/template", (req, res) => {
    const posts = [
        { author : "John Doe", title : "Awesome Post", comments : ["Good to start", "Great Course"], image : "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"},
        { author : "Jenny Doe", title : "Great Post", comments : [], image : "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"},
        { author : "James Doe", title : "Not Bad", comments : ["Good to start", "Great Course"], image : "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"},
    ]
    
    res.render("main",{
        layout : "index",
        posts,
        helpers : {
            uppercase : (item) => {
                return item.author.toUpperCase()
            }
        }
    })
})

app.get("/users", (req, res) => {
    res.render("users", {
        layout : "index"
    })
})

app.get("/contact", (req, res) => {
    res.render("contact", {
        layout : "index"
    })
})



app.listen(PORT, () => console.log("Started at Port : ", PORT));