import React from "react";

import Button from "src/components/input/Button";
import OtpInput from "src/components/input/OtpInput";

import { useRegisterForm } from "../../RegisterForm.context";

const VerifyOtpStep: React.FC = () => {
  const { values, setFieldValue } = useRegisterForm();

  return (
    <>
      <p>Enter 6 Digit OTP</p>

      <div>
        Code sent on +91 9041010719{" "}
        <Button variant="ghost">Change Number</Button>
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
  );
};

export default VerifyOtpStep;
