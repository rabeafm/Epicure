import styled from 'styled-components';
import { useState } from 'react';
import RestaurantCard from '../components/restaurant/RestaurantCard';
import RestaurantsNavbar from '../components/restaurants/RestaurantsNavbar';
import { useSelector } from 'react-redux';
import { AppState } from '../store/AppState';

const Resturants = () => {
  const restaurants = useSelector((state: AppState) => state.restaurantsArray);
  const [filtered, setFiltered] = useState(restaurants);
  const filterRestaurants = (filter: string) => {
    if (filter === 'new') {
      setFiltered(
        restaurants.filter(
          (restaurant) =>
            restaurant.dateOpened > new Date('Jan 01, 2020, 00:00:00')
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
            (restaurant) =>
              restaurant.opens < currenttime && currenttime < restaurant.closes
          )
        );
      } else {
        setFiltered(restaurants);
      }
    }
  };

  return (
    <ResturantsContainer>
      <h3>RESTURANTS</h3>
      <RestaurantsNavbar filterRestaurants={filterRestaurants} />
      <ResturantsCardContainer>
        {filtered.map((restaurant: any) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </ResturantsCardContainer>
    </ResturantsContainer>
  );
};

export default Resturants;

const ResturantsContainer = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResturantsCardContainer = styled.div`
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  justify-content: space-around;
`;
