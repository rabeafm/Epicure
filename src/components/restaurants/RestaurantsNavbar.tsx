import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const RestaurantsNavbar = () => {
  return (
    <Navbar>
      <h5 title="All">
        <NavLink to="/restaurants" exact activeClassName="active">
          All
        </NavLink>
      </h5>
      <h5 title="New">
        <NavLink to="/restaurants/new" activeClassName="active">
          New
        </NavLink>
      </h5>
      <h5 title="Most Popular">
        <NavLink to="/restaurants/most-popular" activeClassName="active">
          Most Popular
        </NavLink>
      </h5>
      <h5 title="Open Now">
        <NavLink to="/restaurants/open-now" activeClassName="active">
          Open Now
        </NavLink>
      </h5>
    </Navbar>
  );
};

export default RestaurantsNavbar;

const Navbar = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  .active {
    font-weight: 400;
  }

  h5::after {
    display: block;
    content: attr(title);
    font-weight: 400;
    height: 1px;
    color: transparent;
    overflow: hidden;
    visibility: hidden;
  }
  @media only screen and (min-width: 769px) {
    justify-content: center;
    h5 {
      font-size: 18px;
      margin: 0 18px;
    }
  }
`;
