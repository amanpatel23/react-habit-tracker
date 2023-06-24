import { useContext, useState } from "react";
import { habitContext } from "../../contexts/habitContext";
import styles from "./HabitCard.module.css";

function HabitCard({ id, name, date }) {
  const { updateHabit, deleteHabit } = useContext(habitContext);

  const [isHovered, setIsHovered] = useState(false);

  const statusButtonClickHandler = (clickedDate, clickedStatus) => {
    updateHabit(id, clickedDate, clickedStatus);
  };

  const deleteButtonClickHandler = () => {
    deleteHabit(id);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`${styles.habitCard} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <button
          onClick={deleteButtonClickHandler}
          className={styles.deleteButton}
          title="Delete Habit"
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      )}
      <h3 className={styles.habitName}>{name}</h3>
      <p className={styles.dateCreated}>{date.date}</p>
      <div className={styles.statusButtons}>
        <button
          onClick={() => statusButtonClickHandler(date, 1)}
          className={`${styles.statusButton} ${
            date.status === 1 ? styles.done : ""
          }`}
        >
          ✓
        </button>
        <button
          onClick={() => statusButtonClickHandler(date, 2)}
          className={`${styles.statusButton} ${
            date.status === 2 ? styles.notDone : ""
          }`}
        >
          ✕
        </button>
        <button
          onClick={() => statusButtonClickHandler(date, 0)}
          className={`${styles.statusButton} ${
            date.status === 0 ? styles.noActionTaken : ""
          }`}
        >
          –
        </button>
      </div>
    </div>
  );
}

export default HabitCard;
