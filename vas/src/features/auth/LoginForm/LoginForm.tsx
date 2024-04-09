"use client";
import React, { useCallback, useEffect, useState } from "react";

import Form from "src/components/input/Form";
import PhoneInput from "src/components/input/PhoneInput";
import OtpInput from "src/components/input/OtpInput";
import PasswordField from "src/components/input/PasswordField";
import Button from "src/components/input/Button";
import RegisterForm from "src/features/auth/RegisterForm";
import Modal, { useModalState } from "src/components/misc/Modal";

import {
  INITIAL_VALUES,
  useLoginForm,
  VALIDATION_SCHEMA,
} from "./LoginForm.config";
import { FormValues, ILoginFormProps } from "./LoginForm.types";
import { StyledForm, StyledPlainButton } from "./LoginForm.styles";

const LoginFormInner: React.FC = () => {
  const { values, setFieldValue, submitForm } = useLoginForm();
  const registerModalState = useModalState();
  const [loginWithOtp, setLoginWithOtp] = useState(false);

  const toggleLoginWithOtp = useCallback(() => {
    setLoginWithOtp((v) => !v);
  }, []);

  useEffect(() => {
    console.log("DEBUG:LOGIN:UPDATE", { values });
  }, [values]);

  return (
    <>
      <Modal title="Register New User" state={registerModalState}>
        <RegisterForm />
      </Modal>

      <StyledForm>
        {loginWithOtp ? (
          <>
            <p>Enter 6 Digit OTP</p>

            <div>
              Code sent on +91 9041010719{" "}
              <Button variant="ghost" onClick={toggleLoginWithOtp}>
                Change Number
              </Button>
            </div>

            <OtpInput
              className="w-full"
              placeholder="OTP"
              value={values.otp}
              onChange={(value) => {
                setFieldValue("otp", value);
              }}
            />

            <div className="mt-4">Resend OTP in 0:50 Second</div>
          </>
        ) : (
          <>
            <h3>Login</h3>

            <hr className="my-4" />

            <label>Phone number</label>
            <PhoneInput
              className="w-full mt-2"
              placeholder="Enter Mobile Number"
              value={values.phone}
              onChange={(value) => {
                setFieldValue("phone", value);
              }}
            />

            <label className="mt-4">Password</label>
            <PasswordField
              className="w-full mt-2"
              placeholder="Enter Password"
              value={values.password}
              onChange={(value) => {
                setFieldValue("password", value);
              }}
            />

            {!loginWithOtp && (
              <div className="flex gap-3 mt-3 justify-between">
                <StyledPlainButton
                  className="px-0"
                  variant="ghost"
                  colorVariant="black"
                >
                  Forget Password?
                </StyledPlainButton>

                <StyledPlainButton
                  className="px-0"
                  variant="ghost"
                  onClick={toggleLoginWithOtp}
                >
                  Login with OTP
                </StyledPlainButton>
              </div>
            )}
          </>
        )}

        <hr className="my-4" />

        <Button className="w-full mt-4" onClick={submitForm}>
          Login
        </Button>

        <div className="mt-4">Or</div>

        <div className="mt-4">Don't have Account?</div>

        <Button
          className="w-full mt-4"
          variant="secondary"
          onClick={registerModalState.open}
        >
          Register Now
        </Button>
      </StyledForm>
    </>
  );
};

const LoginForm: React.FC<ILoginFormProps> = (props) => {
  const { initialValues = INITIAL_VALUES } = props;

  const handleSubmit = useCallback((values: FormValues) => {
    console.log("DEBUG:LOGIN:SUBMIT", { values });
  }, []);

  return (
    <Form<FormValues>
      onSubmit={handleSubmit}
      yupValidationSchema={VALIDATION_SCHEMA}
      initialValues={initialValues}
    >
      <LoginFormInner />
    </Form>
  );
};

export default LoginForm;
