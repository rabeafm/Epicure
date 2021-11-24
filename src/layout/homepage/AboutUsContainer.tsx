import styled from 'styled-components';
import UIGreyMatter from '../../ui/UIGreyMatter';

const AboutUsContainer = () => {
  return (
    <UIGreyMatter>
      <AboutContainer>
        <h6>ABOUT US :</h6>
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
      </AboutContainer>
    </UIGreyMatter>
  );
};

export default AboutUsContainer;

const AboutContainer = styled.div`
  // Mobile Design
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  p {
    margin: 0;
    padding-bottom: 10px;
    font-size: 14px;
  }
  .epicure-logo {
    padding: 20px;
    width: 200px;
  }
  .download {
    display: flex;
    @media only screen and (max-width: 325px) {
      flex-direction: column;
    }
    gap: 10px;
    .button {
      padding: 5px 10px;
      border: 0.5px solid black;
      border-radius: 7px;
      display: flex;
      gap: 10px;
      .line {
        font-size: 9px;
      }
      .marka {
        font-size: 12px;
      }
    }
  }

  // Desktop Design
  @media only screen and (min-width: 769px) {
    padding: 0 10px;
    width: 100%;
    max-width: 900px;
    align-items: start;

    .about-us {
      width: 95%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        max-width: 530px;
        text-align: left;
        font-size: 20px;
      }
    }
    .download {
      img {
        width: 25px;
      }
      .button {
        .line {
          font-size: 13px;
        }
        .marka {
          font-size: 16px;
        }
      }
    }
  }
`;
