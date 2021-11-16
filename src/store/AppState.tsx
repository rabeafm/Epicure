import { Chef, Dish, Resturant, User } from '../types/Data';

export class AppState {
  public token: string | null = '';
  public user: User = {} as User;
  public chefArray: Chef[] = [];
  public dishArray: Dish[] = [];
  public resturantArray: Resturant[] = [];

  public chef: Chef = {
    _id: '',
    name: '',
    image: '',
    descr: '',
    rests: [{} as Resturant],
  };
  public dish: Dish = {
    _id: '',
    name: '',
    price: 0,
    ingredients: [''],
    tags: [''],
    resturant: {} as Resturant,
  };
  public resturant: any = {
    _id: '',
    name: '',
    image: '',
    chef: {} as Chef,
    dishes: [{} as Dish],
  };
}
