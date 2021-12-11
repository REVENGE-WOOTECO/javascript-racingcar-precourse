import { createElement } from "./utils.js";

class Car {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  advanceCar() {
    this.location += "-";
  }
}

class RacingGame {
  constructor() {
    this.cars = [];
    this.racingCount = 0;

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
    const INIT_LOCATION = "";
    const car = new Car(name, INIT_LOCATION);
    this.cars.push(car);
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
    const NUM = 4;
    return number >= NUM;
  }

  setRacingCount(racingCount) {
    this.racingCount = Number(racingCount);
  }

  getRandomNumber() {
    const MIN = 0;
    const MAX = 9;
    const LEN = 1;
    return MissionUtils.Random.pickNumberInRange(MIN, MAX, LEN); // 1 ~ 9
  }

  isValidCarNames(names) {
    const hasBlank = names.some((name) => name === "");
    const isValidLength = names.every((name) => name.length <= 5);
    return !hasBlank && isValidLength;
  }

  isValidRacingCount(number) {
    const NUM = 0;
    return number >= NUM;
  }

  showErrorMessage() {
    alert("잘못된 입력값입니다.");
  }

  playRace(n) {
    for (let i = 0; i < n; i++) {
      this.moveCar();
      this.showRaceResult();
    }
  }

  showRaceResult() {
    const raceResultEl = document.getElementById("race-result");

    this.cars.forEach((car) => {
      const el = document.createElement("div");
      el.innerText = `${car.name} : ${car.location}`;
      raceResultEl.appendChild(el);
      document.getElementById("race-result").appendChild(el);
    });

    const blankEl = document.createElement("span");
    blankEl.innerHTML = `&nbsp`;
    raceResultEl.appendChild(blankEl);
  }

  moveCar() {
    // this.locations = this.locations.map((loca) => {
    //   if (this.canAdvance(this.getRandomNumber())) {
    //     return loca + "-";
    //   }
    //   return loca;
    // });
    this.cars.map((car) => {
      if (this.canAdvance(this.getRandomNumber())) {
        car.advanceCar();
      }
    });
  }

  getWinners() {
    // TODO: 우승자 받는 로직 변경
    const max = Math.max(...this.cars.map((car) => car.location.length));
    const winners = this.cars.filter((car) => {
      return car.location.length === max;
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
