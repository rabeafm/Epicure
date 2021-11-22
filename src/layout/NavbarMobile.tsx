import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import UISearchSlide from '../ui/UISearchSlide';

import Menu from './Menu';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Menu menu={menu} setMenu={setMenu} />
      <IconsContainer>
        <img
          src={process.env.REACT_APP_BASE_URL + 'assets/navbar/burger.svg'}
          alt="Menu"
          onClick={() => setMenu(true)}
        />
        <NavLink to={'/'} className="logo">
          <img
            src={process.env.REACT_APP_BASE_URL + 'assets/navbar/logo.png'}
            alt="Epicure"
          />
        </NavLink>
        <div>
          <UISearchSlide />
          <NavLink to={'/user'}>
            <img
              src={process.env.REACT_APP_BASE_URL + 'assets/navbar/user.svg'}
              alt="User"
            />
          </NavLink>
          <NavLink to={'/cart'}>
            <img
              src={process.env.REACT_APP_BASE_URL + 'assets/navbar/cart.svg'}
              alt="Cart"
            />
          </NavLink>
        </div>
      </IconsContainer>
    </>
  );
};

const IconsContainer = styled.div`
  padding: 8px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  .logo {
    margin-left: 45px;
    @media only screen and (max-width: 230px) {
      margin-left: 25px;
    }
    @media only screen and (max-width: 200px) {
      margin-left: 0;
    }
  }
  & img {
    margin: 0 5px;
  }
  & div {
    display: flex;
  }
`;

export default Navbar;
