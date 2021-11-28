import styled from 'styled-components';

const UICard = styled.div`
  max-width: 170px;
  background: #f7e0b2;
  display: flex;
  flex-direction: column;

  .card-image {
    object-fit: cover;
    min-height: 160px;
    max-height: 160px;
  }

  .details {
    padding: 25px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    gap: 10px;
  }

  /* Restaurant Card Design */
  .rest-details {
    h2 {
      font-weight: 400;
      margin-bottom: 4px;
    }
  }

  /* Dish Card Design */
  .dish-image {
    min-height: 145px;
    max-height: 145px;
  }
  .dish-details {
    padding: 15px 10px 10px;
    min-height: 320px;
    max-height: 320px;
    max-width: 260px;
    min-width: 150px;
    justify-content: space-between;
    h1 {
      font-weight: 400;
    }
    .icon {
      display: inline;
      width: 40px;
    }

    .price {
      width: 100%;
      display: flex;
      align-items: center;
      .lines {
        margin: 14px 4px 10px 4px;
        height: 0.8px;
        background-color: #979797;
        display: inline-flex;
        flex: 1;
      }
    }
  }

  @media only screen and (min-width: 769px) {
    min-width: 330px;
    max-width: 330px;
    background: #f9f4ea;

    .card-image {
      object-fit: cover;
      min-height: 210px;
      max-height: 210px;
      min-width: 280px;
    }
    .rest-details {
      background: #f9f4ea;
      h2 {
        font-size: 35px;
      }
      h3 {
        font-size: 28px;
      }
    }

    .dish-image {
      min-height: 230px;
      max-height: 230px;
    }

    .dish-details {
      background: #f9f4ea;
      min-height: 360px;
      max-height: 360px;
    }
  }
`;

export default UICard;
