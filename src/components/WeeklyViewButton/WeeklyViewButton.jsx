import { useNavigate } from 'react-router-dom';
import styles from './WeeklyViewButton.module.css';

const WeeklyViewButton = () => {

  const navigate = useNavigate();

  const handleClick = () => {
     // Replace '/weekly-view' with the actual route for the weekly view page
     navigate('/weekly-view')
  };

  return (
    <button className={styles.weeklyViewButton} onClick={handleClick}>
      Weekly View
    </button>
  );
};

export default WeeklyViewButton;
