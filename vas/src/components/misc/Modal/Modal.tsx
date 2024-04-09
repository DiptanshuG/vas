import React from "react";
import { Overlay, useModalOverlay, useOverlayTrigger } from "react-aria";

import {
  StyledCloseButton,
  StyledContainer,
  StyledContentContainer,
  StyledHeader,
  StyledModalContainer,
} from "./Modal.styles";
import { IModalProps } from "./Modal.types";

const Modal: React.FC<IModalProps> = ({
  state,
  title,
  children,
  ...restProps
}) => {
  const ref = React.useRef(null);
  const { modalProps, underlayProps } = useModalOverlay(restProps, state, ref);
  const { overlayProps } = useOverlayTrigger({ type: "dialog" }, state);

  if (!state.isOpen) {
    return null;
  }

  return (
    <Overlay>
      <StyledModalContainer {...underlayProps}>
        <StyledContainer {...modalProps} ref={ref}>
          <StyledCloseButton
            variant="ghost"
            colorVariant="black"
            onClick={state.close}
          >
            X
          </StyledCloseButton>

          {!!title && <StyledHeader>{title}</StyledHeader>}

          {!!children &&
            React.cloneElement(
              <StyledContentContainer>{children}</StyledContentContainer>,
              overlayProps
            )}
        </StyledContainer>
      </StyledModalContainer>
    </Overlay>
  );
};

export default Modal;
