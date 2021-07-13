const yargs = require("yargs");
const notes = require("./utils/notes");

yargs.command({
    command : "add",
    description : "to add new note",
    builder : {
        title : {
            type : "string",
            demandOption : true,
            description : "title to add new note"
        },
        body: {
            type : "string",
            demandOption : true,
            description : "body to add new note"
        }
    }, 
    handler : (args) => {
        let {title, body} = args;
        notes.addNote(title, body);
    }
})

yargs.parse();

// Parse the command line arguments
// console.log(yargs.parse());


// > node index.js add --title="some title" --body="some body"
// > node index.js read --title="Some Title"
// > node index.js remove --title="Some Title"
// > node index.js list
