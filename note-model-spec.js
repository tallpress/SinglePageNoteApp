(function(exports) {
  function testNoteMessage() {
    var note = new Note();
    assert.isTrue(note.text === "My favourite langauge is JavaScript")

    }

  testNoteMessage();
})(this);
