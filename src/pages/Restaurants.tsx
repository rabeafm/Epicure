import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { AppState } from '../store/AppState';
import RestaurantCard from '../components/restaurant/RestaurantCard';
import RestaurantsNavbar from '../components/restaurants/RestaurantsNavbar';

const Resturants = () => {
  const restaurants = useSelector((state: AppState) => state.restaurantsArray);
  const [filtered, setFiltered] = useState(restaurants);

  useEffect(() => {
    setFiltered(restaurants);
  }, [restaurants]);

  const filterRestaurants = (filter: string) => {
    if (filter === 'new') {
      setFiltered(
        restaurants.filter(
          (restaurant: any) =>
            new Date(restaurant.dateOpened) > new Date('Jan 01, 2020, 00:00:00')
        )
      );
    } else {
      if (filter === 'opennow') {
        const currentdate = new Date();
        const currenttime =
          (currentdate.getHours() < 10
            ? '0' + currentdate.getHours()
            : currentdate.getHours()) +
          ':' +
          currentdate.getMinutes();
        setFiltered(
          restaurants.filter(
            (restaurant: any) =>
              restaurant.opens < currenttime && currenttime < restaurant.closes
          )
        );
      } else {
        setFiltered(restaurants);
      }
    }
  };

  return (
    <RestaurantsContainer>
      <h3 className="restaurants-title">RESTAURANTS</h3>
      <RestaurantsNavbar filterRestaurants={filterRestaurants} />
      <RestaurantsCardContainer>
        {filtered.map((restaurant: any) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </RestaurantsCardContainer>
    </RestaurantsContainer>
  );
};

export default Resturants;

const RestaurantsContainer = styled.div`
  margin: 10px auto;
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 769px) {
    .restaurants-title {
      display: none;
    }
    margin-top: 30px;
  }
`;

const RestaurantsCardContainer = styled.div`
  margin-left: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  gap: 5px;
  justify-content: start;
  @media only screen and (min-width: 769px) {
    margin-top: 30px;
    justify-content: start !important;
    gap: 40px;
  }
`;
