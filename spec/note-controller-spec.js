(function(exports) {
  function testInsertHTML() {
    resetAppDiv();

    var noteListView = new NoteListView();

    noteListView.createHtmlString = function() {
      return "<ul><li>Favourite drink: milkshake</li></ul>"
    };

    var controller = new NoteController()
    controller.makeHTMLList(noteListView);
    assert.isTrue(document.getElementById('app').innerHTML === "<ul><li>Favourite drink: milkshake</li></ul>")
    resetAppDiv();
  };

  function testPageRendersWithEmptyList() {
    resetAppDiv();
    var noteListView = new NoteListView();
    assert.isTrue(document.getElementById('app').innerHTML === "");
    resetAppDiv();
  }

  function resetAppDiv() {
    document.getElementById('app').innerHTML = "";
  }

  exports.testInsertHTML = testInsertHTML;
  exports.testPageRendersWithEmptyList = testPageRendersWithEmptyList;
})(this);
