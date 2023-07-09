import { FC } from "react";

import { WithButtonsControll } from "components";
import toggleStore from "store/toggleStore";

export const ToggleControll: FC = () => {
  const store = new toggleStore();

  return (
    <WithButtonsControll
      store={store}
      rightButtons={[
        { text: "Удалить", cb: () => store.clearInput() },
        { text: "Вставить", cb: () => store.addInputValue() },
      ]}
    ></WithButtonsControll>
  );
};
