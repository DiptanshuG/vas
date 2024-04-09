"use client";
import React, { useCallback } from "react";

import Form from "src/components/input/Form";

import { INITIAL_VALUES, VALIDATION_SCHEMA } from "./RegisterForm.config";
import { FormValues, IRegisterFormProps } from "./RegisterForm.types";
import { VerifyUserFormProvider } from "./RegisterForm.context";

const RegisterForm: React.FC<IRegisterFormProps> = (props) => {
  const { initialValues = INITIAL_VALUES } = props;

  const handleSubmit = useCallback((values: FormValues) => {
    console.log("DEBUG", { values });
  }, []);

  return (
    <Form<FormValues>
      onSubmit={handleSubmit}
      yupValidationSchema={VALIDATION_SCHEMA}
      initialValues={initialValues}
    >
      <VerifyUserFormProvider {...props} />
    </Form>
  );
};

export default RegisterForm;
