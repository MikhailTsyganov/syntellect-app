import {
  makeObservable,
  observable,
  override,
  action,
  runInAction,
} from "mobx";

import inputStore from "./inputStore";
import { getCountryByName, CountryInfo } from "api/apiService";

class autocompleteStore extends inputStore {
  countries: CountryInfo[] = [];

  constructor() {
    super();
    makeObservable(this, {
      inputValue: override,
      onChangeInput: override,
      countries: observable,
      onChangeFetchCountries: action,
      onSelectCountry: action,
    });
  }

  onChangeFetchCountries(value: string, maxPromt?: number) {
    this.onChangeInput(value);

    getCountryByName(this.inputValue).then((data) => {
      runInAction(() => {
        this.countries = [
          ...new Map(
            data.map((obj) => [`${obj.name}:${obj.flag}`, obj])
          ).values(),
        ].slice(0, maxPromt || data.length);
      });
    });
  }

  onSelectCountry(name: string) {
    this.onChangeFetchCountries(name);
  }
}

export default autocompleteStore;
