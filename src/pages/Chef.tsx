import { useEffect } from 'react';
import { AppState } from '../store/AppState';
import { ActionType } from '../store/Action';
import { useDispatch, useSelector } from 'react-redux';

const Chef = (props: any) => {
  const chef = useSelector((state: AppState) => state.chef);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ActionType.GET_CHEF, payload: props.id });
    // eslint-disable-next-line
  }, []);

  return <div>Chef {chef._id + ' ' + chef.name} Page</div>;
};

export default Chef;
