export enum ActionType {
  SET_CHEF,
  SET_CHEFS,
  SET_DISH,
  SET_DISHES,
  SET_RESTAURANT,
  SET_RESTAURANTS,
}

export interface Action {
  type: ActionType;
  payload: any;
}
