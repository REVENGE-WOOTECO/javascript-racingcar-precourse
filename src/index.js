import { isCarNameValid } from "./validation.js";

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

const init = (gameSetting) => {
  const carNamesButton = document.getElementById("car-names-submit");

  hideRacingCountForm();

  carNamesButton.addEventListener("click", getCarNames);

  carNamesButton.currentGame = gameSetting;
};

const game = new RacingCarGame();
init(game);
