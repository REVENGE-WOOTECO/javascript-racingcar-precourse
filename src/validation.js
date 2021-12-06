import { NAMES, NUMS, VALID_ALERTS } from "./constants.js";

const divideCarNames = (carNamesInput) => {
  const carNamesArr = carNamesInput.split(NAMES.SPLIT);
  return carNamesArr;
};

const isCarNameInputSpaces = (carNamesInput) => {
  return carNamesInput.match(NAMES.SPACES);
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
  return carNamesArr.length <= NUMS.MIN_LENGTH;
};

export default function isUserInputValid(carNamesInput) {
  const carNamesArr = divideCarNames(carNamesInput);
  if (isCarNameInputSpaces(carNamesInput)) {
    alert(VALID_ALERTS.INCLUDE_SPACES);
    return false;
  }
  if (isCarNameInputLength(carNamesArr)) {
    alert(VALID_ALERTS.LENGTH_ERROR);
    return false;
  }
  if (isCarNameDuplicated(carNamesArr)) {
    alert(VALID_ALERTS.NAME_DUPLICATED);
    return false;
  }
  if (isCarNameEnough(carNamesArr)) {
    alert(VALID_ALERTS.NAME_NOT_ENOUGH);
    return false;
  }
  return carNamesArr;
}
