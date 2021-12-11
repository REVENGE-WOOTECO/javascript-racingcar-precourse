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

    this.createElement("app", "div", null, "race-result");
    this.handleCarNamesSubmit();
    this.handleRacingCountSubmit();
  }

  createElement(parentID, tag, text, tagID = null) {
    const el = document.createElement(tag);
    if (tagID) {
      el.setAttribute("id", tagID);
    }
    el.innerText = text;
    document.getElementById(parentID).appendChild(el);
    return el;
  }

  addCar(name) {
    // const carNumbers = carNames.length;

    // this.names = carNames;
    // this.locations = Array(carNumbers).fill("");
    const car = new Car(name, location);
    this.cars.push(car);
  }

  getCarIdx(carName) {
    return this.names.indexOf(carName);
  }

  handleCarNamesSubmit() {
    this.carNamesSubmitBtn.addEventListener("click", () => {
      const carNames = this.carNamesInputEl.value.split(",");
      carNames.forEach((name) => {
        // TODO: 얼리 리턴
        if (this.isValidCarNames(carNames)) {
          this.addCar(name);
        } else {
          this.showErrorMessage();
        }
      });
    });
  }

  handleRacingCountSubmit() {
    this.racingCountSubmitBtn.addEventListener("click", () => {
      const racingCount = this.racingCountInputEl.value;
      // TODO: 얼리 리턴
      if (this.isValidRacingCount(racingCount)) {
        this.setRacingCount(racingCount);
        this.playRace(racingCount);
        this.showWinners();
      } else {
        this.showErrorMessage();
      }
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

    this.names.forEach((name, i) => {
      const el = document.createElement("div");
      el.innerText = `${name} : ${this.locations[i]}`;
      raceResultEl.appendChild(el);
      document.getElementById("race-result").appendChild(el);
    });

    const blankEl = document.createElement("span");
    blankEl.innerHTML = `&nbsp`;
    raceResultEl.appendChild(blankEl);
  }

  moveCar() {
    this.locations = this.locations.map((loca) => {
      if (this.canAdvance(this.getRandomNumber())) {
        return loca + "-";
      }
      return loca;
    });
  }

  getWinners() {
    const max = Math.max(...this.locations.map((x) => x.length));
    const winners = this.names.filter((_, i) => {
      return this.locations[i].length === max;
    });
    return winners;
  }

  showWinners() {
    const winners = this.getWinners(); // [east, west]
    let winnersStr = "";

    winners.forEach((winner, i) => {
      if (i === 0) {
        winnersStr += `${winner}`;
      } else {
        winnersStr += `, ${winner}`;
      }
    });

    this.createElement("app", "span", "최종 우승자: ");
    const winnersEl = this.createElement("app", "span", null, "racing-winners");
    winnersEl.innerText = winnersStr;
  }
}

const car = new RacingGame();
