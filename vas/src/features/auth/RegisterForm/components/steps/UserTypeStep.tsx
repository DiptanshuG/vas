import React from "react";

import ModuleInput from "src/features/input/ModuleInput";

import { useRegisterForm } from "../../RegisterForm.context";

const UserTypeStep: React.FC = () => {
  const { values, setFieldValue } = useRegisterForm();

  return (
    <ModuleInput
      value={values.module}
      onChange={(value) => {
        setFieldValue("module", value);
      }}
    />
  );
};

export default UserTypeStep;
