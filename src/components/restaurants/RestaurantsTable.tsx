import UITable from '../../ui/UITable';
import RestaurantCard from '../restaurant/RestaurantCard';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/AppState';
import { Link } from 'react-router-dom';

const RestaurantTable = () => {
  const restaurants = useSelector((state: AppState) => state.restaurantsArray);
  return (
    <UITable>
      <h3>THE POPULAR RESTAURANTS IN EPICURE:</h3>
      <div className="inner">
        {restaurants.slice(0, 3).map((restaurant: any) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
      <h4 style={{ alignSelf: 'flex-end', paddingRight: '20px' }}>
        <Link to={'restaurants'}>ALL RESTAURANTS &gt;&gt;</Link>
      </h4>
    </UITable>
  );
};

export default RestaurantTable;
