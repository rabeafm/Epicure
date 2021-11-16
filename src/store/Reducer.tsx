import { Action, ActionType } from './Action';
import { AppState } from './AppState';
import ServerServices from './serverServices';

const reducer = (
  state: AppState = new AppState(),
  action: Action
): AppState => {
  const newState = { ...state };
  const serverServices = new ServerServices();
  switch (
    action.type
    // case ActionType.GET_CHEFS: break;
    // case ActionType.GET_CHEF: break;
    // case ActionType.GET_DISHES: break;
    // case ActionType.GET_DISH: break;
    // case ActionType.GET_RESTURANTS: break;
    // case ActionType.GET_RESTURANT: break;
  ) {
  }
  return newState;
};

export default reducer;
