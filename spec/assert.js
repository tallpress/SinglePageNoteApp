var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Assertion passed")
    }
  }
};

function describe(assertion, testFunction){
  console.log(assertion);
  testFunction();
}

function toBeEqual(test, expectation) {
  return function(){
    if (test === expectation) {
      console.log(test + " passed")
    } else {
      throw new Error("Expected " + test + " to equal " + expectation);
    };
  };
};
