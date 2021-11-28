import UITable from '../../ui/UITable';
import RestaurantCard from '../restaurant/RestaurantCard';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/AppState';
import { Link } from 'react-router-dom';

const RestaurantTable = () => {
  const restaurants = useSelector(
    (state: AppState) => state.restaurantsArrays.All[0]
  );
  return (
    <UITable>
      <h3>THE POPULAR RESTAURANTS IN EPICURE:</h3>
      <div className="mini-table">
        {restaurants.data.slice(0, 3).map((restaurant: any) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
      <div style={{ width: '1030px', display: 'flex', justifyContent: 'end' }}>
        <h4>
          <Link to={'restaurants'}>ALL RESTAURANTS &gt;&gt;</Link>
        </h4>
      </div>
    </UITable>
  );
};

export default RestaurantTable;
