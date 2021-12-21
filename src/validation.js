import { NAMES, NUMS, VALID_ALERTS } from "./constants.js";

const divideCarNames = (carNamesInput) => {
  const carNamesArr = carNamesInput.split(NAMES.SPLIT);
  return carNamesArr;
};

const isCarNameInputSpaces = (carNamesInput) => {
  if (carNamesInput.match(NAMES.SPACES)) {
    return true;
  }

  return false;
};

const isCarNameInputLength = (carNamesArr) => {
  for (let i = 0; i < carNamesArr.length; i += 1) {
    if (
      carNamesArr[i].length > NUMS.MAX_LENGTH ||
      carNamesArr[i].length < NUMS.MIN_LENGTH
    ) {
      return true;
    }
  }

  return false;
};

const isCarNameDuplicated = (carNamesArr) => {
  for (let i = 0; i < carNamesArr.length; i += 1) {
    if (carNamesArr.slice(i + 1).includes(carNamesArr[i])) {
      return true;
    }
  }

  return false;
};

const isCarNameEnough = (carNamesArr) => {
  if (carNamesArr.length <= NUMS.MIN_LENGTH) {
    return true;
  }

  return false;
};

const getCarNameValidationMessage = (carNamesInput) => {
  const carNamesArr = divideCarNames(carNamesInput);

  if (isCarNameInputSpaces(carNamesInput)) {
    return VALID_ALERTS.NAME_INCLUDE_SPACES;
  }
  if (isCarNameInputLength(carNamesArr)) {
    return VALID_ALERTS.NAME_LENGTH_ERROR;
  }
  if (isCarNameDuplicated(carNamesArr)) {
    return VALID_ALERTS.NAME_DUPLICATED;
  }
  if (isCarNameEnough(carNamesArr)) {
    return VALID_ALERTS.NAME_NOT_ENOUGH;
  }

  return null;
};

export const checkCarNameValidation = (carNamesInput) => {
  if (getCarNameValidationMessage(carNamesInput) !== null) {
    alert(getCarNameValidationMessage(carNamesInput));
    return null;
  }

  return divideCarNames(carNamesInput);
};

const isRacingCountValid = (count) => {
  if (count < NUMS.COUNT_MIN) {
    return true;
  }

  return false;
};

export const checkRacingCountValidation = (count) => {
  if (isRacingCountValid(count)) {
    alert(VALID_ALERTS.COUNT_NOT_VALID);
    return null;
  }

  return count;
};
