import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Menu = ({ menu, setMenu }: any) => {
  return (
    <MenuContainer menu={menu}>
      <div>
        <img
          src={process.env.REACT_APP_BASE_URL + './assets/navbar/x.png'}
          alt="Menu"
          onClick={() => setMenu(false)}
        />
        <hr />
      </div>
      <NavLink to={'chefs'} onClick={() => setMenu(false)}>
        Chefs
      </NavLink>
      <NavLink to={'restaurants'} onClick={() => setMenu(false)}>
        All Resturants
      </NavLink>
      {/* <NavLink>Dishes</NavLink> */}
      <hr />
      <div>Sign in</div>
      <div>Contact us</div>
      <div>Terms of use</div>
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  display: flex;
  left: ${(props: { menu: boolean }) => (props.menu ? '0%' : '-100%;')};
  transition: left 0.7s;
  height: 100%;
  width: 100%;
  padding: 3% 10% 50%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  position: fixed;
  background: white;
  z-index: 100;
  & hr {
    width: 53%;
  }
  & div {
    display: flex;
    flex-direction: column;
    align-items: start;
    opacity: 0.3;
    & hr {
      width: 100vw;
    }
    & img {
      margin: 3% 10%;
      opacity: 1;
    }
  }
`;
