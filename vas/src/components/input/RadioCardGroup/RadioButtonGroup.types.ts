export type Item = {
  image: string;
  title: string;
  description: string;
  value: string;
  disabled?: boolean;
};

export interface IRadioCardGroupProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  items: Item[];
  className?: string;
}
