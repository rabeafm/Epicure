import styled from 'styled-components';

const UIGreyMatter = styled.div`
  // Element Attributes
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
`;

export default UIGreyMatter;
