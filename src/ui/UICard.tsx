import styled from 'styled-components';

const UICard = styled.div`
  margin: 5px;
  width: 100%;
  height: 100%;
  min-width: 150px;
  max-width: 200px;
  background: #f7e0b2;
  display: flex;
  flex-direction: column;
  flex: 1;
  /* Restaurant Card Design */
  .rest-details {
    padding: 24px 0;
    h2 {
      font-weight: 400;
      margin-bottom: 4px;
    }
  }

  /* Dish Card Design */
  .dish-details {
    min-height: 320px;
    max-height: 320px;
    max-width: 260px;
    min-width: 150px;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    h1 {
      display: inline;
      font-weight: 400;
      opacity: 0.8;
    }
    .price {
      width: 100%;
      display: flex;
      align-items: center;
      .lines {
        height: 0.8px !important;
        display: inline-flex;
        flex: 1;
        margin: 14px 4px 10px 4px;
        background-color: #979797;
      }
    }
  }
`;

export default UICard;
