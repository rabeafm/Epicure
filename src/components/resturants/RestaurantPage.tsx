import { Dish, Resturant } from '../../types/Data';
import UIUnit from '../../ui/UIUnit';
import UIButton from '../../ui/UIButton';

const RestaurantPage = (data: Resturant) => {
  return (
    <UIUnit>
      <form className="resturantform">
        <img style={{ width: '50px' }} src={data.image} alt={data.name} />
        <input type="text" id="image" name="image" defaultValue={data.image} />
        <br />
        <br />
        <label htmlFor="name">Resturant Name:</label>
        <input type="text" id="name" name="name" defaultValue={data.name} />
        <br />
        <br />
        <label htmlFor="chef">Resturant Chef:</label>
        {/* <textarea id="chef" name="chef" defaultValue={data.chef.name} /> */}
        <br />
        <br />
        <label>Dishes:</label>
        <br />
        <br />
        {/* {data.dishes.map((dish: Dish) => (
          <h1 key={dish._id}>{dish.name}</h1>
        ))} */}
      </form>
      <UIButton type="submit">Update</UIButton>
      <UIButton type="button">Delete</UIButton>
    </UIUnit>
  );
};

export default RestaurantPage;
