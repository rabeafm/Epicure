import styled from 'styled-components';

const UIGreyMatter = styled.div`
  // Element Attributes
  margin-bottom: 40px;

  width: 100%;
  padding: 0 12%;
  z-index: 2;
  background-color: #fafafa;

  // Content Behaviour
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media only screen and (max-width: 260px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 769px) {
    margin: 90px 0;
    min-height: 260px;
    h6 {
      font-size: 27px;
    }
    p {
      font-size: 25px;
    }
  }
`;

export default UIGreyMatter;
