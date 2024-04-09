import React from "react";

import OtpInputComponent from "react-otp-input";

import { StyledContainer, StyledDigitInput } from "./OtpInput.styles";
import { IOtpInputProps } from "./OtpInput.types";

const OtpInput: React.FC<IOtpInputProps> = ({
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <StyledContainer className={className}>
      <OtpInputComponent
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        numInputs={6}
        renderInput={(props) => <StyledDigitInput {...props} />}
      />
    </StyledContainer>
  );
};

export default OtpInput;
