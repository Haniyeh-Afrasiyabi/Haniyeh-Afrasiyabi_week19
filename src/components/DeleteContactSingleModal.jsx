import { useContext } from "react";
import { UserContext } from "../App";
import styles from "./confirmModal.module.css";

function DeleteContactSingleModal() {
  const { state, dispatch } = useContext(UserContext);

  if (!state.modalDeleteSingle.show) return null;

  const deleteHandler = () => {
    dispatch({ type: "DeleteContact", payload: state.modalDeleteSingle.id });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>Are you sure you want to delete this contact?</p>
        <div className={styles.buttons}>
          <button className={styles.yes} onClick={deleteHandler}>
            Yes
          </button>
          <button
            className={styles.no}
            onClick={() => dispatch({ type: "CloseDeleteSingleModal" })}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteContactSingleModal;
