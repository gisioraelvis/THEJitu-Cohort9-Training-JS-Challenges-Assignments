/**
 * CHALLENGE:
 * Write an application that can take in two Kenyan license plates (Kxx-000x)
 * as parameters and find how many plates have been registered between the two plates.
 * */

function countPlates(plate1, plate2) {
  // convert the input plates to uppercase
  plate1 = plate1.toUpperCase();
  plate2 = plate2.toUpperCase();

  // check if the plates are in the correct format (LLL NNNL)
  let plate1Format = /^[A-Z]{3}\s\d{3}[A-Z]$/;
  let plate2Format = /^[A-Z]{3}\s\d{3}[A-Z]$/;
  if (!plate1Format.test(plate1) || !plate2Format.test(plate2)) {
    return "Error: Invalid format. Correct format is LLL NNNL (e.g. KAA 000A)";
  }

  // split the plates into parts
  let plate1Parts = plate1.split(" ");
  let plate2Parts = plate2.split(" ");

  // get the code, number and letter parts of the plates
  let plate1Code = plate1Parts[0];
  let plate2Code = plate2Parts[0];
  let plate1Number = parseInt(plate1Parts[1].slice(0, -1));
  let plate2Number = parseInt(plate2Parts[1].slice(0, -1));
  let plate1Letter = plate1Parts[1].slice(-1);
  let plate2Letter = plate2Parts[1].slice(-1);

  // check if the input plates are the same
  if (plate1 === plate2) {
    return "Error: The input plates are the same.";
  }

  // check if the input plates are in the wrong order (i.e. newer plate first, older plate second)
  if (
    plate1Code > plate2Code ||
    (plate1Code === plate2Code && plate1Number > plate2Number) ||
    (plate1Code === plate2Code &&
      plate1Number === plate2Number &&
      plate1Letter > plate2Letter)
  ) {
    [plate1, plate2] = [plate2, plate1];
    [plate1Code, plate2Code] = [plate2Code, plate1Code];
    [plate1Number, plate2Number] = [plate2Number, plate1Number];
    [plate1Letter, plate2Letter] = [plate2Letter, plate1Letter];
  }

  // get the last letter of the first part of the plate
  let plate1CodeLastLetter = plate1Code.slice(-1);
  let plate2CodeLastLetter = plate2Code.slice(-1);
  // get the difference between the last letters of the first part of the plate
  let codeDifference = Math.abs(
    plate2CodeLastLetter.charCodeAt(0) - plate1CodeLastLetter.charCodeAt(0)
  );
  // get the number of cars between the two plates
  let plateCode = codeDifference * 24000;
  // get the second last letter of first part of the plate
  let plate1CodeSecondLastLetter = plate1Code.slice(-2, -1);
  let plate2CodeSecondLastLetter = plate2Code.slice(-2, -1);
  // get the difference between the second last letters of the first part of the plate
  let codeSecondLastLetterDifference = Math.abs(
    plate2CodeSecondLastLetter.charCodeAt(0) -
      plate1CodeSecondLastLetter.charCodeAt(0)
  );
  // get the number of cars between the two plates
  let plateCodeSecondLastLetter = codeSecondLastLetterDifference * 12000;
  // get the third last letter of first part of the plate
  let plate1CodeThirdLastLetter = plate1Code.slice(-3, -2);
  let plate2CodeThirdLastLetter = plate2Code.slice(-3, -2);
  // get the difference between the third last letters of the first part of the plate
  let codeThirdLastLetterDifference = Math.abs(
    plate2CodeThirdLastLetter.charCodeAt(0) -
      plate1CodeThirdLastLetter.charCodeAt(0)
  );
  // get the number of cars between the two plates
  let plateCodeThirdLastLetter = codeThirdLastLetterDifference * 6000;

  // difference between the last letter of the plate indicate 1000 cars
  let plateLetter =
    Math.abs(plate2Letter.charCodeAt(0) - plate1Letter.charCodeAt(0)) * 1000;

  // difference between the numbers indicate 10 cars
  let plateNumber = Math.abs(plate2Number - plate1Number) * 10;

  // return the number of cars between the two plates
  return (
    plateCode +
    plateCodeSecondLastLetter +
    plateCodeThirdLastLetter +
    plateLetter +
    plateNumber
  );
}

// test the function
console.log(countPlates("KAA 000A", "KAA 999A"));