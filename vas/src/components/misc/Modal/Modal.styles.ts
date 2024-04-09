import styled from "@emotion/styled";

import Button from "src/components/input/Button";

export const StyledModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  zindex: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const StyledContainer = styled.div`
  position: relative;
  border-radius: 24px;
  background: #fff;
`;

export const StyledContentContainer = styled.div`
  padding: 2rem;
`;

export const StyledHeader = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  padding: 2rem;
  border-bottom: 1px solid #eaecf0;
`;

export const StyledCloseButton = styled(Button)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;
