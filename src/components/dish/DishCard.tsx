import UICard from '../../ui/UICard';
import { Link } from 'react-router-dom';

const DishCard = (dish: any) => {
  return (
    <UICard>
      <Link
        to={'/dish/' + dish._id}
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <img
          src={process.env.REACT_APP_BASE_URL + dish.image}
          alt={dish.name}
          style={{ objectFit: 'cover' }}
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
            <div className="lines"></div>
            <p>₪</p>&nbsp;<h1>{dish.price}</h1>
            <div className="lines"></div>
          </div>
        </div>
      </Link>
    </UICard>
  );
};
export default DishCard;
