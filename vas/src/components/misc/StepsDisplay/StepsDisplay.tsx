import React from "react";

import {
  StyledContainer,
  StyledIcon,
  StyledIconContainer,
  StyledStep,
  StyledStepName,
} from "./StepsDisplay.styles";
import { IStepsDisplayProps } from "./StepsDisplay.types";

const StepsDisplay: React.FC<IStepsDisplayProps> = ({ steps, className }) => {
  return (
    <StyledContainer className={className}>
      {steps.map(({ active, completed, name }, i) => {
        return (
          <StyledStep key={i}>
            <StyledIconContainer $active={active} $completed={completed}>
              {completed && !active ? (
                <StyledIcon src="/assets/images/icons/tick.svg" />
              ) : (
                i + 1
              )}
            </StyledIconContainer>
            <StyledStepName $active={active} $completed={completed}>
              {name}
            </StyledStepName>
          </StyledStep>
        );
      })}
    </StyledContainer>
  );
};

export default StepsDisplay;
