import UIUnit from '../ui/UIUnit';
import RestaurantNavbar from '../components/restaurant/RestaurantNavbar';
import RestaurantDishes from '../components/restaurant/RestaurantDishes';
import { useSelector } from 'react-redux';
import { AppState } from '../store/AppState';

const Restaurant = (props: any) => {
  const restaurant = useSelector((state: AppState) => state.restaurant);
  console.log(props);

  const time = new Date();
  const timeString =
    (time.getHours() < 10 ? '0' : '') +
    time.getHours() +
    ':' +
    time.getMinutes();
  return (
    <UIUnit>
      <img
        src={process.env.REACT_APP_BASE_URL + restaurant.image}
        alt={restaurant.name}
        style={{
          objectFit: 'cover',
          aspectRatio: '375 / 254',
          width: '100%',
        }}
      />
      <div className="resturant-display">
        <h1>{restaurant.name}</h1>
        <h2>{restaurant.chef}</h2>

        <p>
          <img
            className="icon"
            src={process.env.REACT_APP_BASE_URL + 'assets/clock-icon.png'}
            alt={'Open now'}
          />
          &nbsp;
          {timeString >= restaurant.opens && timeString <= restaurant.closes
            ? ' Open now'
            : ' Closed'}
        </p>
      </div>
      <RestaurantNavbar />
      <RestaurantDishes />
    </UIUnit>
  );
};

export default Restaurant;
