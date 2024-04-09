import styled from "@emotion/styled";

import {
  BUTTON_VARAINT_CONFIG,
  DEFAULT_BUTTON_VARIANT,
  DEFAULT_COLOR_VARIANT,
} from "./Button.config";
import { IStyledButtonProps } from "./Button.types";

export const StyledButton = styled.button<IStyledButtonProps>`
  --color: ${({
    $variant = DEFAULT_BUTTON_VARIANT,
    $colorVariant = DEFAULT_COLOR_VARIANT,
  }) => {
    return BUTTON_VARAINT_CONFIG[$colorVariant][$variant].color;
  }};
  --border-color: ${({
    $variant = DEFAULT_BUTTON_VARIANT,
    $colorVariant = DEFAULT_COLOR_VARIANT,
  }) => BUTTON_VARAINT_CONFIG[$colorVariant][$variant].borderColor};
  --bg-color: ${({
    $variant = DEFAULT_BUTTON_VARIANT,
    $colorVariant = DEFAULT_COLOR_VARIANT,
  }) => BUTTON_VARAINT_CONFIG[$colorVariant][$variant].bgColor};

  border-radius: 10px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 0.75rem 1rem;
  border: 2px solid var(--border-color);
  outline: none;
  font-weight: 500;

  line-height: 26px;
  letter-spacing: 0.02em;
  color: var(--color);
  background: var(--bg-color);
  min-width: fit-content;
  cursor: pointer;
  text-decoration: none;
  transition: width, filter, 240ms ease-in-out;

  &:disabled {
    color: #98a2b3;
    border: 2px solid #eaecf0;
    background: #fff;
    cursor: not-allowed;
  }
`;

export const StyledLink = styled.a``;
