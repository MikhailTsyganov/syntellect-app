import { makeObservable, observable, action } from "mobx";

class inputStore {
  inputValue = "";

  constructor() {
    makeObservable(this, {
      inputValue: observable,
      onChangeInput: action,
    });
  }

  onChangeInput(value: string) {
    this.inputValue = value;
  }
}

export default inputStore;
