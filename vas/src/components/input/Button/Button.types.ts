export type ButtonVariant = "primary" | "secondary" | "ghost";

export type ColorVariant = "primary" | "white" | "black";

export type BorderRadius = "round";

export interface IStyledButtonProps {
  $variant: ButtonVariant;
  $colorVariant: ColorVariant;
  $borderRadius: BorderRadius;
}

export interface IButtonProps extends React.ButtonHTMLAttributes<Element> {
  ref?: React.MutableRefObject<HTMLButtonElement | null>;
  link?: string;
  variant?: ButtonVariant;
  colorVariant?: ColorVariant;
  borderRadius?: BorderRadius;
  useAria?: boolean;
}
