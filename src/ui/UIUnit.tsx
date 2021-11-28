import styled from 'styled-components';

const UIUnit = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
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
  .dish-card-view {
    .flex-ghost {
      width: 220px !important;
    }
    .dish-image {
      max-height: 150px !important;
      min-height: 150px !important;
    }
    .dish-details {
      max-height: 210px !important;
      min-height: 210px !important;
      h1 {
        font-size: 25px;
      }
      h4 {
        font-size: 20px;
      }
    }
  }
`;

export default UIUnit;
