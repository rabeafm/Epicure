import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DishCard from '../dish/DishCard';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/AppState';

const DishesCarossel = () => {
  const dishes = useSelector((state: AppState) => state.dishesArray);
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
      <Slider className="slider" {...settings}>
        {dishes.slice(0, 6).map((dish: any) => (
          <div key={dish._id} className="dish-caro">
            <h5>{dish.restaurant.name}</h5>
            <DishCard className="slide" {...dish} key={dish._id} />
          </div>
        ))}
      </Slider>
    </CarosselContainer>
  );
};

export default DishesCarossel;

const CarosselContainer = styled.div`
  min-height: 500px;
  max-width: 98vw;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & button {
    display: none !important;
  }
  h5 {
    margin-bottom: 20px;
    font-weight: 400;
  }
  .slick-slide > div {
    margin: 5px;
  }
`;
