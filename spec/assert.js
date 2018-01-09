var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Assertion passed")
    }
  }
};

// function it(assertion, testFunction){
//   console.log(assertion);
//   testFunction();
// };
