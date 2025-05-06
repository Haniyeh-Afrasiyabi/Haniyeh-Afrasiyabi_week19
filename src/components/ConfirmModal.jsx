// ConfirmModal.js
import { useContext } from "react";
import { UserContext } from "../App";
import styles from "./confirmModal.module.css";

function ConfirmModal() {
  const { state, dispatch } = useContext(UserContext);
  const { mode, data } = state.confirmModal;

  if (!state.confirmModal.show) return null;

  const confirmHandler = () => {
    if (mode === "add") {
      dispatch({ type: "NewContact", payload: data });
    } else if (mode === "edit") {
      dispatch({ type: "updateContact", payload: data });
    }
    dispatch({ type: "HideConfirmModal" });
    dispatch({ type: "Cross" });
  };

  const cancelHandler = () => {
    dispatch({ type: "HideConfirmModal" });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>
          Are you sure you want to {mode === "add" ? "add" : "edit"} the
          contact?
        </p>
        <div className={styles.buttons}>
          <button className={styles.yes} onClick={confirmHandler}>
            Yes
          </button>
          <button className={styles.no} onClick={cancelHandler}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
export default ConfirmModal;
