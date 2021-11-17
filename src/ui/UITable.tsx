import styled from 'styled-components';

const UITable = styled.div`
  padding: 10px 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  .inner {
    display: flex;
  }
  .unit {
    display: flex;
    flex-direction: column;
    gap: 5px;
    h1 {
      font-size: 15px;
    }
    h4 {
      font-size: 13px;
    }
    p {
      font-size: 10px;
    }
    .icon {
      height: 20px;
    }
    .meals {
      padding: 5px;
      display: flex;
      flex-flow: wrap;
      width: 100%;
      justify-content: space-evenly;
      row-gap: 10px;
      & > div {
        max-width: 145px;
        .dish-details {
          background-color: #f9f4ea;
          padding: 10px 7px;
          max-height: 190px;
          min-height: 190px;
        }
      }
    }
    .seperator {
      width: 100%;
      padding: 20px;
      display: flex;
      align-items: center;
      .lines {
        height: 0.8px !important;
        display: inline-flex;
        flex: 1;
        margin: 10px;
        background-color: #979797;
      }
    }
  }
`;

export default UITable;
