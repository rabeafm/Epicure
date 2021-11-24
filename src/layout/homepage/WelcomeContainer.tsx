import styled from 'styled-components';
import UISearch from '../../ui/UISearch';

const WelcomeContainer = () => {
  return (
    <WelcomeDiv>
      <div className="search-div">
        <h5>Epicure works with the top chef resturants in Tel Aviv</h5>
        <UISearch />
      </div>
    </WelcomeDiv>
  );
};

const WelcomeDiv = styled.div`
  // Mobile Design
  width: 100%;
  height: 269px;
  background: url('${process.env.REACT_APP_BASE_URL}/assets/welcome.png') center
    center/ cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .search-div {
    padding-top: 10px;
    width: 87%;
    height: 125px;
    background-color: rgba(255, 255, 255, 0.88);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h5 {
      max-width: 60%;
    }
  }

  // Desktop Design
  @media only screen and (min-width: 769px) {
    height: 70vh;
    margin-bottom: 60px;
    .search-div {
      height: 222px;
      padding: 0 100px;
      max-width: 700px;
      h5 {
        max-width: 80%;
        font-size: 35px;
      }
    }
  }
`;

export default WelcomeContainer;
