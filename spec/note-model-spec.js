(function(exports) {
  function testInitializedNoteMessage() {
    var note = new Note("My favourite langauge is JavaScript");
    assert.isTrue(note.text === "My favourite langauge is JavaScript");
  };

  testInitializedNoteMessage();
})(this);


(function(exports) {
  function testGetNoteMessage() {
    var note = new Note("My favourite langauge is JavaScript");
    assert.isTrue(note.getNoteText() === "My favourite langauge is JavaScript");
  };

  testGetNoteMessage();
})(this);
