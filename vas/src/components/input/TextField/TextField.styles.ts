import styled from "@emotion/styled";

export const StyledInput = styled.input`
  position: relative;
  border: none !important;
  outline: none !important;
  background: transparent !important;
  flex: 1;
  max-width: -webkit-fill-available;
  padding: 0 4px;
  text-align: inherit;
  overflow: hidden;

  &,
  &:-internal-autofill-selected,
  &::autofill,
  &:-webkit-autofill,
  &::placeholder {
    font-size: 14px;
    font-weight: 500;
    color: #98A2B3;
  }


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
`;

export const StyledTextArea = styled.textarea`
  border: none !important;
  outline: none !important;
  background: transparent !important;
  flex: 1;
  max-width: -webkit-fill-available;
  padding: 0 4px;
  text-align: inherit;
  height: calc(100% - 1.25rem);
  resize: none;

  &::placeholder,
  &:-internal-autofill-selected,
  &::autofill,
  &:-webkit-autofill {
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #434251;
    background: transparent !important;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-buntton {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

export const StyledContainer = styled.div<{ $hasValue: boolean }>`
  --label-top: 1rem;
  --label-top-focus: -0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  outline: none;
  font-size: 16px;
  background: #fff;
  border: 1px solid #eaecf0;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  color: #555;
  outline: none;
  overflow: hidden;
`;

export const StyledInputContainer = styled(StyledContainer)`
  height: 56px;
`;

export const StyledTextAreaContainer = styled(StyledContainer)`
  height: 160px;
  align-items: flex-start;
`;
