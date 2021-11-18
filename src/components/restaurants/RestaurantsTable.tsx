import UITable from '../../ui/UITable';
import RestaurantCard from '../restaurant/RestaurantCard';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/AppState';

const RestaurantTable = () => {
  const restaurants = useSelector((state: AppState) => state.restaurantsArray);
  return (
    <UITable>
      <h6>THE POPULAR RESTAURANTS IN EPICURE:</h6>
      <div className="inner">
        {restaurants.slice(0, 3).map((restaurant: any) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </UITable>
  );
};

export default RestaurantTable;
