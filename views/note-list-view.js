(function(exports) {
function NoteListView(noteList) {
  this.noteList = noteList;
};

NoteListView.prototype.createHtmlString = function() {
  return "<ul><li>" + this.noteList
  .getNotes()
  .map(note => note.getNoteText())
  .join("</li><li>") + "</li></ul>";
};

exports.NoteListView = NoteListView;
})(this);