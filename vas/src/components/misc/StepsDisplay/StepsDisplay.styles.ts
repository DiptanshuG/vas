import styled from "@emotion/styled";
import { squareSizing } from "src/utils/css";

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  margin-inline: -0.5rem;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    border-bottom: 1px dashed #d0d5dd;
    transform: translateY(-50%);
  }
`;

export const StyledStep = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #fff;
  z-index: 1;
  padding-inline: 0.5rem;
`;

export const StyledStepName = styled.div<{
  $active: boolean;
  $completed: boolean;
}>``;

export const StyledIconContainer = styled.div<{
  $active: boolean;
  $completed: boolean;
}>`
  ${squareSizing("24px")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10rem;
  ${({ $active, $completed }) =>
    $active
      ? `   
            color: #fff;
            border: 1px solid transparent;
            background: var(--gradiant-primary); 
        `
      : $completed
      ? `
            border: 1px solid #167f50;
            background: #e5f3ed; 
        `
      : `
            color: #98A2B3;
            border: 1px solid #D0D5DD;
            background: #F2F4F7; 
        `}
`;

export const StyledIcon = styled.img``;
