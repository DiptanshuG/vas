import React from "react";

import TextField from "src/components/input/TextField";
import PhoneInput from "src/components/input/PhoneInput";

import { useRegisterForm } from "../../RegisterForm.context";

const UserTypeStep: React.FC = () => {
  const { values, setFieldValue } = useRegisterForm();

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-4">
        <label>First Name</label>
        <TextField
          className="w-full mt-2"
          placeholder="Enter full Name"
          value={values.firstName}
          onChange={(value) => {
            setFieldValue("firstName", value);
          }}
        />
      </div>

      <div className="col-span-4">
        <label>Last Name</label>
        <TextField
          className="w-full mt-2"
          placeholder="Enter full Name"
          value={values.lastName}
          onChange={(value) => {
            setFieldValue("lastName", value);
          }}
        />
      </div>

      <div className="col-span-4">
        <label>Email ID</label>
        <TextField
          className="w-full mt-2"
          placeholder="example@gmail.com"
          value={values.email}
          onChange={(value) => {
            setFieldValue("email", value);
          }}
        />
      </div>

      <div className="col-span-4 mt-2">
        <label>Mobile Number</label>
        <PhoneInput
          className="w-full mt-2"
          placeholder="123 565 253"
          value={values.phone}
          onChange={(value) => {
            setFieldValue("phone", value);
          }}
        />
      </div>

      <div className="col-span-4 mt-2">
        <label>Password</label>
        <TextField
          className="w-full mt-2"
          placeholder="Password"
          value={values.password}
          onChange={(value) => {
            setFieldValue("password", value);
          }}
        />
      </div>

      <div className="col-span-4 mt-2">
        <label>Confirm Password</label>
        <TextField
          className="w-full mt-2"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={(value) => {
            setFieldValue("confirmPassword", value);
          }}
        />
      </div>
    </div>
  );
};

export default UserTypeStep;
