import { useContext } from "react";
import { UserContext } from "../App";
import styles from "./deleteContacts.module.css";

function DeleteContacts() {
  const { state, dispatch } = useContext(UserContext);
  return (
    <>
      {state.showDeleteModal && (
        <div className={styles.overlay}>
          <div  className={styles.modal}>
            <p>آیا از حذف این مخاطبین اطمینان دارید؟</p>
            <div className={styles.buttons}>
              <button className={styles.yes}
                onClick={() => {
                  dispatch({ type: "BulkDeleteContacts" });
                  dispatch({ type: "HideDeleteModal" });
                }}
              >
                بله، حذف کن
              </button>
              <button className={styles.no} onClick={() => dispatch({ type: "HideDeleteModal" })}>
                لغو
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteContacts;
