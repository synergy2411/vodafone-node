const { connect } = require("mongoose");
const uri = "mongodb+srv://synergy:s46BeW38iwyIL7Pw@cluster0.e9xsq.mongodb.net/the_users_db?retryWrites=true&w=majority";
connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: true,
})
  .then((response) => {
    console.log("Mongoose connected...");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
