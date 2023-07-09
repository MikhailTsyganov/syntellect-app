import { FC } from "react";

import alertStore from "store/alertStore";
import { WithButtonsControll } from "components";

export const AlertControll: FC = () => {
  const store = new alertStore();

  return (
    <>
      <WithButtonsControll
        store={store}
        leftButtons={[{ text: "Число", cb: () => store.alertInputNumber() }]}
        rightButtons={[{ text: "Текст", cb: () => store.alertInputText() }]}
      ></WithButtonsControll>
    </>
  );
};
