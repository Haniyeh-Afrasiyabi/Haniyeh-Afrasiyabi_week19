import { useContext } from "react";
import { UserContext } from "../App";
import styles from "./header.module.css";

function Header() {
  const { dispatch, searchHandler, searchTerm } = useContext(UserContext);

  const showHandler = () => {
    dispatch({ type: "AddContact" });
  };

  return (
    <div className={styles.container}>
      <h1>Contacts</h1>
      <div className={styles.manageContacts}>
        <button className={styles.addButton} onClick={showHandler}>
          +
        </button>

        <input
          type="text"
          onChange={(e) => searchHandler(e.target.value)}
          value={searchTerm}
          placeholder="Search..."
          className={styles.searchInput}
        />
      </div>
    </div>
  );
}

export default Header;
