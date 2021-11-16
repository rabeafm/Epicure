import UIUnit from '../../ui/UIUnit';

const ChefProfile = () => {
  return (
    <UIUnit>
      <form className="chefform">
        <img style={{ width: '50px' }} src={''} alt={''} />
        <input type="text" id="image" name="image" defaultValue={''} />
        <br />
        <br />
        <label htmlFor="name">Chef Name:</label>
        <input type="text" id="name" name="name" defaultValue={''} />
        <br />
        <br />
        <label htmlFor="descr">Description:</label>
        <textarea id="descr" name="descr" defaultValue={''} />
        <br />
        <br />
        <label>Resturants:</label>
        <br />
        <br />
        {/* {data.rests.map((rest: Resturant) => (
          <h1 key={rest._id}>{rest.name}</h1>
        ))} */}
      </form>
    </UIUnit>
  );
};

export default ChefProfile;
