class Car {
  // 자동차를 생성하는 기능
  constructor(names) {
    const namesArr = names.split(',');
    const namesNum = namesArr.length;

    this.names = namesArr;
    this.locations = Array(namesNum).fill(0);
  }
}

const car = new Car('a,b,c,d');
console.log('car :', car);

// 자동차가 전진하는 기능 (차 이름) => 그 차 locations++
// 자동차가 멈추는 기능
// 자동차에 이름을 부여하는 기능
// 전진하는 조건을 판별하는 기능
// 우승자를 고르는 기능
// 자동차 이름을 입력 받는 기능
// 몇 번의 이동을 할 것인지 입력 받는 기능
// 잘못된 입력 값인 경우 alert를 보여주는 기능
// 자동차의 위치를 출력하는 기능
// 우승자를 출력하는 기능
