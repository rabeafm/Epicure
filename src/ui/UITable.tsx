import styled from 'styled-components';

const UITable = styled.div`
  padding: 20px 0 30px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  .cards-grid {
    width: 96%;
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    column-gap: 5px;
    row-gap: 20px;
    .flex-ghost {
      width: 120px;
    }
    .dish-card-view{
    max-height: 410px;
    min-height: 410px;
    background-color: #f9f4ea;
    .dish-details {
      background-color: #f9f4ea;
      padding: 10px 7px;
      max-height: 260px !important;
      min-height: 260px !important;
    }
    
  }
  .no-dishes {
    width: 90%;
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #f9f4ea;
    border: 1px solid orange;
    
    
  }
  }
  .mini-table {
    display: flex;
    gap: 30px;
  }

 

  .dish-details {
    background-color: #f9f4ea;
    padding: 10px 7px;
    max-height: 210px;
    min-height: 210px;
    .icon {
      height: 20px !important;
      width: 20px !important;
    }
    h1 {
      font-size: 15px;
    }
    h4 {
      font-size: 13px;
    }
    p {
      font-size: 10px;
    }
  }

  @media only screen and (min-width: 769px) {
    max-width: 1100px;

    // Restaurant Dishes Table
    .cards-grid {
      .dish-card-view {
        max-width: 220px !important;
        min-width: 220px !important;
        max-height: 360px;
        min-height: 360px;
        .dish-image{
        max-width: 220px !important;
        min-width: 220px !important;
        }
        .dish-details {
          max-height: 210px !important;
        min-height: 210px !important;
          .icon {
            display: none !important;
          }

        }
        
      }
      .dishes-ghost {
        width: 220px;
      }
    }
    
  
    // Mini Tables at first page
    .mini-table {
      // for signature dish of restaurant name
      .dish-restaurant {
        margin: 15px;
        font-weight: 400;
      }

      .dish-details {
        padding: 15px 15px;
        min-height: 330px;
        max-height: 330px;
        min-width: 280px;
        max-width: 360px;
      h1 {
        font-size: 35px; 
      }
      h4 {
        font-size: 24px;
        font-weight: 200;
      }
    }
  }
  .chefsrest {
    margin: 0 auto;
    max-width: 880px;
    width: 100%;
    display: flex;
    justify-self: center;
    justify-content: start;
  }
 .chefs-restaurant {
   width: 100%;
   padding: 0 10px;
   max-width: 900px;
   justify-self: start;
   .chef-rests{
     max-width: 280px;
     min-width: 280px;
   }
 }
`;

export default UITable;
