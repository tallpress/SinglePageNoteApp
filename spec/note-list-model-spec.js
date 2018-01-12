(function(exports){
  function testInitializedNoteList() {
    var noteList = new NoteList();
    assert.isTrue(noteList.notes.length === 0)
  };

  function testAddNote() {
    var noteList = new NoteList();
    var note = new Note("note 1")
    noteList.addNote(note)
    assert.isTrue(noteList.notes.length === 1)
  };

  function testGetNotes() {
    var noteList = new NoteList();
    var note = new Note("note 1")
    var note2 = new Note("note 2")

    noteList.addNote(note)
    noteList.addNote(note2)
    assert.isTrue(noteList.getNotes() === noteList.notes)
  };

  function testCreateNote(note) {
    var noteList = new NoteList();

    noteList.createNote("note 1")
    assert.isTrue(noteList.notes[0].getNoteText() === "note 1")
  };

  function testGetNoteById() {
    var notelist = new NoteList();

    notelist.createNote("lkasdfj;alsdkfj;alfskjfa;sdlk")
    notelist.createNote("daaaaaaaaaaaaaa,.sandflkjndasjklfnadmf;sdlk")
    notelist.createNote("laaaaadmfnadnbabnababababababababaabababab")
    assert.isTrue(notelist.getNoteById(5).getNoteText() === "daaaaaaaaaaaaaa,.sandflkjndasjklfnadmf;sdlk")
  };

  exports.testInitializedNoteList = testInitializedNoteList;
  exports.testAddNote = testAddNote;
  exports.testGetNotes = testGetNotes;
  exports.testCreateNote = testCreateNote;
  exports.testGetNoteById = testGetNoteById;
})(this);
