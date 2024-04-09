import * as yup from "yup";

import { useForm } from "src/components/input/Form";

import { FormValues } from "./LoginForm.types";

export const useLoginForm = useForm<FormValues>;

export const VALIDATION_SCHEMA = yup.object().shape({});

export const INITIAL_VALUES: FormValues = {
  phone: "",
  password: "",
  otp: "",
};
