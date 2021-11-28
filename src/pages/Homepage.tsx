import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import WelcomeContainer from '../layout/homepage/WelcomeContainer';
import ButtonsContainer from '../layout/homepage/ButtonsContainer';
import RestaurantsTable from '../components/restaurants/RestaurantsTable';
import RestaurantsCarossel from '../components/restaurants/RestaurantsCarossel';
import DishesTable from '../components/dishes/DishesTable';
import DishesCarossel from '../components/dishes/DishesCarossel';
import IconsMeaningContainer from '../layout/homepage/IconsMeaningContainer';
import AboutUsContainer from '../layout/homepage/AboutUsContainer';
import ChefsContainer from '../components/chef/ChefContainer';
import { useSelector } from 'react-redux';
import { AppState } from '../store/AppState';
import { useEffect } from 'react';

const Homepage = () => {
  const dishes = useSelector((state: AppState) => state.dishesArray);
  const restaurants = useSelector(
    (state: AppState) => state.restaurantsArrays.All
  );
  useEffect(() => {
    //console.log(restaurants.length);
  }, [restaurants]);

  return (
    <HomeContainer>
      <WelcomeContainer />
      <MediaQuery maxWidth={768} children={<ButtonsContainer />} />
      {/* Display Resturants Mobile/Desktop */}
      {restaurants.length > 0 && (
        <>
          <MediaQuery maxWidth={768} children={<RestaurantsCarossel />} />
          <MediaQuery minWidth={769} children={<RestaurantsTable />} />
        </>
      )}

      {/* Display Dishes Mobile/Desktop */}
      {dishes.length > 0 && (
        <>
          <MediaQuery maxWidth={768} children={<DishesCarossel />} />
          <MediaQuery minWidth={769} children={<DishesTable />} />
        </>
      )}
      <IconsMeaningContainer />
      <ChefsContainer />
      <AboutUsContainer />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .last-section {
    margin-bottom: 0;
  }
`;

export default Homepage;
