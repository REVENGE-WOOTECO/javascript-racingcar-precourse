import isUserInputValid from "./validation.js";

export const hideRacingCountForm = () => {
  const racingCountForm = document.getElementById("racing-count-form");
  const racingCountText = document.getElementById("racing-count-text");
  const result = document.getElementById("result");
  racingCountForm.style.display = "none";
  racingCountText.style.display = "none";
  result.style.display = "none";
};

export const showRacingCountForm = () => {
  const racingCountForm = document.getElementById("racing-count-form");
  const racingCountText = document.getElementById("racing-count-text");
  racingCountForm.style.display = "block";
  racingCountText.style.display = "block";
};

export const getCarNames = (e) => {
  e.preventDefault();
  const carNamesInput = document.getElementById("car-names-input");
  if (isUserInputValid(carNamesInput.value)) {
    showRacingCountForm();
  }
};
