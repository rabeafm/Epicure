import UIGreyMatter from '../../ui/UIGreyMatter';
import UIButton from '../../ui/UIButton';
import { NavLink } from 'react-router-dom';

const ButtonsContainer = () => {
  return (
    <UIGreyMatter style={{ height: 125 }}>
      <NavLink to="/chefs" exact>
        <UIButton>CHEFS</UIButton>
      </NavLink>
      <NavLink to="/restaurants" exact>
        <UIButton>RESTURANTS</UIButton>
      </NavLink>
    </UIGreyMatter>
  );
};

export default ButtonsContainer;
