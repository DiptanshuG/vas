import React, { useEffect, useMemo, useState } from "react";

import RadioCardGroup, { Item } from "src/components/input/RadioCardGroup";

import { IModuleInputProps, Module } from "./ModuleInput.types";

const ModuleInput: React.FC<IModuleInputProps> = ({ value, onChange }) => {
  const [moduleOptions, setModuleOptions] = useState<Module[]>([]);

  const APP = "66151d9e975decef580d5437";

  const items: Item[] = useMemo(
    () =>
      moduleOptions.map(
        (m) =>
          ({
            description: m.description,
            title: m.name,
            image: m.thumbnail.Location,
            value: m.name,
          } satisfies Item)
      ),
    [moduleOptions]
  );

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/api/enrollment/getList?programID=${APP}`
    )
      .then((response) => response.json())
      .then((data) => {
        setModuleOptions(data?.payload || []);
      })
      .catch((error) => console.error("Error fetching module options:", error));
  }, []);

  return (
    <RadioCardGroup
      label="module"
      items={items}
      value={value}
      onChange={onChange}
    />
  );
};

export default ModuleInput;
