import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import UISearch from '../ui/UISearch';

const Navbar = () => {
  return (
    <>
      <IconsContainer>
        <div className="left">
          <Link to={'/'} className="logo">
            <img
              src={process.env.REACT_APP_BASE_URL + 'assets/navbar/logo.png'}
              alt="Epicure"
            />
            <h4>Epicure</h4>
          </Link>
          <NavLink to={'/restaurants'} activeClassName="active">
            <h6>Restaurants</h6>
          </NavLink>
          <NavLink to={'/chefs'} activeClassName="active">
            <h6>Chefs</h6>
          </NavLink>
        </div>
        <div className="right">
          <UISearch />
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
  margin: 0 auto;
  max-width: 1100px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  .left{
    display: flex;
    align-items: center;
    gap: 10px;
    .logo {
      display: flex;
      align-items: center;
      gap 15px;
      padding-right: 10px;
    }
    h6 {
      margin-top: 5px;
      padding: 10px;
    }
    .active {
      border-bottom: rgba(222, 146, 0, 0.9) 1px solid;
    }
  }
  .right{
    display: flex;
    align-items: center;
    gap: 20px;
    img {
      margin-top: 3px;
    }
    .searchbox-input {
      width: 400px;
      background: url('${process.env.REACT_APP_BASE_URL}/assets/navbar/mini-search-icon.svg')
      left no-repeat;
      background-position: 97%;
      padding: 15px 8px 14px 15px;
      @media only screen and (max-width: 870px) {
        width: 300px;
      }
    }
  }
`;

export default Navbar;