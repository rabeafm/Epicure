import { Link } from 'react-router-dom';
import UICard from '../../ui/UICard';

const RestaurantCard = (restaurant: any) => {
  return (
    <UICard className="chef-rests">
      <Link
        to={'/restaurant/' + restaurant._id}
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <img
          src={process.env.REACT_APP_BASE_URL + restaurant.thumb}
          alt={restaurant.name}
          className="card-image rest-image"
        />

        <div className="details rest-details">
          <h2>{restaurant.name}</h2>
          <h3>{restaurant.chef.name}</h3>
        </div>
      </Link>
    </UICard>
  );
};
export default RestaurantCard;
