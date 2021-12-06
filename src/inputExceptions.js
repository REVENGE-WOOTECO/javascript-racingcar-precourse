function checkInput(input, bool) {
  if (bool) {
    return alert('다시 입력해주세요!');
  }

  return input;
}

function exceptionCarsNameInput(carsNameInput) {
  const carsNameArray = carsNameInput.split(',');
  const MAX_LENGTH = 5;
  let boolInput = false;

  if ((carsNameInput.length > MAX_LENGTH && !carsNameInput.includes(','))
      || carsNameArray.includes('')) {
    boolInput = true;
  }

  carsNameArray.forEach((e) => {
    if (e.length > MAX_LENGTH || e === '') {
      boolInput = true;
    }
  });

  return checkInput(carsNameArray, boolInput);
}

function exceptionRacingCountInput(racingCountInput) {
  let boolInput = false;
  if (racingCountInput === '' || Number(racingCountInput) < 1) {
    boolInput = true;
  }

  return checkInput(racingCountInput, boolInput);
}

export { exceptionCarsNameInput, exceptionRacingCountInput };
