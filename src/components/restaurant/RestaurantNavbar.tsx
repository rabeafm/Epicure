import styled from 'styled-components';

const RestaurantNavbar = () => {
  return (
    <Navbar>
      <h4 className="active">Breakfast</h4>
      <a href="#lunch">
        <h4>Lunch</h4>
      </a>
      <a href="#dinner">
        <h4>Dinner</h4>
      </a>
    </Navbar>
  );
};

export default RestaurantNavbar;

const Navbar = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  .active {
    border-bottom: rgba(222, 146, 0, 0.9) 1px solid;
  }
`;
