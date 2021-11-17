import UIUnit from '../ui/UIUnit';
import RestaurantNavbar from '../components/restaurant/RestaurantNavbar';
import RestaurantDishes from '../components/restaurant/RestaurantDishes';

const restaurant = {
  _id: '1',
  name: 'Claro',
  chef: 'Ran Shmueli',
  opens: '10:00',
  closes: '22:00',
  dateOpened: new Date('March 12, 2020, 23:10:20'),
  thumb: 'assets/restaurants/claro.png',
  image: 'assets/restaurants/claroBig.png',
  dishes: [''],
};
const dishes = [
  {
    _id: 1,
    name: 'Pad Ki Mao',
    restaurant: 'Tiger Lilly',
    ingredients:
      'Shrimps, Glass Noodles,  Shallots,Lemon Grass, Magic Chili Brown Coconut',
    image: 'assets/dishes/pad-ki-mao.png',
    icon: 'assets/spicy-icon.png',
    price: 88,
    type: 'dinner',
    chef: 'Yanir Green',
  },
  {
    _id: 2,
    name: 'Garbanzo Frito',
    restaurant: 'Kab Kem',
    ingredients:
      'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
    image: 'assets/dishes/garbanzo-frito.png',
    icon: 'assets/vegan-icon.png',
    price: 98,
    type: 'breakfast',
  },
  {
    _id: 9,
    name: 'Garbanzo Frito',
    restaurant: 'Kab Kem',
    ingredients:
      'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
    image: 'assets/dishes/garbanzo-frito.png',
    icon: 'assets/vegan-icon.png',
    price: 98,
    type: 'breakfast',
  },
  {
    _id: 3,
    name: 'Smoked Pizza',
    restaurant: 'Popina',
    ingredients: "Basil dough, cashew 'butter', demi-glace, bison & radish",
    image: 'assets/dishes/smoked-pizza.png',
    icon: 'assets/vegiterian-icon.png',
    price: 65,
    type: 'dinner',
  },
  {
    _id: 4,
    name: 'Masala Dosa',
    restaurant: 'Kab Kem',
    ingredients:
      'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
    image: 'assets/dishes/masala-dosa.png',
    icon: 'assets/vegan-icon.png',
    price: 98,
    type: 'lunch',
  },
  {
    _id: 5,
    name: 'Seafood Paella',
    restaurant: 'Kab Kem',
    ingredients:
      'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
    image: 'assets/dishes/seafood-paella.png',
    icon: 'assets/vegan-icon.png',
    price: 98,
    type: 'lunch',
  },
  {
    _id: 6,
    name: 'Potato Chips',
    restaurant: 'Kab Kem',
    ingredients:
      'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
    image: 'assets/dishes/potato-chips.png',
    icon: 'assets/vegan-icon.png',
    price: 98,
    type: 'dinner',
  },
  {
    _id: 7,
    name: 'Red Farm',
    restaurant: 'Popina',
    ingredients: 'Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori',
    image: 'assets/dishes/RedFarm.png',
    icon: 'assets/vegiterian-icon.png',
    price: 98,
    type: 'dinner',
  },
  {
    _id: 8,
    name: 'Ta Ma-La-Ko',
    restaurant: 'Popina',
    ingredients:
      'Green Papaya, Mango, Chukka, Chili, Mint, Kaffir, Lime, Cashew, Akaya, Cham',
    image: 'assets/dishes/ta-Ma-La-Ko.png',
    icon: 'assets/spicy-icon.png',
    price: 98,
    type: 'lunch',
  },
];

const Restaurant = (props: any) => {
  const time = new Date();
  const timeString =
    (time.getHours() < 10 ? '0' : '') +
    time.getHours() +
    ':' +
    time.getMinutes();
  return (
    <UIUnit>
      <img
        src={process.env.REACT_APP_BASE_URL + restaurant.image}
        alt={restaurant.name}
        style={{
          objectFit: 'cover',
          aspectRatio: '375 / 254',
          width: '100%',
        }}
      />
      <div className="resturant-display">
        <h1>{restaurant.name}</h1>
        <h2>{restaurant.chef}</h2>

        <p>
          <img
            className="icon"
            src={process.env.REACT_APP_BASE_URL + 'assets/clock-icon.png'}
            alt={'Open now'}
          />
          &nbsp;
          {timeString >= restaurant.opens && timeString <= restaurant.closes
            ? ' Open now'
            : ' Closed'}
        </p>
      </div>
      <RestaurantNavbar />
      <RestaurantDishes dishes={dishes} />
    </UIUnit>
  );
};

export default Restaurant;
