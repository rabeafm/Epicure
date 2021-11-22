import { useEffect } from 'react';
import { AppState } from '../store/AppState';
import { ActionType } from '../store/Action';
import { useSelector, useDispatch } from 'react-redux';

const Chefs = () => {
  const chefs = useSelector((state: AppState) => state.chefsArray);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ActionType.GET_CHEFS });
    // eslint-disable-next-line
  }, []);

  return <div>{chefs.length} Chefs Page</div>;
};

export default Chefs;
