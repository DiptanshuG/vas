import LoginForm from "src/features/auth/LoginForm";
import Button from "src/components/input/Button";

import {
  StyledContainer,
  StyledContentSection,
  StyledFormContainer,
  StyledFormSection,
  StyledFormSectionContent,
  StyledGradientHeading,
} from "./LoginPage.styles";

const LoginPage = () => {
  return (
    <>
      <StyledContainer>
        <StyledContentSection>
          <div>
            <h2>AI Age Well Being</h2>

            <p>
              Parachute Design is a top web design agency hand-crafting
              beautiful website design and branding since 2003. ParacParachute
              Design is a top web design agency hand-crafting beautiful website
              design and branding since 2003.hute Design is a top web design
              agency hand-crafting beautiful website design and branding since
              2003.Parachute Design is a top web design agency hand-crafting
              beautiful website design and branding since 2003.Parachute Design
              is a top web design agency hand-crafting beautiful website design
              and branding since 2003.Parachute Design is a top web design
              agency hand-crafting beautiful website design and branding since
              2003.Parachute Design is a top web design agency hand-crafting
              beautiful website design and branding since 2003.
            </p>

            <p>
              Parachute Design is a top web design agency hand-crafting
              beautiful website design and branding since 2003. ParacParachute
              Design is a top web design agency hand-crafting beautiful website
              design and branding since 2003.hute
            </p>

            <Button link="#" variant="secondary" colorVariant="white">
              Know more
            </Button>
          </div>
        </StyledContentSection>

        <StyledFormSection>
          <StyledFormSectionContent>
            <StyledGradientHeading>
              Welcome to Login's Client Portal
            </StyledGradientHeading>
            <StyledFormContainer>
              <LoginForm />
            </StyledFormContainer>
          </StyledFormSectionContent>
        </StyledFormSection>
      </StyledContainer>
    </>
  );
};

export default LoginPage;
