import { NAMES, NUMS, VALID_ALERTS } from "./constants.js";

const divideCarNames = (carNamesInput) => {
  const carNamesArr = carNamesInput.split(NAMES.SPLIT);
  return carNamesArr;
};

const isCarNameInputSpaces = (carNamesInput) => {
  if (carNamesInput.match(NAMES.SPACES)) {
    alert(VALID_ALERTS.NAME_INCLUDE_SPACES);
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
      alert(VALID_ALERTS.NAME_LENGTH_ERROR);
      return true;
    }
  }

  return false;
};

const isCarNameDuplicated = (carNamesArr) => {
  for (let i = 0; i < carNamesArr.length; i += 1) {
    if (carNamesArr.slice(i + 1).includes(carNamesArr[i])) {
      alert(VALID_ALERTS.NAME_DUPLICATED);
      return true;
    }
  }

  return false;
};

const isCarNameEnough = (carNamesArr) => {
  if (carNamesArr.length <= NUMS.MIN_LENGTH) {
    alert(VALID_ALERTS.NAME_NOT_ENOUGH);
    return true;
  }

  return false;
};

export function isCarNameValid(carNamesInput) {
  const carNamesArr = divideCarNames(carNamesInput);

  if (
    isCarNameInputSpaces(carNamesInput) ||
    isCarNameInputLength(carNamesArr) ||
    isCarNameDuplicated(carNamesArr) ||
    isCarNameEnough(carNamesArr)
  ) {
    return false;
  }

  return carNamesArr;
}