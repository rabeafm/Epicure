import UITable from '../../ui/UITable';
import DishCard from '../dish/DishCard';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/AppState';

const RestaurantDishes = ({ category }: any) => {
  const dishes = useSelector((state: AppState) => state.restaurant.dishes);
  if (category !== 'lunch' && category !== 'dinner') category = 'breakfast';
  //console.log(dishes.filter((dish: any) => dish.type === category).length);
  return (
    <UITable>
      <div className="cards-grid">
        {dishes.filter((dish: any) => dish.type === category).length === 0 && (
          <div className="no-dishes">
            <h5>No available dishes in this category.</h5>
          </div>
        )}
        {dishes
          .filter((dish: any) => dish.type === category)
          .map((dish: any) => (
            <DishCard {...dish} key={dish._id} />
          ))}
        {dishes.filter((dish: any) => dish.type === category).length !== 0 &&
          dishes.filter((dish: any) => dish.type === category).length % 4 >
            0 && <div className="flex-ghost dishes-ghost"></div> &&
          dishes.filter((dish: any) => dish.type === category).length % 4 <
            3 && <div className="flex-ghost dishes-ghost"></div> &&
          dishes.filter((dish: any) => dish.type === category).length % 4 <
            2 && <div className="flex-ghost dishes-ghost"></div>}
      </div>
    </UITable>
  );
};

export default RestaurantDishes;
