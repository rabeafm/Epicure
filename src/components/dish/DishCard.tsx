import UICard from '../../ui/UICard';
import { useState } from 'react';
import DishModal from './DishModal';

const DishCard = (dish: any) => {
  const [showDish, setShowDish] = useState(false);

  return (
    <>
      {showDish && <DishModal dish={dish} setShowDish={setShowDish} />}
      <UICard onClick={() => setShowDish(true)} className="homepage-card-view">
        <img
          src={process.env.REACT_APP_BASE_URL + dish.image}
          alt={dish.name}
          className="image"
        />
        <div className="dish-details">
          <h1>{dish.name}</h1>
          <h4>{dish.ingredients}</h4>
          {dish.icon !== '' && (
            <img
              className="icon"
              src={process.env.REACT_APP_BASE_URL + dish.icon}
              alt={dish.name}
            />
          )}
          <div className="price">
            <div className="lines"></div>
            <p>₪</p>&nbsp;<h1>{dish.price}</h1>
            <div className="lines"></div>
          </div>
        </div>
      </UICard>
    </>
  );
};
export default DishCard;
