import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../schema/form";
import styles from "./form.module.css";
import getInputs from "../constants/input";
import { useContext, useEffect } from "react";
import { UserContext } from "../App";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const { state, dispatch } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const inputs = getInputs(register);

  // const onSubmit = (data) => console.log(data);

  // const onSubmit = (data) => {
  //   if (state.contact?.id) {
  //     dispatch({
  //       type: "updateContact",
  //       payload: { ...data, id: state.contact.id },
  //     });
  //   } else {
  //     dispatch({ type: "NewContact", payload: { ...data, id: uuidv4() } });
  //   }
  //   dispatch({ type: "Cross" });
  // };

  const onSubmit = (data) => {
    if (state.contact?.id) {
      // نمایش مودال تأیید برای ویرایش
      dispatch({
        type: "ShowConfirmModal",
        payload: {
          mode: "edit",
          data: { ...data, id: state.contact.id }
        }
      });
    } else {
      // نمایش مودال تأیید برای اضافه کردن
      dispatch({
        type: "ShowConfirmModal",
        payload: {
          mode: "add",
          data: { ...data, id: uuidv4() }
        }
      });
    }
  };

  useEffect(() => {
    if (state.contact?.id) {
      reset(state.contact); // پر کردن فرم با داده‌ها
    }
  }, [state.contact]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>{state.contact.id ? "Edite Contact" : "New Contact"}</h2>
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

      <button type="submit">
        {state.contact.id ? "Save Changes" : "Add Contact"}
      </button>
    </form>
  );
}

export default Form;
