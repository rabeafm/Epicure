import UITable from '../../ui/UITable';
import RestaurantCard from '../restaurant/RestaurantCard';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/AppState';

const ChefRestaurantsTable = () => {
  const restaurants = useSelector((state: AppState) => state.chef.restaurants);

  return (
    <UITable>
      <h3 className="chefsrest">Yossi’s restaurants :</h3>
      <div className="inner chefs-restaurant">
        {restaurants.slice(0, 3).map((restaurant: any) => {
          restaurant.chef = '';
          return <RestaurantCard {...restaurant} key={restaurant._id} />;
        })}
      </div>
    </UITable>
  );
};

export default ChefRestaurantsTable;
