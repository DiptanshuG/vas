import React, { useCallback } from "react";

import RadioGroup, {
  RenderFunctionParams,
} from "src/components/input/RadioGroup";

import {
  StyledItem,
  StyledContainer,
  StyledImageContainer,
  StyledImage,
  StyledTitle,
  StyledDescription,
} from "./RadioCardGroup.styles";
import { IRadioCardGroupProps, Item } from "./RadioButtonGroup.types";

const RadioCardGroup: React.FC<IRadioCardGroupProps> = ({
  label,
  value,
  onChange,
  items,
  className,
}) => {
  const render = useCallback(
    ({
      isSelected,
      labelProps,
      inputProps,
      inputRef,
      disabled = false,
      image,
      title,
      description,
    }: RenderFunctionParams & Item) => {
      return (
        <StyledItem
          {...labelProps}
          $isSelected={isSelected}
          $disabled={disabled}
        >
          <input {...inputProps} ref={inputRef} disabled={disabled} />
          <StyledImageContainer>
            <StyledImage src={image} alt="" />
          </StyledImageContainer>

          <StyledTitle>{title}</StyledTitle>

          <StyledDescription>{description}</StyledDescription>
        </StyledItem>
      );
    },
    []
  );

  return (
    <StyledContainer
      label={label}
      value={value}
      onChange={(value) => {
        if (onChange) {
          onChange(value);
        }
      }}
      className={className}
      renderRadio={render as any}
    >
      {items.map((item, i) => (
        <RadioGroup.Radio key={i} {...item} />
      ))}
    </StyledContainer>
  );
};

export default RadioCardGroup;
