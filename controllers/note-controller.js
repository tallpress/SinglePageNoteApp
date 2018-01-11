(function(exports) {
function NoteController(noteList = new NoteList()) {
  noteList.createNote("Favourite drink: seltzer")
  this.view = new NoteListView(noteList);
  this.noteList = noteList
};

NoteController.prototype.insertHtml = function(controllerListView = this.view) {
  document.getElementById('app').innerHTML = controllerListView.createHtmlString();
};


NoteController.prototype.changeURLforGivenNote = function () {
  window.addEventListener("hashchange", this.viewSingleNote)
};


// this code executes after the click event, which changes the url
NoteController.prototype.viewSingleNote = function () {

  var id = window.location.hash.split("#")[1];
  console.log(this.noteList)
  console.log(this.noteList.getNoteById(parseInt(id)));
  var note = this.noteList.getNoteById(parseInt(id));
  singleNoteView = new SingleNoteView(note);
  document.getElementById('app').innerHTML = singleNoteView.createHtmlString();
};



exports.NoteController = NoteController;
})(this);

controller = new NoteController();
controller.insertHtml()
controller.changeURLforGivenNote();
