import styled from 'styled-components';

const UIModal = styled.div`
  width: 100vw;
  height: 100%;
  z-index: 300;
  position: fixed;
  .close {
    text-align: left;
    background: #fff;
    padding: 10px 20px;
    font-size: 20px;
    height: 40px;
    color: #000;
  }
  @media only screen and (min-width: 768px) {
    height: 90%;
    max-width: 608px;
    margin: 20px auto;
    .close {
      background: transparent;
      padding: 0;
      color: #fff;
      font-size: 25px;
    }
  }
  display: flex;
  flex-direction: column;
  .dish {
    overflow-y: scroll;
    background: #fff;
  .dish-display {
    padding: 25px 19%;
    h2 {
      margin-bottom: 6px;
      font-weight: 400;
    }
    img {
      width: 30px;
      margin-top: 13px;
      margin-bottom: 15px;
    }
    .price {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .lines {
        margin: 4px 10px;
        height: 0.8px !important;
        width: 50px;
        background-color: #979797;
        display: inline-flex;
      }
      h3 {
        font-weight: 400;
      }
      p {
        font-size: 10px;
        font-weight: 400;
      }
    }
  }}
  .section {
    margin: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 25px; 
    h4 {
      margin: 15px auto 10px;
      border-bottom: rgba(222, 146, 0, 0.9) 1px solid;
    }
    label {
        display flex; 
        align-items: center;
        gap: 18px;
        font-size: 25px;
        font-weight: 200;
        input {
            width: 20px;
            height: 20px;
            border: 0;
            font-size: 20px;
            font-weight: 200;
        }
        .counter {
            margin: 0px auto 30px;
            width: 190px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
  }
  .addtobag {
    margin: 40px auto;
    padding: 16px 30px;
    background: #000;
    h4 {
        color: #fff; 
        font-weight: 400;
    }
}
`;

export default UIModal;
