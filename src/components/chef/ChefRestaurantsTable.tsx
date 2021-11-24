import UITable from '../../ui/UITable';
import RestaurantCard from '../restaurant/RestaurantCard';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/AppState';

const ChefRestaurantsTable = () => {
  const chef = useSelector((state: AppState) => state.chef);
  return (
    <UITable>
      <h3 className="chefsrest">{chef.name.split(' ')[0]}’s restaurants :</h3>
      <div className="inner chefs-restaurant">
        {chef.rests.slice(0, 3).map((restaurant: any) => {
          restaurant.chef = '';
          return <RestaurantCard {...restaurant} key={restaurant._id} />;
        })}
      </div>
    </UITable>
  );
};

export default ChefRestaurantsTable;
