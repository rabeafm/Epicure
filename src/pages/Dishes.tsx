import { useSelector } from 'react-redux';
import { AppState } from '../store/AppState';

const Dishes = () => {
  const dishes = useSelector((state: AppState) => state.dishesArray);
  return <div>{dishes.length} Dishes Page</div>;
};

export default Dishes;
