"use client";
import React, { useCallback } from "react";

import Form from "src/components/input/Form";

import { INITIAL_VALUES, VALIDATION_SCHEMA } from "./RegisterForm.config";
import { FormValues, IRegisterFormProps } from "./RegisterForm.types";
import { VerifyUserFormProvider } from "./RegisterForm.context";

const RegisterForm: React.FC<IRegisterFormProps> = (props) => {
  const { initialValues = INITIAL_VALUES } = props;

  const handleSubmit = useCallback(async (values: FormValues) => {
    try {
      const apiUrl = `${process.env.REACT_APP_API_URL}/api/client/create`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();
      console.log("Form submitted successfully:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
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
