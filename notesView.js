const NotesModel = require("./notesModel")

class NotesView {

  constructor(notesModelInstance) {
    this.notesModelInstance = notesModelInstance;
    this.mainContainerEl = document.querySelector('#main-container');
    this.addNotebutton = document.querySelector('#add-note');
    this.inputEl = document.querySelector('#message-input');

    this.addNotebutton.addEventListener("click", () => {
      this.notesModelInstance.addNote(this.inputEl.value);
      this.displayNotes();
    })

  }

//   get the list of notes from the model.
// for each note, create a new div element on the page (with an HTML class "note").

  displayNotes() {
    let notes = this.notesModelInstance.getNotes();

    for (const note of notes) {
      let div = document.createElement("div");
      div.className = "note";
      div.innerText = note;
      this.mainContainerEl.append(div);
    }
  }

}

module.exports = NotesView; 