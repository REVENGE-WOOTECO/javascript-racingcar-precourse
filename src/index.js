/* 1. 입력기능

[ㅇ] - 입력 시 새로고침 막아야함
[ㅇ] - 예외) 자동차 이름이 ,로 구분짓지 않고 5글자 이상인 경우
[ㅇ] - 예외) 자동차 이름을 ,로 구분지었을 때 5글자 이상이 있는 경우
[ㅇ] - 예외) 시도 횟수가 숫자가 아닌 경우

[] 2. 동작

[] - car객체를 만들고 new를 이용해 인스턴스를 생성한다.
[] - 자동차는 랜덤값에 따라 전진 혹은 정지한다.
[] - MissonUntils 라이브러리를 사용하여 0~9의 랜덤숫자를 만들고, 랜덤 값이 4이상인 경우 자동차는 전진한다.

[] 3. 출력

[] - 자동차 이름을 입력하면 시도할 횟수가 나타나야한다.
[] - 시도할 횟수를 입력하면 실행 결과 글자가 나와야 한다.
[] - 시도할 횟수를 입력하고 버튼을 누르면 그 만큼 결과 하나씩 출력한다
[] - 입력한 횟수를 다 시도했을 때 최종 우승자 출력한다.(여러명이면 쉼표로 구분)
[] - 최종 우승자 출력 시 span태그는 racing-winners의 id값이다.

*/
import { exceptionCarsNameInput, exceptionRacingCountInput } from './inputExceptions.js';
import { getRandomNumber } from './missionUtils.js';
import { Car } from './Car.js';
import { formEvent } from './formEvent.js';

function hiddenHTML() {
  document.querySelector('#text1').style.visibility = 'hidden';
  document.querySelector('#text2').style.visibility = 'hidden';
  document.querySelector('#racing-count-form').style.visibility = 'hidden';
}

function getCarsNameInput() {
  const carsNameInput = document.querySelector('#cars-name-input').value;
  const $carsNameInput = exceptionCarsNameInput(carsNameInput).map((e) => new Car(e, 0));

  return $carsNameInput;
}

function getRacingCountInput() {
  const racingCountInput = document.querySelector('#racing-count-input').value;
  const $racingCountInput = exceptionRacingCountInput(racingCountInput);

  return $racingCountInput;
}

function App() {
  const carsValue = {};
  document.querySelector('#cars-name-submit').addEventListener('click', () => {
    carsValue.carsName = getCarsNameInput();

    if (carsValue.carsName !== undefined) {
      document.querySelector('#text1').style.visibility = 'visible';
      document.querySelector('#racing-count-form').style.visibility = 'visible';
    }
  });

  document.querySelector('#racing-count-submit').addEventListener('click', () => {
    carsValue.racingCount = getRacingCountInput();

    if (carsValue.racingCount !== undefined) {
      document.querySelector('#text2').style.visibility = 'visible';
      console.log(carsValue);
    }
  });
}

App();
hiddenHTML();
formEvent();
