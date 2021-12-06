import { exceptionCarsNameInput, exceptionRacingCountInput } from './inputExceptions.js';
import { Car } from './Car.js';

const alertMsg = {
  msg: '다시 입력해주세요',
};

const getCarsNameInput = () => {
  const EARLY_DISTANCE = 0;
  const carsNameInput = document.querySelector('#car-names-input').value;

  if (exceptionCarsNameInput(carsNameInput) === false) {
    alert(alertMsg.msg);
    document.querySelector('#car-names-input').value = '';
  } else {
    const $carsNameInput = carsNameInput.split(',')
      .map((e) => new Car(e, EARLY_DISTANCE));
    return $carsNameInput;
  }
};

const getRacingCountInput = () => {
  const racingCountInput = document.querySelector('#racing-count-input').value;

  if (exceptionRacingCountInput(racingCountInput) === false) {
    alert(alertMsg.msg);
    document.querySelector('#racing-count-input').value = '';
  } else {
    return racingCountInput;
  }
};

export { getCarsNameInput, getRacingCountInput };
