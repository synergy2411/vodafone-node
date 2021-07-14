const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
    try{
        const notesBuffer = fs.readFileSync("./notes.json")
        const notesString = notesBuffer.toString()
        return JSON.parse(notesString)
    }catch(err){
        return [];
    }
}

const saveNotes = payload => {
    fs.writeFileSync("./notes.json", JSON.stringify(payload.notes))
    if(payload.operation === "ADD")
    console.log(chalk.green("Notes saved"))
    else 
    console.log(chalk.green("Notes updated"))
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const noteFound = notes.find(function(note){
        return note.title === title
    })
    if(noteFound){
        console.log(chalk.red("Note already exists. Try again!"))
    }else{
        let note = {title, body};
        notes.push(note)
        saveNotes({notes, operation : "ADD"});
    }
}

const readNote = title => {
    const notes = loadNotes();
    const foundNote = notes.find(note => note.title === title);
    if(!foundNote){
        console.log(chalk.red("Note does not exist."))
    }else{
        console.log(chalk.blue("______________________________"))
        console.log(chalk.grey("Title : ", foundNote.title))
        console.log(chalk.grey("Body : ", foundNote.body))
        console.log(chalk.blue("______________________________"))
    }
}

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(chalk.blue("_________________________"))
        console.log("Title : ", note.title);
        console.log("Body : ", note.body);
    })
}

const removeNote = title => {
    const notes = loadNotes();
    const position = notes.findIndex(note => note.title === title)
    if(position >= 0){
        const removedItem = notes.splice(position, 1);
        if(removedItem.length>0){
            saveNotes({notes, operation : "REMOVE"});
        }else{
            console.log(chalk.red("Unable to remove note"))
        }

    }else{
        console.log(chalk.red("Note does not exists."))
    }
}

module.exports = { 
    addNote, readNote, listNotes, removeNote
}