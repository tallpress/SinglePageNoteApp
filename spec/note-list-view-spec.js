(function(exports) {
  function testCreateHtmlString(noteList) {
    var noteListView = new NoteListView(noteList);
    var noteList = new NoteList();
    var note = new Note('Pesto rules');
    var note2 = new Note('Only with pasta');

    noteList.addNote(note)
    noteList.addNote(note2)

    assert.isTrue(noteListView.createHtmlString() === "<ul><li><div>Pesto rules</div></li><li><div>Only with pasta</div></li></ul>")

    }

  testInitializedNoteMessage();
})(this);
