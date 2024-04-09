export type FormValues = {
  phone: string;
  password: string;
  otp: string;
};

export interface ILoginFormProps {
  initialValues?: FormValues;
}
