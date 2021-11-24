import UITable from '../../ui/UITable';
import DishCard from '../dish/DishCard';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/AppState';

const RestaurantDishes = ({ category }: any) => {
  const dishes = useSelector((state: AppState) => state.restaurant.dishes);
  return (
    <UITable>
      <div className="unit">
        {category !== 'lunch' && category !== 'dinner' && (
          <div className="meals">
            {dishes
              .filter((dish: any) => dish.type === 'breakfast')
              .map((dish: any) => (
                <DishCard className="dish" {...dish} key={dish._id} />
              ))}
          </div>
        )}

        {category === 'lunch' && (
          <div className="meals">
            {dishes
              .filter((dish: any) => dish.type === 'lunch')
              .map((dish: any) => (
                <DishCard {...dish} key={dish._id} />
              ))}
          </div>
        )}

        {category === 'dinner' && (
          <div className="meals">
            {dishes
              .filter((dish: any) => dish.type === 'dinner')
              .map((dish: any) => (
                <DishCard className="dish" {...dish} key={dish._id} />
              ))}
          </div>
        )}
      </div>
    </UITable>
  );
};

export default RestaurantDishes;
