import { object, string, number } from "yup";

export let userSchema = object({
  name: string().required().min(3),
  lastName: string().required().min(3),
  email: string().email().required(),
  phoneNumber: number()
    .required("Phone Number is a required filed")
    .positive()
    .integer(),
});
