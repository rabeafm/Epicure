import styled from 'styled-components';

const AboutUsContainer = () => {
  return (
    <AboutContainer>
      <span>ABOUT US</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel
        justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget
        blandit turpis suscipit at. Vestibulum sed massa in magna sodales porta.
        Vivamus elit urna, dignissim a vestibulum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel
        justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget
        blandit turpis suscipit at. Vestibulum sed massa in magna sodales porta.
        Vivamus elit urna, dignissim a vestibulum.
      </p>

      <img src={'./assets/about-logo.png'} alt="epicure logo" />
      <div className="download">
        <div className="button">
          <img src={'./assets/apple-icon.png'} alt="apple logo" />
          <div>
            <div className="line">Download on the</div>
            <div className="marka">App Store</div>
          </div>
        </div>
        <div className="button">
          <img src={'./assets/google-icon.png'} alt="apple logo" />
          <div>
            <div className="line">Get it on</div>
            <div className="marka">Google Play</div>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
};

export default AboutUsContainer;

const AboutContainer = styled.div`
  // Element Attributes
  width: 100%;
  //height: 605px;
  padding: 30px 13%;
  z-index: 2;
  background-color: #fafafa;

  // Content Behaviour
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: space-evenly;

  // Text behaviour
  & span {
    text-align: center;
    padding: 0 10%;
    font-size: 16px;
    font-weight: 200;
  }

  & p {
    text-align: center;
    font-size: 14px;
    font-weight: 200;
  }

  .download {
    display: flex;
    @media only screen and (max-width: 325px) {
      flex-direction: column;
    }
    .button {
      margin: 5px;
      padding: 5px 10px;
      border: 0.5px solid black;
      border-radius: 7px;
      display: flex;

      text-align: center;
      & img {
        margin-right: 5px;
      }
      .line {
        font-size: 9px;
      }
      .marka {
        font-size: 12px;
      }
    }
  }
`;
