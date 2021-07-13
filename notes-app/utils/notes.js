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

const saveNotes = notes => {
    fs.writeFileSync("./notes.json", JSON.stringify(notes))
    console.log(chalk.green("Notes saved"))
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const noteFound = notes.find(note => note.title === title)
    if(noteFound){
        console.log(chalk.red("Note already exists. Try again!"))
    }else{
        let note = {title, body};
        notes.push(note)
        saveNotes(notes);
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

module.exports = { 
    addNote, readNote
}