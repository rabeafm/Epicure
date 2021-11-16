import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ChefRestaurantsCarossel from './ChefRestaurantsCarossel';

const data = [
  {
    name: 'Yossi Shitrit',
    image: 'assets/chefs/shitrit.png',
    description: `Chef Yossi Shitrit has been living and breathing his culinary dreams for
    more than two decades, including running the kitchen in his first
    restaurant, the fondly-remembered Violet, located in Moshav Udim.
    Shitrit's creativity and culinary acumen born of long experience are
    expressed in the every detail of each and every dish.`,
  },
];

const ChefsContainer = () => {
  return (
    <ChefDev>
      <h6>CHEF OF THE WEEK :</h6>
      <figure>
        <img
          src={process.env.REACT_APP_BASE_URL + data[0].image}
          alt={data[0].name}
        />
        <figcaption>
          <h1>{data[0].name}</h1>
        </figcaption>
      </figure>
      <p>{data[0].description}</p>
      <ChefRestaurantsCarossel />
    </ChefDev>
  );
};

export default ChefsContainer;

const ChefDev = styled.div`
  margin: 60px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  figure {
    img {
      width: 90vw;
      max-width: 433px;
      object-fit: cover;
    }
    figcaption {
      margin-top: -54px;
      padding: 10px 0;
      background-color: #fff;
      opacity: 0.8;
    }
  }
  p {
    padding: 0px 16px;
    width: 90%;
  }
`;
