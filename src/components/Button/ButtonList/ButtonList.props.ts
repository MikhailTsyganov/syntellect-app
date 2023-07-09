export type TOneButtonObj = {
  text: string;
  cb: () => void;
};

export interface ButtonListProps {
  buttonsArray: TOneButtonObj[];
}
