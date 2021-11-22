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
  width: 100%;
  height: 269px;
  background: url('${process.env.REACT_APP_BASE_URL}/assets/welcome.png') center
    center/ cover;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    height: 70vh;
    margin-bottom: 90px;
  }
  .search-div {
    width: 90%;
    height: 120px;
    background-color: white;
    opacity: 0.88;
    padding: 0 30px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 768px) {
      height: 222px;
      padding: 0 130px;
      max-width: 696px;
      max-height: 222px;
      h5 {
        max-width: 439px;
        font-size: 35px;
      }
    }
  }
`;

export default WelcomeContainer;
