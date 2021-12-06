import { getCarNames, hideRacingCountForm } from "./controller.js";

const init = (gameNo) => {
  const carNamesButton = document.getElementById("car-names-submit");

  carNamesButton.addEventListener("click", getCarNames);

  carNamesButton.currentGame = gameNo;
};

export default function RacingCarGame() {
  hideRacingCountForm();
  init();
}

const game = new RacingCarGame();
