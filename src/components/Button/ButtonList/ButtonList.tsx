import { FC } from "react";
import { ButtonListProps } from ".";
import { ButtonListItem } from "components";

export const ButtonList: FC<ButtonListProps> = ({ buttonsArray = [] }) => {
  return (
    <ul className="buttonList">
      {buttonsArray.map((buttonObj, index) => (
        <ButtonListItem
          text={buttonObj.text}
          onButtonClick={buttonObj.cb}
          key={index}
        />
      ))}
    </ul>
  );
};
