import styled from "@emotion/styled";

import PhoneInputComponent from "react-phone-number-input";

export const StyledInput = styled(PhoneInputComponent)`
  --label-top: 1rem;
  --label-top-focus: -0.5rem;
  position: relative;
  display: flex;
  height: 56px;
  align-items: center;
  gap: 0.5rem;

  outline: none;
  font-size: 16px;
  background: #fff;
  border: 1px solid #eaecf0;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  color: #555;
  overflow: hidden;

  & > input {
    outline: none !important;

    &,
    &:-internal-autofill-selected,
    &::autofill,
    &:-webkit-autofill,
    &::placeholder {
      font-size: 14px;
      font-weight: 500;
      color: #98a2b3;
    }

    &,
    &::placeholder,
    &:-internal-autofill-selected,
    &::autofill,
    &:-webkit-autofill {
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      background: transparent !important;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-buntton {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      margin: 0;
    }

    &::-webkit-calendar-picker-indicator {
      background: transparent;
      bottom: 0;
      color: transparent;
      cursor: pointer;
      height: auto;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: auto;
    }
  }
`;
