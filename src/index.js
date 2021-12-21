import Car from "./car.js";
import { RACE_GAME_INPUT } from "./constants/race.js";
import { getMessageByErrorCode } from "./constants/validation.js";
import { checkNameValidation, checkRaceCountValidation } from "./tools.js";
import CarNameUI from "./ui/carNameUI.js";
import RacingCountUI from "./ui/racingCountUi.js";
import WinnerOuputUI from "./ui/winnerOutputUI.js";

export default class RacingGame {
  #cars;
  #carNameUI;
  #racingCountUI;
  #winnerOuputUI;

  constructor() {
    this.#cars = [];
    this.#carNameUI = new CarNameUI();
    this.#racingCountUI = new RacingCountUI();
    this.#winnerOuputUI = new WinnerOuputUI();
  }

  init() {
    this.#carNameUI.bindAction(() =>
      this.makeCarWithName(this.#carNameUI.getSplitInput())
    );
    this.#racingCountUI.bindAction(() =>
      this.play(this.#racingCountUI.getInput())
    );
  }

  makeCarWithName = function (carNames) {
    const error = checkNameValidation(carNames);
    if (error) {
      alert(getMessageByErrorCode(error));
      return;
    }
    carNames.forEach((name) => this.#cars.push(new Car(name)));
    this.#racingCountUI.showElement();
  };

  play = function (raceCount) {
    const error = checkRaceCountValidation(raceCount);
    if (error) {
      alert(getMessageByErrorCode(error));
      return;
    }
    raceCount = Number(raceCount);
    this.#cars.forEach((car) =>
      car.move(
        RACE_GAME_INPUT.MIN,
        RACE_GAME_INPUT.MAX,
        RACE_GAME_INPUT.BASE,
        raceCount
      )
    );
    this.showResultRecords(raceCount);
  };

  showResultRecords(raceCount) {
    let resultText = `📄 실행 결과<br/><br/>`;
    for (let lap = 0; lap < raceCount; lap++) {
      this.#cars.forEach((car) => (resultText += car.resultTemplate(lap)));
      resultText += `<br/>`;
    }
    this.#winnerOuputUI.showTotalRecords(resultText);
    this.showWinner(raceCount);
  }

  showWinner(raceCount) {
    const winner = this.#cars
      .filter((car) => car.isWinner(raceCount))
      .map((car) => car.getName());
    this.#winnerOuputUI.showWinner(winner);
  }
}

const game = new RacingGame();
game.init();
