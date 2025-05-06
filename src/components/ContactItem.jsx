import { useContext } from "react";
import { UserContext } from "../App";
import styles from "./contactItem.module.css";

function ContactItem({ contact }) {
  const { dispatch } = useContext(UserContext);
  return (
    <li className={styles.item} key={contact.id}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          onChange={() =>
            dispatch({ type: "ToggleSelect", payload: contact.id })
          }
        />
      </div>

      <p>
        {contact.name} {contact.lastName}
      </p>
      <p className={styles.email}>
        <span>📫</span> {contact.email}
      </p>
      <p>
        <span>📞</span> {contact.phoneNumber}
      </p>
      <button onClick={() => dispatch({ type: "edite", payload: contact })}>
        ✏️
      </button>
      <button
        onClick={() =>
          dispatch({ type: "ShowDeleteSingleModal", payload: contact.id })
        }
      >
        🗑
      </button>

      {/* {!isBulkDeleting && (
              <>
                <button onClick={() => startEditing(contact)}>✏️</button>
                <button onClick={() => deleteHandler(id)}>🗑</button>
              </>
            )} */}
    </li>
  );
}

export default ContactItem;
