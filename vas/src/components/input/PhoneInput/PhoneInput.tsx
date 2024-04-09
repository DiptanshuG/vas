import React from "react";

import { StyledInput } from "./PhoneInput.styles";
import { IPhoneInputProps } from "./PhoneInput.types";

const PhoneInput: React.FC<IPhoneInputProps> = ({
  value,
  onChange,
  className,
  placeholder,
}) => {
  return (
    <StyledInput
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      defaultCountry="IN"
    />
  );
};

export default PhoneInput;
