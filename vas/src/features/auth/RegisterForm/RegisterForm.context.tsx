import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useForm } from "src/components/input/Form";
import { IButtonProps } from "src/components/input/Button";
import { Step as StepType } from "src/components/misc/StepsDisplay";

import {
  FormRef,
  FormValues,
  IRegisterFormContext,
  IRegisterFormProps,
  Step,
} from "./RegisterForm.types";
import {
  StyledBottomSection,
  StyledButton,
  StyledForm,
  StyledStepsContainer,
  StyledStepsDisplay,
} from "./RegisterForm.styles";
import { STEPS_CONFIG, STEPS_LIST } from "./RegisterForm.config";

const INITIAL_VALUES = {} as IRegisterFormContext;

const FormContext = createContext(INITIAL_VALUES);

export const useRegisterForm = () => useContext(FormContext);

export const VerifyUserFormProvider: React.FC<IRegisterFormProps> = ({
  getFormRef,
  onStepChange,
}) => {
  const ref = useRef({} as FormRef);
  const stepContainerElRef = useRef<HTMLDivElement | null>(null);

  const formContextValue = useForm<FormValues>();
  const { submitForm, values } = formContextValue;

  const [currentStep, setCurrentStep] = useState<Step>(Step.Module);
  const [otpVerified] = useState(false);

  const ctaButtonProps = useMemo(() => {
    const props: IButtonProps = {};

    if (currentStep === Step.Module) {
      props.disabled = !values.module;
    }

    if (currentStep === Step.Details) {
      props.disabled =
        !values.firstName ||
        !values.lastName ||
        !values.email ||
        !values.password ||
        !values.confirmPassword ||
        !values.phone;
    }

    if (currentStep === Step.VerifyOtp) {
      props.disabled = otpVerified ? false : values.otp.length !== 6;
    }

    return props;
  }, [currentStep, values, otpVerified]);

  const isLastStep = currentStep === STEPS_LIST[STEPS_LIST.length - 1].id;

  // ---------------------

  const renderStep = useCallback(
    () => STEPS_CONFIG[currentStep].component,
    [currentStep]
  );

  const gotToStep = useCallback(
    (step: Step) => {
      setCurrentStep(step);

      if (onStepChange) {
        onStepChange(step);
      }

      if (stepContainerElRef.current) stepContainerElRef.current.scrollTop = 0;
    },
    [onStepChange]
  );

  const getStepIndex = useCallback((step: Step) => {
    const index = STEPS_LIST.findIndex(({ id }) => id === step);

    return index;
  }, []);

  const previousStep = useCallback(() => {
    const currentStepIndex = getStepIndex(currentStep);

    if (currentStepIndex === 0) {
      return;
    }

    const nextStepIndex = Math.max(0, currentStepIndex - 1);
    gotToStep(STEPS_LIST[nextStepIndex].id as Step);
  }, [currentStep, gotToStep, getStepIndex]);

  const nextStep = useCallback(() => {
    const currentStepIndex = getStepIndex(currentStep);

    if (currentStepIndex === STEPS_LIST.length - 1) {
      return;
    }

    const nextStepIndex = Math.min(STEPS_LIST.length - 1, currentStepIndex + 1);
    gotToStep(STEPS_LIST[nextStepIndex].id as Step);
  }, [currentStep, gotToStep, getStepIndex]);

  const handleClick = useCallback(() => {
    if (isLastStep) {
      submitForm();
    } else {
      nextStep();
    }
  }, [nextStep, isLastStep, submitForm]);

  // ---------------------

  useEffect(() => {
    ref.current = {
      nextStep,
      previousStep,
    };

    if (getFormRef) getFormRef(ref.current);
  }, [nextStep, previousStep, getFormRef]);

  useEffect(() => {
    console.log("DEBUG", { values });
  }, [values]);

  const stepDisplayData = useMemo(
    () =>
      STEPS_LIST.map(
        ({ id, title, order }) =>
          ({
            name: title,
            active: id === currentStep,
            completed: order <= STEPS_CONFIG[currentStep].order,
          } satisfies StepType)
      ),
    [currentStep]
  );

  // ---------------------

  return (
    <FormContext.Provider
      value={{
        ...formContextValue,
        currentStep,
      }}
    >
      <StyledForm>
        <StyledStepsDisplay className="py-3" steps={stepDisplayData} />

        <hr />

        <StyledStepsContainer ref={stepContainerElRef}>
          {renderStep()}
        </StyledStepsContainer>

        <hr />

        <StyledBottomSection>
          <StyledButton
            className="w-100"
            onClick={handleClick}
            {...ctaButtonProps}
          >
            Next
          </StyledButton>
        </StyledBottomSection>
      </StyledForm>
    </FormContext.Provider>
  );
};
