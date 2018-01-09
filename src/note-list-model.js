(function(exports) {
function NoteList() {
  this.notes = [];
}
exports.NoteList = NoteList;
})(this);

NoteList.prototype.addNote = function(note) {
  this.notes.push(note);
};

NoteList.prototype.getNotes = function() {
  return this.notes;
};

NoteList.prototype.createNote = function(string) {
  var note = new Note(string);
  this.addNote(note);
};
