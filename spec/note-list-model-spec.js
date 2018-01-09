function testInitializedNoteList() {
  var noteList = new NoteList();
  assert.isTrue(noteList.notes.length === 0)
}
testInitializedNoteList();

function testAddNote() {
  var noteList = new NoteList();
  var note = new Note("note 1")
  noteList.addNote(note)
  assert.isTrue(noteList.notes.length === 1)
}
testAddNote();

function testGetNotes() {
  var noteList = new NoteList();
  var note = new Note("note 1")
  var note2 = new Note("note 2")

  noteList.addNote(note)
  noteList.addNote(note2)
  assert.isTrue(noteList.getNotes() === noteList.notes)
}
testGetNotes();

function testCreateNote() {
  var noteList = new NoteList();

  noteList.createNote("note 1")
  assert.isTrue(noteList.notes[0].getNoteText() === "note 1")
}
testCreateNote();
