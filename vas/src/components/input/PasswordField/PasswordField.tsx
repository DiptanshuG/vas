import React, { useState } from "react";

import TextField from "src/components/input/TextField";
import Button from "src/components/input/Button";

import { IPasswordFieldProps } from "./PasswordField.types";

const PasswordField: React.FC<IPasswordFieldProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggle = () => setShowPassword((v) => !v);

  return (
    <TextField
      type={showPassword ? props.type : "password"}
      appendContent={
        <Button variant="ghost" onClick={toggle}>{showPassword ? "H" : "S"}</Button>
      }
    />
  );
};

export default PasswordField;
