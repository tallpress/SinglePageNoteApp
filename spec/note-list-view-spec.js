function testCreateHtmlString() {
  var noteList = new NoteList();

  noteList.createNote('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  noteList.createNote('Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

  var noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.createHtmlString() === "<ul><li><a href='#8'>Lorem ipsum dolor si</a></li><li><a href='#9'>Ut enim ad minim ven</a></li></ul>");
};
testCreateHtmlString();
