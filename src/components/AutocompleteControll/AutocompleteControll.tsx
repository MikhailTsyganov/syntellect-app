import { FC } from "react";
import { observer } from "mobx-react-lite";
import { DebounceInput } from "react-debounce-input";

import { AutocompleteControllProps } from ".";
import { DropDownList } from "components";




export const AutocompleteControll: FC<AutocompleteControllProps> = observer(
  ({ store, maxPromt }) => {
    return (
      <div>
        <DebounceInput
          value={store.inputValue}
          onChange={(e) =>
            store.onChangeFetchCountries(e.target.value, maxPromt)
          }
          debounceTimeout={300}
        />

        {store.countries.length > 0 && <DropDownList store={store} />}
      </div>
    );
  }
);
