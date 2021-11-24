import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const RestaurantsNavbar = ({ filterRestaurants }: any) => {
  return (
    <Navbar>
      <div>
        <h5>
          <NavLink
            to="/restaurants"
            exact
            activeClassName="active"
            onClick={() => filterRestaurants('')}
          >
            All
          </NavLink>
        </h5>
      </div>
      <div>
        <h5>
          <NavLink
            to="/restaurants/new"
            activeClassName="active"
            onClick={() => filterRestaurants('new')}
          >
            New
          </NavLink>
        </h5>
      </div>
      <div>
        <h5>
          <NavLink
            to="/restaurants/most-popular"
            activeClassName="active"
            onClick={() => filterRestaurants('')}
          >
            Most Popular
          </NavLink>
        </h5>
      </div>
      <div>
        <h5>
          <NavLink
            to="/restaurants/open-now"
            activeClassName="active"
            onClick={() => filterRestaurants('opennow')}
          >
            Open Now
          </NavLink>
        </h5>
      </div>
    </Navbar>
  );
};

export default RestaurantsNavbar;

const Navbar = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  .active {
    font-weight: 400;
  }
  @media only screen and (min-width: 769px) {
    justify-content: center;
    h5 {
      font-size: 18px;
      margin: 0 18px;
    }
  }
`;
