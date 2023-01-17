/**
 * Challenge:
 * Write a Program that ensures there is no sequence in a password
 * ( if i give :444444 its going to give an error  or even given jjjjj or even 12345 or abc)
 */

function checkSequenceOfSimilarChars(password) {
  // Iterate through each character of the password
  for (let i = 0; i < password.length; i++) {
    // Check if the current character is equal to the next character
    if (password[i] === password[i + 1]) {
      console.log(
        "CHECK 1 FAILED: Sequence of similar characters detected i.e " +
          password.slice(i, i + 2).join("")
      );
      return false;
    }
  }
  console.log("CHECK 1 PASSED: There's no sequence of similar characters");
  return true;
}

function checkSequenceOfIncreasingChars(password) {
  let count = 1;
  let sequence = "";
  // Iterate through each character of the password
  for (let i = 0; i < password.length - 1; i++) {
    // Check if the current character's ASCII value
    // is one less than the next character's ASCII value
    if (password[i].charCodeAt() + 1 === password[i + 1].charCodeAt()) {
      count++;
      sequence += password[i];
    } else {
      count = 1;
      sequence = "";
    }
    if (count > 2) {
      console.log(
        "CHECK 2 FAILED: Sequence of increasing characters detected - " +
          sequence +
          password[i + 1]
      );
      return false;
    }
  }
  console.log(
    "CHECK 2 PASSED: There's no simple sequence of increasing characters"
  );
  return true;
}

// let password = "123";
// let passwordAsArray = password.split("");

// // Call the two functions to check for sequences
// // But proceed to the next check only if the previous check passes
// if (checkSequenceOfSimilarChars(passwordAsArray)) {
//   checkSequenceOfIncreasingChars(passwordAsArray);
// }

let testCases = [
  {
    password: "abcd1234",
    expected: { similar: "PASSED", increasing: "PASSED" },
  },
  {
    password: "abcdefgh",
    expected: { similar: "PASSED", increasing: "FAILED" },
  },
  {
    password: "12341234",
    expected: { similar: "FAILED", increasing: "PASSED" },
  },
  {
    password: "abcdefg123",
    expected: { similar: "PASSED", increasing: "FAILED" },
  },
  {
    password: "abccdea",
    expected: { similar: "FAILED", increasing: "PASSED" },
  },
  {
    password: "ABCDEFGH",
    expected: { similar: "PASSED", increasing: "FAILED" },
  },
  {
    password: "abcdefg123hijklmnopqrstuvwxyz",
    expected: { similar: "PASSED", increasing: "FAILED" },
  },
];

// Driver code
// Call the two functions to check for sequences
for (let i = 0; i < testCases.length; i++) {
  let passwordAsArray = testCases[i].password.split("");
  if (
    checkSequenceOfSimilarChars(passwordAsArray) ===
    (testCases[i].expected.similar === "PASSED")
  ) {
    checkSequenceOfIncreasingChars(passwordAsArray) ===
      (testCases[i].expected.increasing === "PASSED");
    console.log("test case ", i + 1, " passed");
  } else {
    console.log("test case ", i + 1, " failed");
  }
}
