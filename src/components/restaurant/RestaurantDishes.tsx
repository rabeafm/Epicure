import UITable from '../../ui/UITable';
import DishCard from '../dish/DishCard';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/AppState';

const RestaurantDishes = () => {
  const dishes = useSelector((state: AppState) => state.restaurant.dishes);

  return (
    <UITable>
      <div className="unit">
        <div className="meals">
          {dishes
            .filter((dish: any) => dish.type === 'breakfast')
            .map((dish: any) => (
              <DishCard className="dish" {...dish} key={dish._id} />
            ))}
        </div>
        <div id="lunch" className="seperator">
          <div className="lines"></div>
          <h5> Lunch </h5>
          <div className="lines"></div>
        </div>
        <div className="meals">
          {dishes
            .filter((dish: any) => dish.type === 'lunch')
            .map((dish: any) => (
              <DishCard {...dish} key={dish._id} />
            ))}
        </div>
        <div id="dinner" className="seperator">
          <div className="lines"></div>
          <h5> Dinner </h5>
          <div className="lines"></div>
        </div>
        <div className="meals">
          {dishes
            .filter((dish: any) => dish.type === 'dinner')
            .map((dish: any) => (
              <DishCard className="dish" {...dish} key={dish._id} />
            ))}
        </div>
      </div>
    </UITable>
  );
};

export default RestaurantDishes;