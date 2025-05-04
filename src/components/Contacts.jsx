import { useContext } from "react";
import { UserContext } from "../App";
import styles from "../components/contacts.module.css";

function Contacts() {
  const { dispatch } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <button
        className={styles.cross}
        onClick={() => dispatch({ type: "cross" })}
      >
        X
      </button>
      <div className={styles.addContact}>
        

      </div>
    </div>
  );
}

export default Contacts;
