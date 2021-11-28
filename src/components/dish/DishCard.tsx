import UICard from '../../ui/UICard';
import { useState } from 'react';
import DishModal from './DishModal';

const DishCard = (dish: any) => {
  const [showDish, setShowDish] = useState(false);

  return (
    <>
      {showDish && <DishModal dish={dish} setShowDish={setShowDish} />}
      <UICard onClick={() => setShowDish(true)} className="homepage-card-view dish-card-view">
        <img
          src={process.env.REACT_APP_BASE_URL + dish.image}
          alt={dish.name}
          className="card-image dish-image"
        />
        <div className="details dish-details">
          <h1>{dish.name}</h1>
          <h4>
            {dish.ingredients.map((ing: string, i: number) =>
              i < dish.ingredients.length - 2
                ? ing + ', '
                : i === dish.ingredients.length - 2 &&
                  ing + ' & ' + dish.ingredients[dish.ingredients.length - 1]
            )}
          </h4>
          <div>
            {dish.icons.length > 0 &&
              dish.icons.map((icon: string) => (
                <img
                  key={icon}
                  className="icon"
                  src={process.env.REACT_APP_BASE_URL + icon}
                  alt={dish.name}
                />
              ))}
          </div>
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
