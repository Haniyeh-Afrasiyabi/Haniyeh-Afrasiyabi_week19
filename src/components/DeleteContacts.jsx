import { useContext } from "react";
import { UserContext } from "../App";
import styles from "./confirmModal.module.css";

function DeleteContacts() {
  const { state, dispatch } = useContext(UserContext);
  return (
    <>
      {state.showDeleteModal && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <p>Are you sure you want to delete these contacts?</p>
            <div className={styles.buttons}>
              <button
                className={styles.yes}
                onClick={() => {
                  dispatch({ type: "BulkDeleteContacts" });
                  dispatch({ type: "HideDeleteModal" });
                }}
              >
                Yes, delete
              </button>
              <button
                className={styles.no}
                onClick={() => dispatch({ type: "HideDeleteModal" })}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteContacts;
