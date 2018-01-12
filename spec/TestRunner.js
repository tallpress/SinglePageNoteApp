(function(exports) {
  function TestRunner() {
  this.tests = [];
  };

  TestRunner.prototype.addTest = function(test) {
    this.tests.push(test);
  };

  TestRunner.prototype.runTests = function() {
    this.tests.forEach((test) => test())
  };

  exports.TestRunner = TestRunner;
})(this);

var testRunner = new TestRunner();
testRunner.addTest(testInitializedNoteMessage);
testRunner.addTest(testGetNoteMessage);
testRunner.addTest(testCreateHtmlString);
// testRunner.addTest(test2CreateHtmlString);
// testRunner.addTest(testNoteID);
testRunner.addTest(testAddNote);
testRunner.addTest(testGetNotes);
testRunner.addTest(testCreateNote);
testRunner.addTest(testGetNoteById);
// testRunner.addTest(testInsertHTML);
testRunner.addTest(testPageRendersWithEmptyList);
testRunner.runTests();
