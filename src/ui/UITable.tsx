import styled from 'styled-components';

const UITable = styled.div`
padding: 50px 0 50px;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
max-width: 1100px;
.inner {
  display: flex;
    gap: 10px;
  }

  .unit {
    width: 91%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
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
      width: 20px; 
    }
    .meals {
      padding: 5px;
      display: flex;
      flex-flow: wrap;
      justify-content: start;
      gap: 10px;
      
      & > div {
        max-width: 145px;
        flex: 1
        .dish-details {
          background-color: #f9f4ea;
          padding: 10px 7px;
          max-height: 190px;
          min-height: 190px;
        }
        
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

  @media only screen and (min-width: 769px) {
    h4 {
      font-weight: 400;
    }
    .chefsrest {
      align-self: start !important;
    }
  
    .inner {
      > div > h3 {
        margin: 15px;
        font-weight: 400;
      }
      h4 {
        font-weight: 200;
      }
      max-width: 1100px;
      align-self: center !important;
    }
  
    .unit{ 
      width: 100%;
    .meals {
      width: 100%;
      gap: 30px;
    > div { 
      max-width: 220px !important;
      min-width: 220px !important;
      
    }
    .dish-details {
      max-width: 220px !important;
      min-width: 220px !important;
      .icon {
        display: none;
      }
      h1{
        font-size: 20px;
      }
      h4{
        font-size: 18px;
        font-weight: 200;
      }
      }
    }}}
    .chefsrest {
      max-width: 900px;
      padding-left: 5px;
    }
    .chefs-restaurant {
      max-width: 900px;
      justify-self: center;
    }
  }
`;

export default UITable;
