import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RestaurantCard from '../restaurant/RestaurantCard';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/AppState';

const ChefRestaurantsCarossel = () => {
  const chef = useSelector((state: AppState) => state.chef);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
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
    <CarosselDev>
      <p>{chef.name}’s restaurants :</p>
      <Slider {...settings}>
        {chef.rests.slice(0, 6).map((restaurant: any) => {
          restaurant.chef = '';
          return <RestaurantCard {...restaurant} key={restaurant._id} />;
        })}
      </Slider>
    </CarosselDev>
  );
};

export default ChefRestaurantsCarossel;

const CarosselDev = styled.div`
  max-width: 98vw;
  padding: 0 10px 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  button {
    display: none !important;
  }
  p {
    text-align: left;
    padding: 0;
  }
  .rest-details {
    background-color: #f9f4ea;
  }
  .slick-slide > div {
    margin: 5px;
  }
`;
