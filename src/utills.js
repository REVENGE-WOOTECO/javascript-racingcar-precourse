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