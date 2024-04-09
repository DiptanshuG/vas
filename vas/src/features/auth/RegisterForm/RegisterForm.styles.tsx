import styled from "@emotion/styled";

import Button from "src/components/input/Button";
import StepsDisplay from "src/components/misc/StepsDisplay";

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 712px;
  padding-inline: 2rem;
  margin: -2rem;

  & > hr {
    margin-inline: -2rem;
  }
`;

export const StyledStepsDisplay = styled(StepsDisplay)`
  padding-block: 1.5rem;
  height: 104px;
`;

export const StyledStepsContainer = styled.div`
  flex: 1;
  overflow: hidden auto;
  padding-block: 1.5rem;
`;

export const StyledBottomSection = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-block: 1.5rem;
`;

export const StyledButton = styled(Button)`
  padding: 1rem;
  min-width: 114px;
`;

export const StyledSectionHeading = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #0d0d12;
`;

export const StyledStepHeading = styled.h1`
  font-size: 28px;
  font-weight: 600;
  line-height: 130%;
  margin: 0;
`;

export const StyledSpecialButton = styled(Button)`
  padding: 1rem;
  min-height: 66px;
  font-size: 16px;
  font-weight: 500;
  line-height: 160%;
  background: #fafafa;
  border: 1px solid #5f57ff;
  border-radius: 1rem;
`;

export const StyledSmallText = styled.p`
  font-size: 14px;
  line-height: 160%;
  letter-spacing: -0.02em;
  margin: 0;
`;
