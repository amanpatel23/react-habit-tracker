import { useNavigate } from 'react-router-dom';
import styles from './DailyViewButton.module.css';

const DailyViewButton = () => {

  const navigate = useNavigate();

  // when button clicked navigate to the home page
  const handleClick = () => {
     navigate('/')
  };

  return (
    <button className={styles.dailyViewButton} onClick={handleClick}>
      Daily View
    </button>
  );
};

export default DailyViewButton;
