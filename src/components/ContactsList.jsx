import { useContext } from "react";
import { UserContext } from "../App";
import ContactItem from "./ContactItem";
import styles from "./contactsList.module.css";
import DeleteContacts from "./DeleteContacts";
import DeleteContactSingleModal from "./DeleteContactSingleModal";

function ContactsList() {
  const { state, dispatch, filteredContacts } = useContext(UserContext);

  console.log(state.contacts);
  return (
    <div className={styles.container}>
      <h2>Contacts List</h2>
      <button
        className={styles.deleteButton}
        onClick={() => {
          if (state.selectedContacts.length > 0) {
            dispatch({ type: "ShowDeleteModal" });
          }
        }}
      >
        🗑 Delete selected contacts
      </button>
      <DeleteContacts />
      <DeleteContactSingleModal />

      {state.contacts.length ? (
        <ul className={styles.contacts}>
          {filteredContacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contact Yet!</p>
      )}
    </div>
  );
}

export default ContactsList;
