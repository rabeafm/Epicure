import UITable from '../../ui/UITable';
import DishCard from '../dish/DishCard';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/AppState';

const DishesTable = () => {
  const dishes = useSelector((state: AppState) => state.dishesArray);

  return (
    <UITable>
      <h6>SIGNATURE DISH OF:</h6>
      <h5>Tiger Lilly</h5>
      <div className="inner">
        {dishes.slice(0, 3).map((dish: any) => (
          <DishCard {...dish} key={dish._id} />
        ))}
      </div>
    </UITable>
  );
};

export default DishesTable;
