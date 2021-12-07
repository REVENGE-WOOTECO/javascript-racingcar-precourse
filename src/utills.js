import { RESULT_TEXT } from "./constants.js";

export const generateRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(0, 9);
};

export const printResultOneTurn = (cars) => {
  const app = document.getElementById("app");
  const resultAreaP = document.createElement("p");
  let resultCarText = "";

  for (let i = 0; i < cars.length; i += 1) {
    resultCarText += `${cars[i].carName}: ${"-".repeat(cars[i].forwardCount)}\n`;
  }

  resultAreaP.innerText = resultCarText;
  app.appendChild(resultAreaP);
};

export const getWinner = (cars) => {
  const winnerList = [];
  let largestForwardCount = 0;

  for (let i = 0; i < cars.length; i += 1) {
    if (cars[i].forwardCount > largestForwardCount) {
      largestForwardCount = cars[i].forwardCount;
    }
    if (cars[i].forwardCount === largestForwardCount) {
      winnerList.push(cars[i].carName);
    }
  }

  return winnerList;
};

export const printWinner = (winnerList) => {
  const app = document.getElementById("app");
  const resultSpan = document.createElement("span");
  const winnerSpan = document.createElement("span");

  winnerSpan.id = "racing-winners";
  resultSpan.innerText = RESULT_TEXT;
  winnerSpan.innerText = winnerList.join(", ");

  app.appendChild(resultSpan);
  app.appendChild(winnerSpan);
};
