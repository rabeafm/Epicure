import styled from 'styled-components';

const UICard = styled.div`
  margin: 5px;
  width: 100%;
  height: 100%;
  min-width: 150px;
  max-width: 170px;
  background: #f7e0b2;
  .image {
    object-fit: cover;
    min-height: 120px;
    max-height: 120px;
  }

  @media only screen and (min-width: 769px) {
    margin: 0;
    min-width: 280px;
    max-width: 340px;
    max-height: 550px !important;
    background: #f9f4ea;
    .image {
      object-fit: cover;
      min-height: 180px;
      max-height: 180px;
    }
  }
  
  display: flex;
  flex-direction: column;

  /* Restaurant Card Design */
  .rest-details {
    padding: 24px 0;
    h2 {
      font-weight: 400;
      margin-bottom: 4px;
    }
    @media only screen and (min-width: 769px) {
      background: #f9f4ea;
      min-width: 270px;
      max-width: 360px;
        h2 {
          font-size: 40px;
        }
        h3 {
          font-size: 25px;
        }
      }
    }
  }

  /* Dish Card Design */
  .dish-details {
    
    min-height: 320px;
    max-height: 320px;
    max-width: 260px;
    min-width: 150px;
    @media only screen and (min-width: 769px) {
      background: #f9f4ea;
      min-width: 280px;
      max-width: 280px;
      min-height: 360px;
    max-height: 360px;
    }
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    h1 {
      display: inline;
      font-weight: 400;
      opacity: 0.8;
    }
    .icon {
      display: inline;
      height: 34px;
      width: 44px;}
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
