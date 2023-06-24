import React, { useState, useContext, useRef, useEffect } from "react";
import { habitContext } from "../../contexts/habitContext";
import styles from "./AddHabitButton.module.css";

function AddHabitButton({ onAddHabit }) {
  const [isFormVisible, setFormVisible] = useState(false);
  const [habitName, setHabitName] = useState("");
  const inputRef = useRef(null); // Create a ref for the input element

  const { addHabit } = useContext(habitContext);

  const handleButtonClick = () => {
    setFormVisible(!isFormVisible);
    setHabitName("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const currentDate = new Date();
    addHabit(habitName, currentDate);

    setHabitName("");
    setFormVisible(false);
  };

  useEffect(() => {
    if (isFormVisible) {
      inputRef.current.focus(); // Focus on the input element when the form shows up
    }
  }, [isFormVisible]);

  return (
    <div className={styles.addHabitButton}>
      {!isFormVisible && (
        <button className={styles.addButton} onClick={handleButtonClick}>
          Add Habit
        </button>
      )}

      {isFormVisible && (
        <form className={styles.habitForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={habitName}
            onChange={(event) => setHabitName(event.target.value)}
            placeholder="Habit Name"
            required
            ref={inputRef} // Assign the ref to the input element
          />
          <button type="submit">Add</button>
          {/* close the form button */}
          <button onClick={handleButtonClick} className={styles.cancel__btn}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}

export default AddHabitButton;
