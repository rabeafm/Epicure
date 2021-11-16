interface Chef {
  _id: string;
  name: string;
  image: string;
  descr: string;
  rests: [Resturant];
}

interface ChefGrid {
  setContent: Function;
  setId: Function;
  data: [Chef];
}

interface Dish {
  _id: string;
  name: string;
  price: number;
  ingredients: [string];
  tags: [string];
  resturant: Resturant;
}

interface DishGrid {
  setContent: Function;
  setId: Function;
  data: [Dish];
}

interface Resturant {
  _id: string;
  name: string;
  image: string;
  chef: Chef | string;
  dishes: [Dish | string];
  opens: string;
  closes: string;
  dateOpened: Date;
  thumb: string;
}

interface ResturantGrid {
  setContent: Function;
  setId: Function;
  data: [Resturant];
}

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  // __v: number;
}

export type { Chef, ChefGrid, Dish, DishGrid, Resturant, ResturantGrid, User };
