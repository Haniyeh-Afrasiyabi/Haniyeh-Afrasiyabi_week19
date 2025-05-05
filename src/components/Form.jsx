import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../schema/form";
import styles from "./form.module.css";
import getInputs from "../constants/input";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const inputs = getInputs(register);

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>New Contact</h2>
      {inputs.map((input, index) => (
        <div key={index}>
          <input
            type={input.type}
            className={styles.input}
            placeholder={input.placeholder}
            {...input.register}
          />
          {errors[input.name] && <span>{errors[input.name]?.message}</span>}
        </div>
      ))}

      <button type="submit">Add Contact</button>
    </form>
  );
}

export default Form;
