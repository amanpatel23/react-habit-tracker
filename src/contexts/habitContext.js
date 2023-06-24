import { createContext, useEffect, useState } from "react";

const habitContext = createContext();

function HabitProvider({ children }) {
  const [habits, setHabits] = useState([]);
  const [habitsUpdated, setHabitsUpdated] = useState(false);

  const getPreviousDays = (date) => {
    // Get the current date
    let currentDate = new Date(date);

    // Array to store the dates
    let dates = [];

    // Loop through the previous six days
    for (let i = 0; i < 7; i++) {
      // Get the day, month, and year
      let day = currentDate.getDate();
      let month = currentDate.getMonth() + 1; // Months are zero-based
      let year = currentDate.getFullYear();

      // Format the date as dd-mm-yyyy
      let formattedDate =
        ("0" + day).slice(-2) + "-" + ("0" + month).slice(-2) + "-" + year;

      // Add the formatted date to the array
      dates.push({
        date: formattedDate,
        status: 0,
      });

      // Decrement the date by one day
      currentDate.setDate(currentDate.getDate() - 1);
    }

    return dates.reverse();
  };

  const addHabit = (name, date) => {
    const id = Date.now() + "-" + parseInt(Math.random() * 1e9);

    const currHabit = {
      id,
      name,
      dates: getPreviousDays(date),
    };

    setHabits((prevHabits) => [...prevHabits, currHabit]);
    setHabitsUpdated(true);
  };

  const updateHabit = (id, clickedDate, clickedStatus) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) => {
        if (habit.id === id) {
          const updateDates = habit.dates.map((dateObj) => {
            if (dateObj.date === clickedDate.date) {
              return {
                date: dateObj.date,
                status: clickedStatus,
              };
            } else {
              return dateObj;
            }
          });

          return {
            ...habit,
            dates: updateDates,
          };
        } else {
          return habit;
        }
      })
    );

    setHabitsUpdated(true);
  };

  const deleteHabit = (id) => {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
    setHabitsUpdated(true);
  };

  useEffect(() => {
    if (habitsUpdated) {
      localStorage.setItem("ap-habits", JSON.stringify(habits));
      setHabitsUpdated(false);
    }
  }, [habits]);

  useEffect(() => {
    const savedHabits = localStorage.getItem("ap-habits");
    if (savedHabits) {
      setHabits(JSON.parse(savedHabits));
    } else {
      localStorage.setItem("ap-habits", JSON.stringify(habits));
    }
  }, []);

  return (
    <habitContext.Provider
      value={{ habits, addHabit, updateHabit, deleteHabit }}
    >
      {children}
    </habitContext.Provider>
  );
}

export default HabitProvider;
export { habitContext };
