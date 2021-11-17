import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

const DishesCarossel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 290,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 230,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <CarosselContainer>
      <h6>SIGNATURE DISH OF :</h6>
      <h5>Tiger Lilly</h5>
      <Slider className="slider" {...settings}>
        {data.map((dat: any) => (
          <DishCard className="slide" {...dat} key={dat._id} />
        ))}
      </Slider>
    </CarosselContainer>
  );
};

export default DishesCarossel;

const CarosselContainer = styled.div`
  min-height: 500px;
  max-width: 100vw;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & button {
    display: none !important;
  }
  h5 {
    font-weight: 400;
  }
  .slick-slide > div {
    margin: 5px;
  }
`;
