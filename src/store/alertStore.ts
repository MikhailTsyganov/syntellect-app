import { action, makeObservable, override } from "mobx";

import inputStore from "./inputStore";

class alertStore extends inputStore {
  constructor() {
    super();
    makeObservable(this, {
      inputValue: override,
      onChangeInput: override,
      alertInputText: action,
      alertInputNumber: action,
    });
  }

  alertInputText() {
    alert(this.inputValue);
  }

  alertInputNumber() {
    if (this.inputValue !== "" && !isNaN(Number(this.inputValue))) {
      alert(this.inputValue);
    }
    return;
  }
}

export default alertStore;
