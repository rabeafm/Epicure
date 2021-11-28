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
          style={{ width: '20px', height: '20px' }}
          onClick={() => setMenu(true)}
        />
        <NavLink to={'/'} className="logo">
          <img
            src={process.env.REACT_APP_BASE_URL + 'assets/navbar/moblogo.jpg'}
            alt="Epicure"
          />
        </NavLink>
        <div style={{ marginTop: '7px' }}>
          <UISearchSlide />
          <NavLink to={'/user'}>
            <img
              src={process.env.REACT_APP_BASE_URL + 'assets/navbar/user.svg'}
              alt="User"
              style={{ width: '20px', height: '19px' }}
            />
          </NavLink>
          <NavLink to={'/cart'}>
            <img
              src={process.env.REACT_APP_BASE_URL + 'assets/navbar/cart.svg'}
              alt="Cart"
              style={{ width: '20px', height: '20px' }}
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
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  .logo {
    margin-left: 45px;
    img {
      width: 33px;
      height: 33px;
    }
    @media only screen and (max-width: 230px) {
      margin-left: 25px;
    }
    @media only screen and (max-width: 200px) {
      margin-left: 0;
    }
  }
  & img {
    margin: 0 8px;
  }
  & div {
    display: flex;
  }
`;

export default Navbar;
