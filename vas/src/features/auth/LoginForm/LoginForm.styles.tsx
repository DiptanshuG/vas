import styled from "@emotion/styled";

import Button from "src/components/input/Button";
 

export const StyledForm = styled.form`
  label {
    display: block;
  }
`;

export const StyledSmallText = styled.p`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

export const StyledPlainButton = styled(Button)`
padding-inline: 0;
`;
