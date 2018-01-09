(function(exports) {
function Note(string) {
  this.text = string;
};
  exports.Note = Note;
})(this);


Note.prototype.getNoteText = function() {
  return this.text;
};
