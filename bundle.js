(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return [...this.notes];
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
        setNotes(array) {
          this.notes = array;
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesModel2 = require_notesModel();
      var NotesView2 = class {
        constructor(notesModelInstance) {
          this.notesModelInstance = notesModelInstance;
          this.mainContainerEl = document.querySelector("#main-container");
          this.addNotebutton = document.querySelector("#add-note");
          this.inputEl = document.querySelector("#message-input");
          this.addNotebutton.addEventListener("click", () => {
            this.notesModelInstance.addNote(this.inputEl.value);
            this.displayNotes();
          });
        }
        displayNotes() {
          this.remove_notes();
          let notes = this.notesModelInstance.getNotes();
          for (const note of notes) {
            let div = document.createElement("div");
            div.className = "note";
            div.innerText = note;
            this.mainContainerEl.append(div);
          }
          this.clear_text();
        }
        remove_notes() {
          let all_notes = document.querySelectorAll(".note");
          for (let element of all_notes) {
            element.remove();
          }
        }
        clear_text() {
          this.inputEl.value = "";
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var notesModel = new NotesModel();
  var view = new NotesView(notesModel);
  view.displayNotes();
})();
