import { Dish } from '../../types/Data';
import UIUnit from '../../ui/UIUnit';
import UIButton from '../../ui/UIButton';

const DishProfile = (data: Dish) => {
  return (
    <UIUnit>
      <form className="dishform">
        <label htmlFor="name">Dish Name:</label>
        <input type="text" id="name" name="name" defaultValue={data.name} />
        <br />
        <br />
        <label htmlFor="price">Dish Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          defaultValue={data.price}
        />
        <br />
        <br />
        <label htmlFor="rest">Resturant:</label>
        <textarea id="rest" name="rest" defaultValue={data.resturant.name} />
        <br />
        <br />
        <label>Ingredients:</label>
        <br />
        <br />
        {data.ingredients.map((ing: string, index: number) => (
          <h1 key={index}>{ing}</h1>
        ))}
        <br />
        <br />
        <label>Tags:</label>
        <br />
        <br />
        {data.tags.map((tag: string, index: number) => (
          <h1 key={index}>{tag}</h1>
        ))}
        <UIButton type="submit">Update</UIButton>
        <UIButton type="button">Delete</UIButton>
      </form>
    </UIUnit>
  );
};

export default DishProfile;
