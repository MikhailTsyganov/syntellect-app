import { FC } from "react";
import { ButtonListItemProps } from ".";

export const ButtonListItem: FC<ButtonListItemProps> = ({
  text,
  onButtonClick,
}) => {
  return (
    <li>
      <button onClick={onButtonClick}>{text}</button>
    </li>
  );
};
