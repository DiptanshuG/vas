import React from "react";

import RadioCardGroup from "src/components/input/RadioCardGroup";

import { IModuleInputProps } from "./ModuleInput.types";
import { MODULE_OPTIONS } from "./ModuleInput.temp";

const ModuleInput: React.FC<IModuleInputProps> = ({ value, onChange }) => {
  return (
    <RadioCardGroup
      label="module"
      items={MODULE_OPTIONS}
      value={value}
      onChange={onChange}
    />
  );
};

export default ModuleInput;
