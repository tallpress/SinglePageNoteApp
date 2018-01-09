function testInitializedNoteMessage() {
  var note = new Note("My favourite langauge is JavaScript");
  assert.isTrue(note.text === "My favourite langauge is JavaScript");
};
testInitializedNoteMessage();

function testGetNoteMessage() {
  var note = new Note("My favourite langauge is JavaScript");
  assert.isTrue(note.getNoteText() === "My favourite langauge is JavaScript");
};
testGetNoteMessage();
