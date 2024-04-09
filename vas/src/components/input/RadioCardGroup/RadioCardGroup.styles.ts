import styled from "@emotion/styled";

import RadioGroup from "src/components/input/RadioGroup";
import { squareSizing } from "src/utils/css";

export const StyledContainer = styled(RadioGroup.Container)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const StyledImageContainer = styled.div`
  ${squareSizing("60px")};
  border-radius: 100rem;
  background: #f2f4f7;
`;

export const StyledImage = styled.img`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledTitle = styled.div`
  margin-top: 1rem;
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
`;

export const StyledDescription = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.14px;
  margin-top: 1rem;
`;

export const StyledItem = styled.label<{
  $isSelected: boolean;
  $disabled: boolean;
}>`
  flex: 1;
  min-width: 298px;
  padding: 1rem;
  min-height: 66px;
  font-size: 1rem;
  font-weight: ${({ $disabled }) => ($disabled ? 600 : 500)};
  line-height: 160%;
  border-radius: 1rem;
  transition: background 120ms ease;
  will-change: background;
  box-shadow: 0px 1px 3px 0px rgba(16, 24, 40, 0.1),
    0px 1px 2px 0px rgba(16, 24, 40, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.01);
  cursor: pointer;

  ${({ $isSelected, $disabled }) =>
    $disabled
      ? `
        background: #A4ACB9;
        color: #fff; 
        `
      : $isSelected
      ? `
        background: var(--gradiant-primary);
        color: #fff; 
    `
      : `
        background: #fff;
        color: #475467; 
        border-color: #eaecf0;
    `};

  input {
    display: none;
  }
`;
