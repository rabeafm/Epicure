import { Action, ActionType } from './Action';
import { AppState } from './AppState';

const reducer = (
  state: AppState = new AppState(),
  action: Action
): AppState => {
  const newState = { ...state };
  switch (action.type) {
    case ActionType.SET_CHEF:
      newState.chef = action.payload;
      break;
    case ActionType.SET_CHEFS:
      newState.chefsArray = action.payload;
      break;
    case ActionType.SET_DISHES:
      newState.dishesArray = action.payload;
      break;
    case ActionType.SET_RESTAURANT:
      newState.restaurant = action.payload;
      break;
    case ActionType.SET_RESTAURANTS:
      newState.restaurantsArray = action.payload;
      break;
  }
  return newState;
};

export default reducer;
