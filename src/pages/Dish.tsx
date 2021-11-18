import UIUnit from '../ui/UIUnit';
import { useSelector } from 'react-redux';
import { AppState } from '../store/AppState';

const Dish = (props: any) => {
  const dish = useSelector((state: AppState) => state.dish);
  console.log(props);
  
  return (
    <UIUnit>
      <div>Dish {props.id + ' ' + dish.name} Page</div>
      <img
        src={process.env.REACT_APP_BASE_URL + dish.image}
        alt={dish.name}
        style={{
          objectFit: 'cover',
          aspectRatio: '375 / 254',
          width: '100%',
        }}
      />
      <div className="dish-display">
        <h2>{dish.name}</h2>
        <h4>{dish.ingredients}</h4>
        <img
          className="icon"
          src={process.env.REACT_APP_BASE_URL + dish.icon}
          alt={'Open now'}
        />
        <h3>{dish.price}</h3>
      </div>
    </UIUnit>
  );
};

export default Dish;
