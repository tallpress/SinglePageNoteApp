(function(exports) {
  id = 0
function Note(string) {
  this.text = string;
  this.id = id++
};

Note.prototype.getNoteText = function() {
  return this.text;
};

  exports.Note = Note;
})(this);
