import { RACING_GAME } from "./constants.js";
import { createElement } from "./utils.js";

class Car {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  advance() {
    this.location += 1;
  }

  getLocation(str = "-") {
    let locationStr = "";
    Array.from({ length: this.location }).forEach(() => {
      locationStr += str;
    });
    return locationStr;
  }
}

class RacingGame {
  constructor() {
    this.cars = [];

    this.init();
  }

  init() {
    this.carNamesSubmitBtn = document.getElementById("car-names-submit");
    this.racingCountSubmitBtn = document.getElementById("racing-count-submit");
    this.carNamesInputEl = document.getElementById("car-names-input");
    this.racingCountInputEl = document.getElementById("racing-count-input");

    createElement("app", "div", null, "race-result");
    this.handleCarNamesSubmit();
    this.handleRacingCountSubmit();
  }

  addCar(name) {
    const INIT_LOCATION = 0;
    this.cars = [...this.cars, new Car(name, INIT_LOCATION)];
  }

  getCarIdx(carName) {
    return this.names.indexOf(carName);
  }

  handleCarNamesSubmit() {
    this.carNamesSubmitBtn.addEventListener("click", () => {
      const carNames = this.carNamesInputEl.value.split(",");
      if (!this.isValidCarNames(carNames)) {
        this.showErrorMessage();
        return;
      }
      carNames.map((name) => this.addCar(name));
    });
  }

  handleRacingCountSubmit() {
    this.racingCountSubmitBtn.addEventListener("click", () => {
      const racingCount = this.racingCountInputEl.value;
      if (!this.isValidRacingCount(racingCount)) {
        this.showErrorMessage();
        return;
      }
      this.setRacingCount(racingCount);
      this.playRace(racingCount);
      this.showWinners();
    });
  }

  canAdvance(number) {
    return number >= RACING_GAME.ADVANCE_STANDARD;
  }

  setRacingCount(racingCount) {
    this.racingCount = Number(racingCount);
  }

  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(
      RACING_GAME.RANDOM_MIN,
      RACING_GAME.RANDOM_MAX,
      RACING_GAME.RANDOM_LENGTH
    ); // pickNumberInRange(0, 9, 1) => 1 ~ 9
  }

  isValidCarNames(names) {
    const hasBlank = names.some((name) => name === "");
    const isValidLength = names.every((name) => name.length <= 5);
    return !hasBlank && isValidLength;
  }

  isValidRacingCount(racingCount) {
    return racingCount >= RACING_GAME.MIN_RACING_COUNT;
  }

  showErrorMessage() {
    alert("잘못된 입력값입니다.");
  }

  playRace(n) {
    const racingNumber = Array(+n).fill(0);
    racingNumber.forEach(() => {
      this.moveCar();
      this.showRaceResult();
    });
  }

  showRaceResult() {
    const raceResultEl = document.getElementById("race-result");

    this.cars.forEach((car) => {
      const el = document.createElement("div");
      el.innerText = `${car.name} : ${car.getLocation(
        RACING_GAME.LOCATION_STR
      )}`;
      raceResultEl.appendChild(el);
      document.getElementById("race-result").appendChild(el);
    });

    const blankEl = document.createElement("span");
    blankEl.innerHTML = `&nbsp`;
    raceResultEl.appendChild(blankEl);
  }

  moveCar() {
    this.cars.map((car) => {
      if (this.canAdvance(this.getRandomNumber())) {
        car.advance();
      }
    });
  }

  getWinners() {
    const max = Math.max(...this.cars.map((car) => car.location));
    const winners = this.cars.filter((car) => {
      return car.location === max;
    });
    return winners;
  }

  showWinners() {
    const winners = this.getWinners();
    // ex) winners =  [{name: 'b', location: '---'}, {name: 'c', location: '---'}]
    let winnersStr = "";

    winners.forEach((winner, i) => {
      if (i === 0) {
        winnersStr += `${winner.name}`;
      } else {
        winnersStr += `, ${winner.name}`;
      }
    });

    createElement("app", "span", "최종 우승자: ");
    const winnersEl = createElement("app", "span", null, "racing-winners");
    winnersEl.innerText = winnersStr;
  }
}

const racingGame = new RacingGame();
