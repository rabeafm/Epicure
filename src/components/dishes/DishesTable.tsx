import UITable from '../../ui/UITable';
import DishCard from '../dish/DishCard';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/AppState';

const DishesTable = () => {
  const dishes = useSelector((state: AppState) => state.dishesArray);

  return (
    <UITable>
      <h3>SIGNATURE DISH OF:</h3>
      <div className="inner">
        {dishes.slice(0, 3).map((dish: any) => (
          <div key={dish._id}>
            <h3>{dish.restaurant.name}</h3>
            <DishCard {...dish} key={dish._id} />
          </div>
        ))}
      </div>
    </UITable>
  );
};

export default DishesTable;
