(function(exports) {
function SingleNoteView(note) {
  this.note = note
};

SingleNoteView.prototype.createHtmlString = function() {
  return "<div>" + this.note.getNoteText() + "</div>";
}

exports.SingleNoteView = SingleNoteView;
})(this);
