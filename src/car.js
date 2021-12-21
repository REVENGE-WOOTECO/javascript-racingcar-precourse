import { generateRandomNumber } from "./utils.js";

export default function Car(name) {
  this.carName = name;
  this.forwardCount = 0;
}

Car.prototype.forwardCar = function moveForward() {
  const randomNumber = generateRandomNumber();
  if (randomNumber > 3) {
    this.forwardCount += 1;
  }
};
