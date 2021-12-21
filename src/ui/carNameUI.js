export default class CarNameUI {
  #carNameInput;
  #carNameSubmitButton;
  constructor() {
    this.#carNameInput = document.querySelector("#car-names-input");
    this.#carNameSubmitButton = document.querySelector("#car-names-submit");
  }
  getSplitInput() {
    return this.#carNameInput.value.split(",");
  }
  bindAction(onSubmitted) {
    this.#carNameSubmitButton.addEventListener("click", (event) => {
      event.preventDefault();
      onSubmitted();
    });
  }
}
