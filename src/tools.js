export const checkNameValidation = function (inputArr) {
  let message = "";
  if (inputArr.some((term) => term.length === 0)) {
    message = "code1";
  } else if (inputArr.some((term) => term.length > 5)) {
    message = "code2";
  } else if ([...new Set(inputArr)].length < inputArr.length) {
    message = "code3";
  }
  return message;
};
export const checkRaceCountValidation = function (input) {
  let message = "";
  if (input.length === 0) {
    message = "code1";
  } else if (Number(input) === 0) {
    message = "code4";
  }
  return message;
};
