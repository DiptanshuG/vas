import React, { useRef, useCallback } from "react";
import { useButton } from "react-aria";

import { joinClassNames } from "src/utils/classNames";

import { IButtonProps } from "./Button.types";
import {
  BUTTON_VARAINT_CONFIG,
  DEFAULT_BORDER_RADIUS,
  DEFAULT_BUTTON_VARIANT,
  DEFAULT_COLOR_VARIANT,
} from "./Button.config";
import { StyledButton, StyledLink } from "./Button.styles";

//-------------------------------

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      link,
      variant = DEFAULT_BUTTON_VARIANT,
      colorVariant = DEFAULT_COLOR_VARIANT,
      borderRadius = DEFAULT_BORDER_RADIUS,
      disabled: isDisabled,
      onFocus,
      onClick,
      className,
      useAria = false,
      type = "button",
      ...props
    },
    forwardedRef: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const { buttonProps } = useButton(
      {
        isDisabled,
        onPress: onClick,
        type: "button",
        ...props,
      } as any,
      buttonRef
    );
    const { children } = props;

    //======================================

    const handleSetRef = useCallback(
      (newRef: HTMLButtonElement | null) => {
        if (forwardedRef) {
          if (forwardedRef instanceof Function) {
            forwardedRef(newRef);
          } else {
            forwardedRef.current = newRef;
          }
        }

        buttonRef.current = newRef;
      },
      [forwardedRef]
    );

    const handleUpdateRef = useCallback(
      (newRef: HTMLButtonElement | null) => {
        handleSetRef(newRef);
      },
      [handleSetRef]
    );

    //======================================

    return (
      <StyledButton
        ref={handleUpdateRef}
        $variant={variant}
        $colorVariant={colorVariant}
        $borderRadius={borderRadius}
        {...(link ? { href: link, as: StyledLink } : {})}
        className={joinClassNames(className, buttonProps.className)}
        type={type}
        style={BUTTON_VARAINT_CONFIG[colorVariant][variant].styles || {}}
        {...(useAria ? buttonProps : { onClick, ...props })}
        disabled={isDisabled}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
