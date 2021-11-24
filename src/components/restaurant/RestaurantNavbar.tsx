import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const RestaurantNavbar = (props: any) => {
  return (
    <Navbar>
      <h4>
        <NavLink to={'/restaurant/' + props.id} exact activeClassName="active">
          Breakfast
        </NavLink>
      </h4>
      <h4>
        <NavLink
          to={'/restaurant/' + props.id + '/lunch'}
          exact
          activeClassName="active"
        >
          Lunch
        </NavLink>
      </h4>
      <h4>
        <NavLink
          to={'/restaurant/' + props.id + '/dinner'}
          exact
          activeClassName="active"
        >
          Dinner
        </NavLink>
      </h4>
    </Navbar>
  );
};

export default RestaurantNavbar;

const Navbar = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media only screen and (min-width: 769px) {
    justify-content: center;
    h4 {
      padding: 0 15px;
    }
  }
  .active {
    border-bottom: rgba(222, 146, 0, 0.9) 1px solid;
  }
`;
