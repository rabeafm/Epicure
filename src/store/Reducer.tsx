import { Action, ActionType } from './Action';
import { AppState } from './AppState';
import ServerServices from './serverServices';

const reducer = (
  state: AppState = new AppState(),
  action: Action
): AppState => {
  const newState = { ...state };
  const serverServices = new ServerServices();
  switch (action.type) {
    case ActionType.GET_CHEF:
      newState.chef = serverServices.getChef(action.payload);
      break;
    case ActionType.GET_CHEFS:
      newState.chefsArray = serverServices.getChefs();
      break;
    case ActionType.GET_DISH:
      newState.dish = serverServices.getDish(action.payload);
      break;
    case ActionType.GET_DISHES:
      newState.dishesArray = serverServices.getDishes();
      break;
    case ActionType.GET_RESTAURANT:
      newState.restaurant = serverServices.getRestaurant(action.payload);
      break;
    case ActionType.GET_RESTAURANTS:
      newState.restaurantsArray = serverServices.getRestaurants();
      break;
  }
  return state;
};

export default reducer;
