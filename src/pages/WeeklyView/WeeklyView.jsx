import { useContext } from "react";
import { habitContext } from "../../contexts/habitContext";
import styles from "./WeeklyView.module.css";
import WeeklyHabitCard from "../../components/WeeklyHabitCard/WeeklyHabitCard";
import DailyViewButton from "../../components/DailyViewButton/DailyViewButton";

function WeeklyView() {

  // getting habits array from habitContext
  const { habits } = useContext(habitContext);

  return (
    <>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <DailyViewButton />
          {habits.length === 0 ? (
            <h2>Go Back And Create Some Habits!</h2>
          ) : (
            // displaying weekly habit cards
            habits.map((habit) => (
              <WeeklyHabitCard key={habit.id} habit={habit} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default WeeklyView;
