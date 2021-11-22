import styled from 'styled-components';

const AboutUsContainer = () => {
  return (
    <AboutContainer>
      <div className="about-us-layout">
        <span>ABOUT US :</span>
        <div className="about-us">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
              lacus vel justo fermentum bibendum non eu ipsum. Cras porta
              malesuada eros, eget blandit turpis suscipit at. Vestibulum sed
              massa in magna sodales porta. Vivamus elit urna, dignissim a
              vestibulum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
              lacus vel justo fermentum bibendum non eu ipsum. Cras porta
              malesuada eros, eget blandit turpis suscipit at. Vestibulum sed
              massa in magna sodales porta. Vivamus elit urna, dignissim a
              vestibulum.
            </p>
          </div>
          <div>
            <img
              src={process.env.REACT_APP_BASE_URL + '/assets/about-logo.png'}
              className="epicure-logo"
              alt="epicure logo"
            />
          </div>
        </div>
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
      </div>
    </AboutContainer>
  );
};

export default AboutUsContainer;

const AboutContainer = styled.div`
  // Element Attributes
  width: 100%;
  padding: 30px 13%;
  z-index: 2;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;

  // Content Behaviour
  .about-us-layout {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: space-evenly;
  }

  .epicure-logo {
    padding: 20px 20px 10px;
    width: 200px;
  }
  // Text behaviour
  span {
    text-align: center;
    font-size: 16px;
    font-weight: 200;
  }

  & p {
    padding: 10px;
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

  @media only screen and (min-width: 769px) {
    & span {
      text-align: left;
      font-size: 30px;
      font-weight: 200;
    }

    .about-us-layout {
      margin: 0 auto;
      width: 100%;
      max-width: 1000px;
      display: flex;
      flex-direction: column;
      align-items: start;
    }
    .about-us {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 0;
      & p {
        max-width: 530px;
        text-align: left;
        font-size: 20px;
        font-weight: 200;
      }
      .epicure-logo {
        width: 220px;
      }
    }
    .download {
      display: flex;
      margin-left: 90px;
      align-items: start;
      justify-content: start;
      & img {
        margin-right: 5px;
        width: 25px;
      }
      .line {
        font-size: 13px !important;
      }
      .marka {
        font-size: 16px !important;
      }
    }
  }
`;
