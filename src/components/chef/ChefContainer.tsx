import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import ChefRestaurantsTable from './ChefRestaurantsTable';
import ChefRestaurantsCarossel from './ChefRestaurantsCarossel';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/AppState';

const ChefsContainer = () => {
  const chef = useSelector((state: AppState) => state.chef);

  return chef ? (
    <ChefDev>
      <h6>CHEF OF THE WEEK :</h6>
      <div className="chef">
        <Link to={'/chef/' + chef._id}>
          <figure>
            <img
              src={process.env.REACT_APP_BASE_URL + chef.image}
              alt={chef.name}
            />
            <figcaption>
              <h1>{chef.name}</h1>
            </figcaption>
          </figure>
        </Link>

        <div>
          <p>{chef.descr}</p>
        </div>
      </div>
      <MediaQuery maxWidth={768} children={<ChefRestaurantsCarossel />} />
      <MediaQuery minWidth={769} children={<ChefRestaurantsTable />} />
    </ChefDev>
  ) : (
    <></>
  );
};

export default ChefsContainer;

const ChefDev = styled.div`
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
  @media only screen and (min-width: 769px) {
    h6 {
      font-size: 27px;
    }
    .chef {
      max-width: 1000px;
      display: flex;
      flex-direction: row;
      gap: 50px;
      figure {
        margin-left: 60px;
      }
      p {
        font-size: 22px;
        text-align: justify;
      }
    }
  }
`;
