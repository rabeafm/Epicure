import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RestaurantCard from '../restaurant/RestaurantCard';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/AppState';

const ResturantCarossel = () => {
  const restaurants = useSelector(
    (state: AppState) => state.restaurantsArrays.All[0]
  );

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
      <h6>THE POPULAR RESTAURANTS IN EPICURE :</h6>
      <Slider {...settings}>
        {restaurants.data.slice(0, 6).map((restaurant: any) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </Slider>
    </CarosselDev>
  );
};

export default ResturantCarossel;

const CarosselDev = styled.div`
  max-width: 98vw;
  margin: 0 0 10px;
  padding: 40px 0 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & button {
    display: none !important;
  }
  .slick-slide > div {
    margin: 5px;
  }
`;
