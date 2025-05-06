import { useContext } from "react";
import { UserContext } from "../App";
import ContactItem from "./ContactItem";
import styles from "./contactsList.module.css";

function ContactsList() {
  const { state } = useContext(UserContext);

  console.log(state.contacts);
  return (
    <div className={styles.container}>
      <h2>ContactsList</h2>
      <ul>
        {state.contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}

export default ContactsList;
