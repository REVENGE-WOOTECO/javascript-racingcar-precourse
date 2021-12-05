function checkInput(carsName, bool) {
  if (bool) {
    return alert('다시 입력해주세요!');
  }

  return carsName;
}

function carsNameExceptionInput(carsNameinput) {
  const carsNameArray = carsNameinput.split(',');
  let boolInput = false;
  if ((carsNameinput.length > 5 && !carsNameinput.includes(','))
      || carsNameArray.includes('')) {
    boolInput = true;
  }
  if (carsNameinput.length > 5 && carsNameinput.includes(',')) {
    for (let i = 0; i < carsNameArray.length; i += 1) {
      if (carsNameArray[i].length > 5 || carsNameArray[i] === '') {
        boolInput = true;
        break;
      }
    }
  }
  return checkInput(carsNameArray, boolInput);
}

export { carsNameExceptionInput };
