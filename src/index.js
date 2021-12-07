import Car from "./car.js";
import { isCarNameValid, isRacingCountValid } from "./validation.js";

const preventSubmitByEnterKey = () => {
  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  });
};

const hideRacingCountForm = () => {
  const racingCountForm = document.getElementById("racing-count-form");
  const racingCountText = document.getElementById("racing-count-text");
  const resultHeading = document.getElementById("result");

  racingCountForm.style.display = "none";
  racingCountText.style.display = "none";
  resultHeading.style.display = "none";
};

const showRacingCountForm = () => {
  const racingCountForm = document.getElementById("racing-count-form");
  const racingCountText = document.getElementById("racing-count-text");

  racingCountForm.style.display = "block";
  racingCountText.style.display = "block";
};

export default function RacingCarGame() {
  this.cars = [];
  this.turnOfGame = 0;
}

const getCarNames = (e) => {
  const game = e.currentTarget.currentGame;
  const button = e.currentTarget;
  const carNamesInput = document.getElementById("car-names-input");
  const validCarNames = isCarNameValid(carNamesInput.value);
  e.preventDefault();

  if (validCarNames) {
    game.cars = validCarNames.map((carName) => new Car(carName));
    button.disabled = true;
    showRacingCountForm();
  }
};

const getRacingCount = (e) => {
  const game = e.currentTarget.currentGame;
  const button = e.currentTarget;
  const racingCountInput = document.getElementById("racing-count-input");
  e.preventDefault();

  if (isRacingCountValid(racingCountInput.value)) {
    game.turnOfGame = Number(racingCountInput.value);
    button.disabled = true;
  }
};

const init = (gameSetting) => {
  const carNamesButton = document.getElementById("car-names-submit");
  const racingCountButton = document.getElementById("racing-count-submit");

  preventSubmitByEnterKey();
  hideRacingCountForm();

  carNamesButton.addEventListener("click", getCarNames);
  racingCountButton.addEventListener("click", getRacingCount);

  carNamesButton.currentGame = gameSetting;
  racingCountButton.currentGame = gameSetting;
};

const game = new RacingCarGame();
init(game);
