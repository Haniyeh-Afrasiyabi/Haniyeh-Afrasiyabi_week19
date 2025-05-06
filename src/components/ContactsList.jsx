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
      <h2>ContactsList</h2>
      <button className={styles.deleteButton}
        onClick={() => {
          if (state.selectedContacts.length > 0) {
            dispatch({ type: "ShowDeleteModal" });
          }
        }}
      >
        🗑 حذف انتخاب‌شده‌ها
      </button>
      <DeleteContacts />
      <DeleteContactSingleModal />
      
      

      {/* {!state.isBulkDeleting &&
        state.contacts.length >
          0(
            <button
              onClick={deleteSelectedContacts}
              className={styles.deleteAllBtn}
            >
              {selectedContacts.length === 1
                ? "Delete Selected Contact"
                : "Delete Selected Contacts"}
            </button>
          )} */}
      <ul>
        {filteredContacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}

export default ContactsList;
