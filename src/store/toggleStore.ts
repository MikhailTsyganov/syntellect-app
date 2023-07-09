import { action, makeObservable, override } from "mobx";

import inputStore from "./inputStore";

class toggleStore extends inputStore {
  constructor() {
    super();
    makeObservable(this, {
      inputValue: override,
      onChangeInput: override,
      addInputValue: action,
      clearInput: action,
    });
  }

  addInputValue() {
    this.inputValue = "Hello World!";
  }

  clearInput() {
    this.inputValue = "";
  }
}

export default toggleStore;
