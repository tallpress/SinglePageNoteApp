(function(exports) {
function NoteList() {
  this.notes = []
}
exports.NoteList = NoteList;
})(this)

NoteList.prototype.addNote = function(note) {
  this.notes.push(note);
};

NoteList.prototype.getNotes = function() {
  return this.notes;
};

NoteList.prototype.createNote = function(text) {
  var note = new Note(text);
  this.addNote(note);
};
