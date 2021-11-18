import styled from 'styled-components';

const UIUnit = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10;
  h1 {
    font-size: 35px;
    font-weight: 400;
  }
  .resturant-display {
    padding: 17px 5px;
    p {
      margin-top: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .dish-display {
    padding: 25px 20%;
    h2 {
      margin-bottom: 14px;
      font-weight: 400;
    }
    h4 {
      margin: 14px 0;
    }
  }
`;

export default UIUnit;
