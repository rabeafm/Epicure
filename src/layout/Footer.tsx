import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <div>Contact us</div>
      <div>Terms of use</div>
      <div>Privacy Policy</div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  height: 126px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 12px;
  font-weight: 200;
  box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.05);
  @media only screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: center;
    font-size: 18px;
    div {
      padding: 0 22px;
    }
  }
`;
export default Footer;
