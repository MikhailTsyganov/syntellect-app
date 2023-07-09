import { FC } from "react";

import { CountryListControllProps } from ".";
import { AutocompleteControll } from "components";
import autocompleteStore from "store/autocompleteStore";

export const CountryListControll: FC<CountryListControllProps> = ({
  maxPromt,
}) => {
  const store = new autocompleteStore();

  return (
    <AutocompleteControll
      maxPromt={maxPromt}
      store={store}
    ></AutocompleteControll>
  );
};
