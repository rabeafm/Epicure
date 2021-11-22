import ReactDOM from 'react-dom';
import UIModal from '../../ui/UIModal';
import UIButton from '../../ui/UIButton';
import UILayout from '../../ui/UILayout';

const Backdrop = (props: any) => {
  return <UILayout className="layout" onClick={props.onClick} />;
};

const ModalOverlay = (props: any) => {
  return (
    <UIModal>
      <p onClick={() => props.setShowDish(false)} className="close">
        X
      </p>
      <div className="dish">
        <img
          src={process.env.REACT_APP_BASE_URL + props.dish.image}
          alt={props.dish.name}
          style={{
            objectFit: 'cover',
            aspectRatio: '375 / 254',
            width: '100%',
          }}
        />
        <div className="dish-display">
          <h2>{props.dish.name}</h2>
          <h4>{props.dish.ingredients}</h4>
          <img
            className="icon"
            src={process.env.REACT_APP_BASE_URL + props.dish.icon}
            alt={'Open now'}
          />
          <div className="price">
            <div className="lines"></div>
            <p>₪</p>&nbsp;<h3>{props.dish.price}</h3>
            <div className="lines"></div>
          </div>
        </div>
        <div className="section">
          <h4>Choose a side</h4>
          <label htmlFor="whitebread">
            <input
              type="radio"
              id="whitebread"
              name="sidedish"
              defaultChecked
            />
            <h5>White Bread</h5>
          </label>
          <label htmlFor="stickyrice">
            <input type="radio" id="stickyrice" name="sidedish" />
            <h5>Sticky Rice</h5>
          </label>
        </div>
        <div className="section">
          <h4>Changes</h4>
          <label htmlFor="withoutonion">
            <input type="checkbox" id="withoutonion" name="changes" />
            <h5>Without Onion</h5>
          </label>
          <label htmlFor="withoutpeanuts">
            <input type="checkbox" id="withoutpeanuts" name="changes" />
            <h5>Without Peanuts</h5>
          </label>
          <label htmlFor="lessspicy">
            <input type="checkbox" id="lessspicy" name="changes" />
            <h5>Less Spicy</h5>
          </label>
        </div>
        <div className="section">
          <h4>Quantity</h4>
          <label htmlFor="quantity">
            <div className="counter">
              –
              <input
                type="number"
                id="quantity"
                name="quantity"
                defaultValue="1"
              />
              +
            </div>
          </label>
        </div>

        <UIButton className="addtobag">
          <h4>ADD TO BAG</h4>
        </UIButton>
      </div>
    </UIModal>
  );
};

const DishModal = (props: any) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={() => props.setShowDish(false)} />,
        document.getElementById('backdrop-root')!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay dish={props.dish} setShowDish={props.setShowDish} />,
        document.getElementById('overlay-root')!
      )}
    </>
  );
};

export default DishModal;
