import { Link } from 'react-router-dom';
import UICard from '../../ui/UICard';

const RestaurantCard = (restaurant: any) => {
  return (
    <UICard className="homepage-card-view">
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
          className="image"
        />
        <div className="rest-details">
          <h2>{restaurant.name}</h2>
          <h3>{restaurant.chef}</h3>
        </div>
      </Link>
    </UICard>
  );
};
export default RestaurantCard;
