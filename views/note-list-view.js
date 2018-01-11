(function(exports) {
function NoteListView(noteList) {

  this.noteList = noteList;
};

NoteListView.prototype.createHtmlString = function() {
  var html = "<ul>";
  var list = this.noteList.getNotes();
  for(var i = 0; i < list.length; i++) {
    var note = list[i];
    html += "<li><a href='#" + note.id + "'>" + note.getNoteText().substr(0, 20) + "</a></li>"
  }
  return html += "</ul>"
};

exports.NoteListView = NoteListView;
})(this);
