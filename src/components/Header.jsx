import styles from "./header.module.css"

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contacts</h1>
      <div >
        <div>
            <button>+</button>
            <button>Manage Bulk Delete</button>

        </div>
        <input type="text" placeholder="search"/>
      </div>
    </div>
  );
}

export default Header;
