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
          <div className="m-[3.5rem]">
            <h2 className="font-bold my-4 text-3xl">AI Age Well Being</h2>

            <p className="my-6">
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

            <p className="my-6">
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
