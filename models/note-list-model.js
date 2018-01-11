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

NoteList.prototype.getNoteById = function(searchId) {
  for(var i = 0; i < this.notes.length; i++){
    if (this.notes[i].id === searchId){
      return this.notes[i];
    };
  };
};

exports.NoteList = NoteList;
})(this);
