import Car from "./car.js";
import { RACE_GAME_INPUT } from "./constants/race.js";
import { checkNameValidation, checkRaceCountValidation } from "./tools.js";
export default class RacingGame {
  constructor() {
    this.cars = [];
    this.raceCount = 0;
    this.carNameInput = document.querySelector("#car-names-input");
    this.carNameSubmitButton = document.querySelector("#car-names-submit");
    this.racingCountInput = document.querySelector("#racing-count-input");
    this.racingCountSubmitButton = document.querySelector(
      "#racing-count-submit"
    );
    this.winnerOuputElement = document.querySelector("#result");
    this.createResultElement();
    this.addEvent();
  }

  createResultElement() {
    this.resultElement = document.createElement("span");
    this.resultElement.id = "racing-winners";
    this.resultElement.innerHTML = "";
  }

  addEvent = function () {
    this.carNameSubmitButton.addEventListener("click", (event) =>
      this.onCarNameSubmitted(event)
    );
    this.racingCountSubmitButton.addEventListener("click", (event) =>
      this.onRaceCountSubmitted(event)
    );
  };

  onCarNameSubmitted = function (event) {
    event.preventDefault();
    const carNames = this.carNameInput.value.split(",");
    const { valid, message } = checkNameValidation(carNames);
    valid ? this.makeCarWithName(carNames) : alert(message);
  };
  makeCarWithName = function (carNames) {
    carNames.forEach((name) => this.cars.push(new Car(name)));
  };

  onRaceCountSubmitted = function (event) {
    event.preventDefault();
    const raceCount = this.racingCountInput.value;
    const { valid, message } = checkRaceCountValidation(raceCount);
    valid ? this.play(raceCount) : alert(message);
    this.play(raceCount);
  };
  play = function (raceCount) {
    this.raceCount = Number(raceCount);
    this.cars.forEach((car) =>
      car.move(RACE_GAME_INPUT.MIN, RACE_GAME_INPUT.MAX, this.raceCount)
    );
    this.showTotalRecords();
    this.showWinner();
  };

  showTotalRecords = function () {
    let resultText = `📄 실행 결과<br/><br/>`;

    const range = [...Array(Number(this.raceCount))].map((v, i) => i);
    range.forEach((item, index) => (resultText += this.getRaceRecord(index)));
    this.winnerOuputElement.innerHTML = `${resultText}`;
  };

  getRaceRecord = function (lap) {
    const record = [];
    this.cars.forEach((car) =>
      record.push(`${car.name}:${" -".repeat(car.result[lap])}`)
    );
    record.push("<br/>");
    return record.join("<br/>");
  };

  showWinner = function () {
    const winner = [];
    this.cars.forEach((car) =>
      car.result[this.raceCount - 1] === this.raceCount
        ? winner.push(car.name)
        : ""
    );
    this.resultElement.innerHTML = `최종 우승자: ${winner.join(", ")}`;
    this.winnerOuputElement.appendChild(this.resultElement);
  };
}

const game = new RacingGame();
