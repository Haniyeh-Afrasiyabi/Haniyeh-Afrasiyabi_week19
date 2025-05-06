import { useContext } from "react";
import { UserContext } from "../App";
import styles from "./DeleteContactSingleModal.module.css";
// import styles from "./deleteModal.module.css"; // استایل اختیاری

function DeleteContactSingleModal() {
  const { state, dispatch } = useContext(UserContext);

  if (!state.modalDeleteSingle.show) return null;

  const deleteHandler = () => {
    dispatch({ type: "DeleteContact", payload: state.modalDeleteSingle.id });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>آیا مطمئن هستید که می‌خواهید این مخاطب را حذف کنید؟</p>
        <div className={styles.buttons}>
          <button className={styles.yes} onClick={deleteHandler}>
            بله
          </button>
          <button
            className={styles.no}
            onClick={() => dispatch({ type: "CloseDeleteSingleModal" })}
          >
            خیر
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteContactSingleModal;
