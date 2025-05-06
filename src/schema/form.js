import { object, string } from "yup";

export let userSchema = object({
  name: string().required().min(3),
  lastName: string().required().min(3),
  email: string().email().required(),
  phoneNumber: string()
    .required("Phone Number is a required filed")
    .matches(/^09\d{9}$/),
});
