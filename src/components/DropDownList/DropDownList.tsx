import { FC } from "react";
import { toJS } from "mobx";

import { DropDownListProps } from ".";

export const DropDownList: FC<DropDownListProps> = ({ store }) => {
  return (
    <ul className="dropDownList">
      {toJS(store.countries).map((country) => (
        <li
          key={country.name}
          onClick={() => store.onSelectCountry(country.name)}
        >
          <div>
            <h4>{country.name}</h4>
            <p>{country.fullName}</p>
          </div>

          <img src={country.flag} alt={country.fullName} />
        </li>
      ))}
    </ul>
  );
};
