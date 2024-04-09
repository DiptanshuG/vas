import * as yup from "yup";

import { FormValues, Step } from "./RegisterForm.types";
import UserTypeStep from "./components/steps/UserTypeStep";
import DetailsStep from "./components/steps/DetailsStep";
import VerifyOtpStep from "./components/steps/VerifyOtpStep";

export const VALIDATION_SCHEMA = yup.object().shape({});

export const INITIAL_VALUES: FormValues = {
  module: "",
  otp: "",
  firstName: "Test",
  lastName: "Test",
  email: "Test",
  password: "Test",
  confirmPassword: "Test",
  phone: "Test",
  // firstName: "",
  // lastName: "",
  // email: "",
  // password: "",
  // confirmPassword: "",
  // phone: "",
};

export const STEPS_CONFIG: Record<
  Step,
  {
    order: number;
    component: any;
    title: string;
  }
> = {
  [Step.Module]: {
    order: 1,
    component: <UserTypeStep />,
    title: "Choose Module",
  },
  [Step.Details]: {
    order: 2,
    component: <DetailsStep />,
    title: "Register",
  },
  [Step.VerifyOtp]: {
    order: 3,
    component: <VerifyOtpStep />,
    title: "OTP",
  },
};

export const STEPS_LIST = Object.entries(STEPS_CONFIG)
  .map(([id, config]) => ({ id, ...config }))
  .sort((a, b) => a.order - b.order);
