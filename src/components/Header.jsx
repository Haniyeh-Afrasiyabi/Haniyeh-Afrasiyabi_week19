import styles from "./header.module.css"

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contacts</h1>
      <div className={styles.manageContacts} >
        <div className={styles.buttons}>
            <button className={styles.addButton}>+</button>
            <button className={styles.bulkDeleteButton}>Manage Bulk Delete</button>

        </div>
        <input type="text" placeholder="search"/>
      </div>
    </div>
  );
}

export default Header;
