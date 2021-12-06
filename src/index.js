class Car {
  constructor() {
    this.names = [];
    this.locations = [];
    this.racingCount = 0;

    this.init();
  }

  init() {
    this.carNamesSubmitBtn = document.getElementById("car-names-submit");
    this.racingCountSubmitBtn = document.getElementById("racing-count-submit");
    this.carNamesInputEl = document.getElementById("car-names-input");
    this.racingCountInputEl = document.getElementById("racing-count-input");
    
    const appEl = document.getElementById('app');
    const resultEl = document.createElement('div');
    resultEl.setAttribute('id', 'race-result');
    appEl.appendChild(resultEl);

    this.handleCarNamesSubmit();
    this.handleRacingCountSubmit();
  }

  // 자동차를 입력받아 생성하는 기능
  createCar(carNames) {
    const namesNum = carNames.length;

    this.names = carNames;
    this.locations = Array(namesNum).fill('');
  }

  // 차 이름으로 인덱스를 찾는 기능
  getCarIdx(carName) {
    return this.names.indexOf(carName);
  }

  // 자동차가 전진하는 기능
  advanceCar(carName) {
    const carIdx = this.getCarIdx(carName);
    this.locations[carIdx] += '-';
  }

  handleCarNamesSubmit() {
    this.carNamesSubmitBtn.addEventListener("click", () => {
      const carNames = this.carNamesInputEl.value.split(",");
      if (this.isValidCarNames(carNames)) {
        this.createCar(carNames);
      } else {
        this.showErrorMessage();
      }
    });
  }

  handleRacingCountSubmit() {
    this.racingCountSubmitBtn.addEventListener("click", () => {
      const racingCount = this.racingCountInputEl.value;
      if (this.isValidRacingCount(racingCount)) {
        this.setRacingCount(racingCount);
        this.playRace(racingCount);
        this.showWinner();
      } else {
        this.showErrorMessage();
      }
    });
  }

  // 전진하는 조건을 판별하는 기능
  canAdvance(number) {
    const NUM = 4;
    return number >= NUM;
  }

  // 몇 번의 이동을 할 것인지 입력 받는 기능
  setRacingCount(racingCount) {
    this.racingCount = Number(racingCount);
  }

  // 랜덤 숫자를 받는 기능
  getRandomNumber() {
    const MIN = 0;
    const MAX = 9;
    const LEN = 1;
    return MissionUtils.Random.pickNumberInRange(MIN, MAX, LEN);
  }

  // 입력받은 자동차 이름이 유효한지 판별하는 기능
  isValidCarNames(names) {
    const hasBlank = names.some((name) => name === '');
    const isValidLength = names.every((name) => name.length <= 5);
    return !hasBlank && isValidLength;
  }

  // 입력받은 횟수가 유효한지 판별하는 기능
  isValidRacingCount(number) {
    const NUM = 0;
    return number >= NUM;
  }

  // 잘못된 값이면 alert를 띄우는 기능
  showErrorMessage() {
    alert('잘못된 입력값입니다.');
  }
  
  playRace(n) {
    for (let i = 0; i < n; i++) {
      this.moveCar();
      this.showRaceResult();
    }
  }

  // 자동차의 위치를 출력하는 기능
  showRaceResult() {
    const raceResultEl = document.getElementById('race-result');

    this.names.forEach((name, i) => {
      const el = document.createElement('div');
      el.innerText = `${name} : ${this.locations[i]}`;
      raceResultEl.appendChild(el);
      document.getElementById('race-result').appendChild(el);  
    });

    const blankEl = document.createElement('span');
    blankEl.innerHTML = `&nbsp`;
    raceResultEl.appendChild(blankEl);
  }
  
  // 자동차의 위치를 갱신하는 기능
  moveCar() {
    this.locations = this.locations.map(loca => {
      if (this.canAdvance(this.getRandomNumber())) {
        return loca + '-';
      }
      return loca;
    });
  }

  // 우승자를 출력하는 기능
  showWinner() {
    const max = Math.max(...this.locations.map(x => x.length));
    const winners = this.names.filter((name, i) => {
      return this.locations[i].length === max;
    });

    const winnersEl = document.createElement('span');
    winnersEl.setAttribute('id', 'racing-winners');
    document.getElementById('app').appendChild(winnersEl);

    const resultMsgEl = document.createElement('div');
    let winnersStr = '';
    
    winners.forEach((winner, i) => {
      if (i === 0) {
        winnersStr += `${winner}`;
      } else {
        winnersStr += `, ${winner}`;
      }
    });
    resultMsgEl.innerText = `최종 우승자: ${winnersStr}`;
    
    winnersEl.appendChild(resultMsgEl);
  }
}

const car = new Car();

