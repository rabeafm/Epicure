import axios from 'axios';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { AppState } from '../store/AppState';
import { ActionType } from '../store/Action';
import RestaurantCard from '../components/restaurant/RestaurantCard';
import RestaurantsNavbar from '../components/restaurants/RestaurantsNavbar';

const Resturants = (props: any) => {
  const dispatch = useDispatch();
  const restaurants = useSelector((state: AppState) => state.restaurantsArrays);
  const [filtered, setFiltered] = useState(restaurants.All);
  const [page, setPage] = useState(0);
  const param = props.url.substring(props.url.lastIndexOf('/') + 1);

  const pages = () => {
    const arr = [];
    if (filtered && filtered[page] && filtered[page].pages) {
      for (let i = 0; i < filtered[page].pages; i++) {
        if (page - 3 < i && i < page + 3) {
          arr.push(
            <li
              key={i}
              className={i === page ? 'current' : ''}
              onClick={() => setPage(i)}
            >
              {i + 1}
            </li>
          );
        }
      }
      if (page < filtered[page].pages - 1)
        arr.push(
          <li key="next" onClick={() => setPage(page + 1)}>
            next &gt;&gt;
          </li>
        );
    }
    return (
      <ul className="paging">
        {page > 0 && (
          <li key="prev" onClick={() => setPage(page - 1)}>
            &lt;&lt; prev
          </li>
        )}
        {arr}
      </ul>
    );
  };

  useEffect(() => {
    if (!filtered[page])
      axios
        .get(
          `http://localhost:4001/api/admin/v1/rests/?limit=6&page=${
            page + 1
          }&cat=${param}`
        )
        .then((res) => {
          filtered[page] = res.data.data;
          switch (param) {
            case 'new':
              dispatch({
                type: ActionType.SET_RESTAURANTS,
                payload: { ...restaurants, New: filtered },
              });
              break;
            case 'open-now':
              dispatch({
                type: ActionType.SET_RESTAURANTS,
                payload: { ...restaurants, Open: filtered },
              });
              break;
            case 'most-popular':
              dispatch({
                type: ActionType.SET_RESTAURANTS,
                payload: { ...restaurants, Popular: filtered },
              });
              break;
            default:
              dispatch({
                type: ActionType.SET_RESTAURANTS,
                payload: { ...restaurants, All: filtered },
              });
              break;
          }
        });
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    console.log(restaurants);
    //setPage(0);
    switch (param) {
      case 'new':
        setFiltered(restaurants.New);
        break;
      case 'open-now':
        setFiltered(restaurants.Open);
        break;
      case 'most-popular':
        setFiltered(restaurants.Popular);
        break;
      default:
        setFiltered(restaurants.All);
    }
  }, [restaurants, param]);

  return (
    <RestaurantsContainer>
      <h3 className="restaurants-title">RESTAURANTS</h3>
      <RestaurantsNavbar />
      {filtered && filtered[page] && filtered[page].data && (
        <RestaurantsCardContainer>
          {filtered[page].data.map((restaurant: any) => (
            <RestaurantCard {...restaurant} key={restaurant._id} />
          ))}
          {restaurants.length % 3 !== 0 && <div className="flex-ghost"></div>}
          {restaurants.length % 3 === 2 && <div className="flex-ghost"></div>}
        </RestaurantsCardContainer>
      )}
      {pages()}
    </RestaurantsContainer>
  );
};

export default Resturants;

const RestaurantsContainer = styled.div`
  margin: 20px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .paging {
    margin: 20px 0;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;
    font-size: 18px;
    li {
      cursor: pointer;
    }
    .current {
      padding: 0 3px;
      border-bottom: 2px solid orange;
    }
  }
  @media only screen and (min-width: 769px) {
    max-width: 1100px;
    .restaurants-title {
      display: none;
    }
    .paging {
      margin: 10px 0;
      font-size: 20px;
    }
  }
`;

const RestaurantsCardContainer = styled.div`
  margin: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 10px;
  .flex-ghost {
    width: 170px;
  }

  @media only screen and (min-width: 769px) {
    margin-top: 30px;
    gap: 30px;
    .flex-ghost {
      width: 330px;
    }
  }
`;
