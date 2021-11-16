import { Link } from 'react-router-dom';
import UICard from '../../ui/UICard';

const RestaurantCard = (restaurant: any) => {
  return (
    <UICard>
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
          style={{
            objectFit: 'cover',
            aspectRatio: '224 / 206',
          }}
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
