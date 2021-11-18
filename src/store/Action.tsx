export enum ActionType {
  GET_CHEFS,
  GET_CHEF,
  GET_DISHES,
  GET_DISH,
  GET_RESTURANTS,
  GET_RESTURANT,
}

export interface Action {
  type: ActionType;
  payload: any;
}
