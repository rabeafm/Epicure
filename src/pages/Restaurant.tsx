import UIUnit from '../ui/UIUnit';
import { useEffect } from 'react';
import { AppState } from '../store/AppState';
import { ActionType } from '../store/Action';
import { useSelector, useDispatch } from 'react-redux';
import RestaurantNavbar from '../components/restaurant/RestaurantNavbar';
import RestaurantDishes from '../components/restaurant/RestaurantDishes';
import axios from 'axios';

const Restaurant = (props: any) => {
  const restaurant = useSelector((state: AppState) => state.restaurant);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get('http://localhost:4001/api/admin/v1/rests/' + props.id)
      .then((res: any) => {
        dispatch({ type: ActionType.SET_RESTAURANT, payload: res.data.data });
      });
    // eslint-disable-next-line
  }, []);

  const time = new Date();
  const timeString =
    (time.getHours() < 10 ? '0' : '') +
    time.getHours() +
    ':' +
    time.getMinutes();
  return (
    restaurant && (
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
          <h2>{restaurant.chef.name}</h2>
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
        <RestaurantNavbar id={props.id} />
        <RestaurantDishes
          category={props.match.url.substring(
            props.match.url.lastIndexOf('/') + 1
          )}
        />
      </UIUnit>
    )
  );
};

export default Restaurant;
