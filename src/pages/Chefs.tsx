import { useSelector } from 'react-redux';
import { AppState } from '../store/AppState';

const Chefs = () => {
  const chefs = useSelector((state: AppState) => state.chefsArray);

  return <div>{chefs.length} Chefs Page</div>;
};

export default Chefs;
