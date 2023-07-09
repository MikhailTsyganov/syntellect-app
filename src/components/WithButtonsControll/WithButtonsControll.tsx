import { FC } from "react";
import { observer } from "mobx-react-lite";
import { DebounceInput } from "react-debounce-input";

import { WithButtonsControllProps } from ".";
import { ButtonList } from "components";

export const WithButtonsControll: FC<WithButtonsControllProps> = observer(
  ({ store, leftButtons, rightButtons }) => {
    return (
      <div>
        {leftButtons && <ButtonList buttonsArray={leftButtons} />}
        <DebounceInput
          value={store.inputValue}
          onChange={(e) => store.onChangeInput(e.target.value)}
          debounceTimeout={300}
        />
        {rightButtons && <ButtonList buttonsArray={rightButtons} />}
      </div>
    );
  }
);
