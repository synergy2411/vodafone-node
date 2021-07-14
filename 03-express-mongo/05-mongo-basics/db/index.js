const { connect } = require("mongoose");

const uri = "mongodb+srv://synergy:s46BeW38iwyIL7Pw@cluster0.e9xsq.mongodb.net/vdf_db?retryWrites=true&w=majority";
connect(uri, {
    useCreateIndex : true,
    useFindAndModify : true,
    useUnifiedTopology: true,
    useNewUrlParser : true
})
    .then(response => {
        console.log("Mongo Connected....")
    }).catch(err => console.log(err));