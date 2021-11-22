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

const Homepage = () => {
  return (
    <HomeContainer>
      <WelcomeContainer />
      <MediaQuery maxWidth={768} children={<ButtonsContainer />} />
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

  @media only screen and (min-width: 769px) {
    .homepage-card-view {
      width: 360px;
      max-width: 26vw;
      align-items: stretch;
      .dish-details {
        width: 100%;
        align-self: center;
      }
    }
  }
`;

export default Homepage;
