import inputStore from "store/inputStore";
import { TOneButtonObj } from "components";

export interface WithButtonsControllProps {
  store: inputStore;
  leftButtons?: TOneButtonObj[];
  rightButtons?: TOneButtonObj[];
}
