function testCreateHtmlString() {

  var note = new Note();
  note.getNoteText = function() {
    return "Favourite drink: green tea"
  };

  var singleNoteView = new SingleNoteView(note);

  assert.isTrue(singleNoteView.createHtmlString() === "<div>Favourite drink: green tea</div>")
}

testRunner.addTest(testCreateHtmlString);
