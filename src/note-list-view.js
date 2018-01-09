(function(exports) {
function NoteListView(noteList) {
  this.notesArray = noteList;
};
exports.NoteListView = NoteListView;
})(this);

NoteListView.prototype.viewNoteList = function() {
  return this.notesArray
}

NoteListView.prototype.createHtmlString = function() {
  return "<ul><li>" + this.viewNoteList()
  .getNotes()
  .map(note => note.getNoteText())
  .join("</li><li>") + "</li></ul>";
};
