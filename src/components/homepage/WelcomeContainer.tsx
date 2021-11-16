import styled from 'styled-components';
import UISearch from '../../ui/UISearch';

const WelcomeContainer = () => {
  return (
    <WelcomeDiv>
      <SearchDev>
        <h5>Epicure works with the top chef resturants in Tel Aviv</h5>
        <UISearch />
      </SearchDev>
    </WelcomeDiv>
  );
};

const WelcomeDiv = styled.div`
  width: 100%;
  height: 269px;
  background: url('./assets/welcome-mobile.png') center center/ cover;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchDev = styled.div`
  width: 90%;
  height: 46%;
  background-color: white;
  opacity: 0.88;
  padding: 0 10%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default WelcomeContainer;
