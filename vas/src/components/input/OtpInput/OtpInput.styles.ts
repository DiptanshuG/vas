import styled from "@emotion/styled";

import { squareSizing } from "src/utils/css";

export const StyledContainer = styled.div`
  & > div {
    gap: 1rem;
    justify-content: space-between;
    max-width: 492px
  }
`;

export const StyledDigitInput = styled.input`
  ${squareSizing("52px")};
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
`;
