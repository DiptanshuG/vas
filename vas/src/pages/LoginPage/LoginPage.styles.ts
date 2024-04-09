import styled from "@emotion/styled";
import Card from "src/components/data/Card";

export const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const StyledFormContainer = styled(Card)`
  margin-top: 2.5rem;
  padding: 2rem;

  hr {
    margin-inline: -2rem;
  }
`;

export const StyledContentSection = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  flex: 10;
  color: #fff;
  background: var(--gradiant-primary);
`;

export const StyledFormSection = styled.div`
  flex: 9;
  padding: 3rem;
`;

export const StyledFormSectionContent = styled.div`
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
`;

export const StyledGradientHeading = styled.h2`
  background: var(--gradiant-primary);
  background-clip: text;
  color: transparent;
`;
