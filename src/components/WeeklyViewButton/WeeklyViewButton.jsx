import { useNavigate } from 'react-router-dom';
import styles from './WeeklyViewButton.module.css';

const WeeklyViewButton = () => {

  const navigate = useNavigate();

  // when button clicked go to the weekly-view page
  const handleClick = () => {
     navigate('/weekly-view')
  };

  return (
    <button className={styles.weeklyViewButton} onClick={handleClick}>
      Weekly View
    </button>
  );
};

export default WeeklyViewButton;
