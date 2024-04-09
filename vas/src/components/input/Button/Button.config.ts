import { BorderRadius, ButtonVariant, ColorVariant } from "./Button.types";

export const BUTTON_VARAINT_CONFIG: Record<
  ColorVariant,
  Record<
    ButtonVariant,
    {
      color: string;
      bgColor: string;
      borderColor: string;
      styles?: React.CSSProperties;
    }
  >
> = {
  primary: {
    primary: {
      color: "#fff",
      bgColor: "var(--gradiant-primary)",
      borderColor: "var(--gradiant-primary)",
    },
    secondary: {
      color: "transparent",
      bgColor:"var(--gradiant-primary)",
      borderColor: "rgba(0, 0, 0, 0.10)",
      styles: {
        backgroundClip: 'text',
      }
    },
    ghost: {
      color: "transparent",
      bgColor: "var(--gradiant-primary)",
      borderColor: "transparent",
      styles: {
        backgroundClip: 'text',
      }
    },
  },

  white: {
    primary: {
      color: "transparent",
      bgColor: "#fff",
      borderColor: "#fff",
    },
    secondary: {
      color: "#fff",
      bgColor: "transparent",
      borderColor: "#fff",
    },
    ghost: {
      color: "#fff",
      bgColor: "transparent",
      borderColor: "transparent",
    },
  },

  black: {
    primary: {
      color: "#fff",
      bgColor: "#475467",
      borderColor: "#475467",
    },
    secondary: {
      color: "#475467",
      bgColor: "transparent",
      borderColor: "#475467",
    },
    ghost: {
      color: "#475467",
      bgColor: "transparent",
      borderColor: "transparent",
    },
  },
};

export const DEFAULT_BUTTON_VARIANT: ButtonVariant = "primary";

export const DEFAULT_COLOR_VARIANT: ColorVariant = "primary";

export const BUTTON_BORDER_RADIUS: Record<
  BorderRadius,
  { cssVariable: string }
> = {
  round: {
    cssVariable: "--border-radius-round",
  },
};

export const DEFAULT_BORDER_RADIUS: BorderRadius = "round";
