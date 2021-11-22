export enum ActionType {
  GET_CHEF,
  GET_CHEFS,
  GET_DISH,
  GET_DISHES,
  GET_RESTAURANT,
  GET_RESTAURANTS,
}

export interface Action {
  type: ActionType;
  payload: any;
}
