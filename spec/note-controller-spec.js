function testInsertHTML() {
  var noteListView = new NoteListView();

  noteListView.createHtmlString = function() {
    return "<ul><li>Favourite drink: milkshake</li></ul>"
  };

  var controller = new NoteController()
  controller.makeHTMLList(noteListView);
  assert.isTrue(document.getElementById('app').innerHTML === "<ul><li>Favourite drink: milkshake</li></ul>")
};


function testPageRendersWithEmptyList() {
  var noteListView = new NoteListView();
  assert.isTrue(document.getElementById('app').innerHTML === "");
}

function resetAppDiv() {
  document.getElementById('app').innerHTML = "";
}

resetAppDiv();
testInsertHTML();
resetAppDiv();
testPageRendersWithEmptyList();
resetAppDiv();
