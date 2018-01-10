  (function(exports) {
  function NoteController(noteList = new NoteList()) {
    noteList.createNote("Favourite drink: seltzer")
    this.view = new NoteListView(noteList);
  };

  NoteController.prototype.insertHtml = function(controllerListView = this.view) {
    document.getElementById('app').innerHTML = controllerListView.createHtmlString();
  };

  exports.NoteController = NoteController;
  })(this);

  controller = new NoteController();
  controller.insertHtml()
