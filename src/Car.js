class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move() {
    this.distance += 1;
  }
}

const forwardCar = (count) => {
  let carMove = '';
  for (let i = 0; i < count; i += 1) {
    carMove += '-';
  }

  return carMove;
};

export { Car, forwardCar };
