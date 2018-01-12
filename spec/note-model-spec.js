(function(exports) {

  function testInitializedNoteMessage() {
    var note = new Note("My favourite langauge is JavaScript");
    assert.isTrue(note.text === "My favourite langauge is JavaScript");
  };

  function testGetNoteMessage() {
    var note = new Note("My favourite langauge is JavaScript");
    assert.isTrue(note.getNoteText() === "My favourite langauge is JavaScript");
  };

  function testNoteID() {
    var note = new Note("My favourite langauge is JavaScript");
    assert.isTrue(note.id === 2);
  };

  exports.testInitializedNoteMessage = testInitializedNoteMessage;
  exports.testGetNoteMessage = testGetNoteMessage;
  exports.testNoteID = testNoteID;
})(this);
