const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

const notesModel = new NotesModel();
const view = new NotesView(notesModel);


view.displayNotes();

