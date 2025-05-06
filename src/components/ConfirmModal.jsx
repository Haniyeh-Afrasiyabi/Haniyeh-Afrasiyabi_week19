// ConfirmModal.js
import { useContext } from "react";
import { UserContext } from "../App";
import styles from "./confirmModal.module.css"

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
    dispatch({ type: "Cross" }); // بستن مودال فرم
  };

  const cancelHandler = () => {
    dispatch({ type: "HideConfirmModal" });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>
          آیا مطمئن هستید که می‌خواهید مخاطب را {mode === "add" ? "اضافه" : "ویرایش"} کنید؟
        </p>
        <div className={styles.buttons}>
          <button className={styles.yes} onClick={confirmHandler}>بله</button>
          <button className={styles.no} onClick={cancelHandler}>خیر</button>
        </div>
      </div>
    </div>
  );
}
 export default ConfirmModal;