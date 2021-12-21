import { HIDDEN_CLASSNAME } from "../constants/style.js";

export default class WinnerOuputUI {
  #winnerOuputElement;
  #resultTitle;
  #resultText;
  constructor() {
    this.#winnerOuputElement = document.querySelector("#result");
    this.hideElement();
    this.createResultElement();
  }
  hideElement() {
    this.#winnerOuputElement.classList.add(HIDDEN_CLASSNAME);
  }

  createResultElement() {
    this.#resultTitle = document.createElement("span");
    this.#resultTitle.innerHTML = "최종 우승자: ";
    this.#resultTitle.classList.add(HIDDEN_CLASSNAME);

    this.#resultText = document.createElement("span");
    this.#resultText.id = "racing-winners";
    this.#resultText.innerHTML = "";
    this.#resultText.classList.add(HIDDEN_CLASSNAME);
  }

  showTotalRecords(text) {
    this.#winnerOuputElement.innerHTML = `${text}`;
    this.#winnerOuputElement.classList.remove(HIDDEN_CLASSNAME);
  }
  showWinner(winner) {
    this.#resultText.innerHTML = `${winner.join(", ")}`;
    this.#winnerOuputElement.append(this.#resultTitle, this.#resultText);
    this.#resultText.classList.remove(HIDDEN_CLASSNAME);
    this.#resultTitle.classList.remove(HIDDEN_CLASSNAME);
  }
}
