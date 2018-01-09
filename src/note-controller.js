window.onload = function(){

  (function(exports) {
  function NoteController(noteList = new NoteList()) {
    this.noteList = noteList;
    this.noteList.createNote("Favourite drink: seltzer")
    this.view = new NoteListView(this.noteList);
  };

  NoteController.prototype.insertHtml = function() {
    document.getElementById('app').innerHTML = this.view.createHtmlString();
  };

  exports.NoteController = NoteController;
  })(this);

  controller = new NoteController();
  controller.insertHtml()
};
