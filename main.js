const { Test, Testcase, newTest, showTestResults } = require("./testTool");

const ROME = require("./romans.js");

// let executes = 0;  const noop = () => {  executes += 1; };

const mut = ROME; //module under test

T = new Testcase("Digit2Roman rejects non-Roman chars");
T.func = mut.Roman2Digit;
T.params = "3";
T.expected = null;
Test(T);

T = new Testcase(`Roman2Digit: 'I' returns 1`);
T.func = mut.Roman2Digit;
T.params = "I";
T.expected = 1;
Test(T);
T.name = `Roman2Digit: 'X' returns 10`;
T.params = "X";
T.expected = 10;
Test(T);
T.name = "Roman2Digit: 'V' returns 5";
T.func = mut.Roman2Digit;
T.params = "V";
T.expected = 5;
Test(T);

showTestResults(); // optional
