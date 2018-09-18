// This is my JS test tool based on this article
// https://codeburst.io/a-simple-javascript-test-framework-from-scratch-89d6e7d22e74/
// It's super-basic for now but there are some things I want to dig deeper into ao maintaining/expanding it will make me go deeper. For now, the only code to worry about is a require, setting up the test object, running the test and dumping results.

// const { Test } = require("./tester");
// const TESTS = require("./tester");   // this my go away

// const ROME = require("./romans.js");  //This is the module under test
// const mut = ROME; //module under test

//! Set up the test here
// T = {
//   name: "This is the test name",   //! Test name
//   func: mut.testFunc,              //! function to be tested, prefix w/ mut
//   params: null,                    //! params to function above
//   expected: 42,                    //! expected return val
//   opts: { verbose: false, resultsOnly: true }  //! must exist. Verbose will console log each test
// };
// Test(T);       //! This runs the test
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let totalFailed = 0,
  totalPassed = 0;

let verbose = true;

function Testcase(name) {
  return {
    name: name,
    func: null,
    params: null,
    expected: null,
    silent: false
  };
}

let Test = T => {
  if (T.silent != undefined) verbose = T.silent === true ? false : true;

  _TEST(`\nTest:<${T.name}>`, () => {
    Run(T, () => {
      callFunc(T).shouldBe(T.expected);
    });
  });
};

_TEST = (text, fn) => {
  if (verbose) console.log(text); //! Display test name
  fn(); //! Run the func
};

var Run = (T, fn) => fn();

const matchers = result => ({
  shouldBe: expected => {
    if (result === expected) {
      if (verbose) console.log("  pass  ");
      totalPassed++;
      return true;
    } else {
      if (verbose) {
        console.log("**FAIL**");
        console.log(`Expecting:${expected}, Received:${result}`);
      }
      totalFailed++;
      return false;
    }
  }
});

//const expect = exp => matchers(exp);
const callFunc = T => matchers(T.func(T.params));

const showTestResults = () => {
  console.log("==========\nTEST results:");
  if (totalFailed === 0) console.log(`-->All tests passed (${totalPassed}).`);
  else console.log(`--> ${totalFailed} tests failed and ${totalPassed} passed`);
  console.log("==========");
};

module.exports = {
  Test,
  Testcase,
  showTestResults
};
