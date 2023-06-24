import { useContext } from "react";
import { habitContext } from "../../contexts/habitContext";
import styles from "./WeeklyHabitCard.module.css";

function WeeklyHabitCard({ habit }) {
  const { id, name, dates } = habit;

  const { updateHabit } = useContext(habitContext);

  const statusButtonClickHandler = (clickedDate, clickedStatus) => {
    updateHabit(id, clickedDate, clickedStatus);
  };

  return (
    <div className={styles.weeklyHabitCard}>
      <h3 className={styles.habitName}>{name}</h3>
      <div className={styles.datesRow}>
        {dates.map((date) => (
          <div key={date.date} className={styles.dateColumn}>
            <p className={styles.date}>{date.date}</p>
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
        ))}
      </div>
    </div>
  );
}

export default WeeklyHabitCard;
