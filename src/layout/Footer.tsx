import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>Contact us</p>
      <p>Terms of use</p>
      <p>Privacy Policy</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  // Mobile Design
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.05);

  // Desktop Design
  @media only screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: center;
    gap: 40px;
  }
`;
export default Footer;
