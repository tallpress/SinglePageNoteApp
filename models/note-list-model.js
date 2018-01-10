(function(exports) {
function NoteList() {
  this.notes = [];
}

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

exports.NoteList = NoteList;
})(this);
