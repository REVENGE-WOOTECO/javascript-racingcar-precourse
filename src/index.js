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
    this.handleInput();
  }

  // 자동차를 입력받아 생성하는 기능
  createCar() {
    const namesArr = this.carNamesInputEl.value.split(",");
    const namesNum = namesArr.length;

    this.names = namesArr;
    this.locations = Array(namesNum).fill(0);
  }

  // 차 이름으로 인덱스를 찾는 기능
  getCarIdx(carName) {
    return this.names.indexOf(carName);
  }

  // 자동차가 전진하는 기능
  advanceCar(carName) {
    const carIdx = this.getCarIdx(carName);
    this.locations[carIdx] += 1;
  }

  handleInput() {
    this.carNamesSubmitBtn.addEventListener("click", () => {
      this.createCar();
      console.log(this);
    });

    this.racingCountSubmitBtn.addEventListener("click", () => {
      this.setRacingCount();
      console.log(this);
    });
  }

  // 전진하는 조건을 판별하는 기능
  canAdvance(number) {
    const NUM = 4;
    return number >= NUM;
  }

  // 몇 번의 이동을 할 것인지 입력 받는 기능
  setRacingCount() {
    this.racingCount = this.racingCountInputEl.value;
  }
}

const car = new Car();

// 우승자를 고르는 기능
// 잘못된 입력 값인 경우 alert를 보여주는 기능
// 자동차의 위치를 출력하는 기능
// 우승자를 출력하는 기능
