import UITable from '../../ui/UITable';
import DishCard from '../dishes/DishCard';

const data = [
  {
    _id: 1,
    name: 'Pad Ki Mao',
    restaurant: 'Tiger Lilly',
    ingredients:
      'Shrimps, Glass Noodles, Kemiri Nuts, Shallots,Lemon Grass, Magic Chili Brown Coconut',
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

const DishesTable = () => {
  return (
    <UITable>
      <h6>SIGNATURE DISH OF:</h6>
      <h5>Tiger Lilly</h5>
      <div className="inner">
        {data
          .map((dat: any) => <DishCard {...dat} key={dat._id} />)
          .slice(0, 3)}
      </div>
    </UITable>
  );
};

export default DishesTable;
