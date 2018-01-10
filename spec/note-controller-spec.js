function testInsertHTML() {
  var noteListView = new NoteListView();

  noteListView.createHtmlString = function() {
    return "<ul><li>Favourite drink: milkshake</li></ul>"
  };

  var noteController = new NoteController()
  noteController.insertHtml(noteListView);
  assert.isTrue(document.getElementById('app').innerHTML === "<ul><li>Favourite drink: milkshake</li></ul>")
};

testInsertHTML();
