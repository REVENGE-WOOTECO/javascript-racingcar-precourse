import { HIDDEN_CLASSNAME } from "../constants/style.js";

export default class RacingCountUI {
  #racingCountTitle;
  #racingCountInput;
  #racingCountSubmitButton;
  constructor() {
    this.#racingCountTitle = document.querySelector("#racing-count-title");
    this.#racingCountInput = document.querySelector("#racing-count-input");
    this.#racingCountSubmitButton = document.querySelector(
      "#racing-count-submit"
    );
    this.hideElement();
  }

  bindAction(onSubmitted) {
    this.#racingCountSubmitButton.addEventListener("click", (event) => {
      event.preventDefault();
      onSubmitted();
    });
  }

  getInput() {
    return this.#racingCountInput.value;
  }

  hideElement() {
    this.#racingCountInput.classList.add(HIDDEN_CLASSNAME);
    this.#racingCountSubmitButton.classList.add(HIDDEN_CLASSNAME);
    this.#racingCountTitle.classList.add(HIDDEN_CLASSNAME);
  }
  showElement() {
    this.#racingCountTitle.classList.remove(HIDDEN_CLASSNAME);
    this.#racingCountSubmitButton.classList.remove(HIDDEN_CLASSNAME);
    this.#racingCountInput.classList.remove(HIDDEN_CLASSNAME);
  }
}
