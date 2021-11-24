import styled from 'styled-components';
import UIGreyMatter from '../../ui/UIGreyMatter';

const IconsMeaningContainer = () => {
  return (
    <UIGreyMatter>
      <h6>THE MEANING OF OUR ICONS :</h6>
      <IconsContainer>
        <div>
          <img src={'./assets/spicy-icon.png'} alt="Spicy" width="44" />
          <p>Spicy</p>
        </div>
        <div>
          <img
            src={'./assets/vegiterian-icon.png'}
            alt="Vegiterian"
            width="33"
          />
          <p>Vegiterian</p>
        </div>
        <div>
          <img src={'./assets/vegan-icon.png'} alt="Vegan" width="37" />
          <p>Vegan</p>
        </div>
      </IconsContainer>
    </UIGreyMatter>
  );
};

export default IconsMeaningContainer;

const IconsContainer = styled.div`
  // Mobile Design
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (max-width: 480px) {
    gap: 40px;
  }
  @media only screen and (max-width: 280px) {
    gap: 20px;
  }

  // Desktop Design
  @media only screen and (min-width: 769px) {
    gap: 100px;
    img {
      width: 70px;
    }
  }
`;
