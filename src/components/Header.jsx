import { useContext } from "react";
import { UserContext } from "../App";
import styles from "./header.module.css";

function Header() {
  const { dispatch } = useContext(UserContext);

  const showHandler = () => {
    dispatch({ type: "AddContact" });
  };

  return (
    <div className={styles.container}>
      <h1>Contacts</h1>
      <div className={styles.manageContacts}>
        <div className={styles.buttons}>
          <button className={styles.addButton} onClick={showHandler}>
            +
          </button>
          <button className={styles.bulkDeleteButton} onClick={()=> dispatch({type:""})}>
            Manage Bulk Delete
          </button>
        </div>
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
}

export default Header;
