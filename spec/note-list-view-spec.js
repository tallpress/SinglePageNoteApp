function testCreateHtmlString() {
  var note = new Note('Pesto rules');
  var note2 = new Note('Only with pasta');
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  noteList.addNote(note)
  noteList.addNote(note2)
  assert.isTrue(noteListView.createHtmlString() === "<ul><li>Pesto rules</li><li>Only with pasta</li></ul>");
};
testCreateHtmlString();
