import { useContext } from "react";
import { habitContext } from "../../contexts/habitContext";
import AddHabitButton from "../../components/AddHabitButton/AddHabitButton";
import HabitCard from "../../components/HabitCard/HabitCard";
import WeeklyViewButton from "../../components/WeeklyViewButton/WeeklyViewButton";
import styles from "./Home.module.css";

function Home() {
  const { habits } = useContext(habitContext);

  return (
    <>
      <div className={styles.home__outer}>
        <div className={styles.home__inner}>
          <div className={styles.action__buttons}>
            {/* displaying buttons */}
            <WeeklyViewButton />
            <AddHabitButton />
          </div>
          {habits.length === 0 ? (
            <h2>Create Some Habits Man!</h2>
          ) : (
            <div className={styles.habits__section}>
              {/* displaying habit cards in grid view */}
              {habits.map((habit) => (
                <HabitCard
                  key={habit.id}
                  id={habit.id}
                  name={habit.name}
                  date={habit.dates[6]}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
