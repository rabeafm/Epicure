import UICard from '../../ui/UICard';
import { Link } from 'react-router-dom';

const DishCard = (dish: any) => {
  return (
    <UICard>
      <img
        src={process.env.REACT_APP_BASE_URL + dish.image}
        alt={dish.name}
        style={{ objectFit: 'cover', aspectRatio: '260 / 208' }}
      />
      <div className="dish-details">
        <h1>{dish.name}</h1>
        <h4>{dish.ingredients}</h4>
        <img
          className="icon"
          src={process.env.REACT_APP_BASE_URL + dish.icon}
          alt={dish.name}
          height="34"
          width="44"
        />
        <div className="price">
          <div className="lines"></div>₪&nbsp;<h1>{dish.price}</h1>
          <div className="lines"></div>
        </div>
      </div>
    </UICard>
  );
};
export default DishCard;
