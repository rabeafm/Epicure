import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import WelcomeContainer from '../components/homepage/WelcomeContainer';
import ButtonsContainer from '../components/homepage/ButtonsContainer';
import RestaurantsTable from '../components/homepage/RestaurantsTable';
import RestaurantsCarossel from '../components/homepage/RestaurantsCarossel';
import DishesTable from '../components/homepage/DishesTable';
import DishesCarossel from '../components/homepage/DishesCarossel';
import IconsMeaningContainer from '../components/homepage/IconsMeaningContainer';
import AboutUsContainer from '../components/homepage/AboutUsContainer';
import ChefsContainer from '../components/homepage/ChefContainer';

const Homepage = () => {
  return (
    <HomeContainer>
      <WelcomeContainer />
      <ButtonsContainer />
      {/* Display Resturants Mobile/Desktop */}
      <MediaQuery maxWidth={768} children={<RestaurantsCarossel />} />
      <MediaQuery minWidth={769} children={<RestaurantsTable />} />
      {/* Display Dishes Mobile/Desktop */}
      <MediaQuery maxWidth={768} children={<DishesCarossel />} />
      <MediaQuery minWidth={769} children={<DishesTable />} />
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
`;

export default Homepage;
