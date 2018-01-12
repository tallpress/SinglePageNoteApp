(function(exports) {
function NoteController(noteList = new NoteList()) {
  this.noteList = noteList;
  this.view = new NoteListView(this.noteList);
};

NoteController.prototype.makeHTMLList = function(controllerListView = this.view) {
  document.getElementById('app').innerHTML = controllerListView.createHtmlString();
};

exports.NoteController = NoteController;
})(this);

function changeDivForGivenNote() {
  window.addEventListener("hashchange", viewSingleNote)
};

// this code executes after the click event, which changes the url
function viewSingleNote(notelist) {
  var id = window.location.hash.split("#")[1];
  var note = controller.noteList.getNoteById(parseInt(id));
  changeHTML(note)
};

function changeHTML(note) {
  singleNoteView = new SingleNoteView(note);
  document.getElementById('app').innerHTML = singleNoteView.createHtmlString();
};

function submitNewNote(){
  document.getElementById("text").addEventListener("submit", function(event) {
    event.preventDefault();
    controller.noteList.createNote(document.getElementById("note-to-add").value)
    controller.makeHTMLList();
    document.getElementById("note-to-add").value = "";
  })
}

// should probably hide and show this according to when it is neccesay
function backBtn() {
  document.getElementById("back-button").addEventListener("submit", function(event) {
    event.preventDefault();
    controller.makeHTMLList();
  })
}



controller = new NoteController();
controller.makeHTMLList()
changeDivForGivenNote();
submitNewNote();
backBtn();
