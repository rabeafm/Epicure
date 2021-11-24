import styled from 'styled-components';

const UIGreyMatter = styled.div`
  // Mobile Design
  margin-bottom: 40px;
  padding: 15px 0;
  width: 100%;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  p {
    margin-top: 10px;
  }

  @media only screen and (min-width: 769px) {
    margin: 70px 0;
    padding: 25px 0;

    // Icons Meaning & About Us Headers
    h6 {
      font-size: 27px;
    }
    p {
      font-size: 25px;
      margin-top: 25px;
    }
  }
`;

export default UIGreyMatter;
