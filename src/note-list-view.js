(function(exports) {
function NoteListView(noteList) {
  this.noteList = noteList;
};

NoteListView.prototype.viewNoteList = function() {
  return this.noteList
}

NoteListView.prototype.createHtmlString = function() {
  return "<ul><li>" + this.viewNoteList()
  .getNotes()
  .map(note => note.getNoteText())
  .join("</li><li>") + "</li></ul>";
};

exports.NoteListView = NoteListView;
})(this);
