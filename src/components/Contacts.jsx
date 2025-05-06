import { useContext } from "react";
import { UserContext } from "../App";
import Form from "./Form";
import styles from "../components/contacts.module.css";
import ConfirmModal from "./ConfirmModal";

function Contacts() {
  const { dispatch } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <button
        className={styles.cross}
        onClick={() => dispatch({ type: "Cross" })}
      >
        X
      </button>
      <div className={styles.addContact}>
        <Form />
        <ConfirmModal />
      </div>
    </div>
  );
}

export default Contacts;
