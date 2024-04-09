import { IFormContext } from "src/components/input/Form";

export enum Step {
  Module = "Module",
  Details = "Details",
  VerifyOtp = "VerifyOtp",
}

export type FormValues = {
  module: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  otp: string;
};

export interface IRegisterFormProps {
  getFormRef?: (ref: FormRef) => void;
  onStepChange?: (step: Step) => void;
  initialValues?: FormValues;
}

export interface IRegisterFormContext extends IFormContext<FormValues> {
  currentStep: Step;
}

export type FormRef = {
  previousStep: () => void;
  nextStep: () => void;
};
