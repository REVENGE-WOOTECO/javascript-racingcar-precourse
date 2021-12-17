import { generateRandomNumber } from "./utils.js";

export default function Car(name) {
  this.carName = name;
  this.forwardCount = 0;
}

Car.forwardCar = (car) => {
  const randomNumber = generateRandomNumber();
  if (randomNumber > 3) {
    car.forwardCount += 1;
  }

  return car;
};
