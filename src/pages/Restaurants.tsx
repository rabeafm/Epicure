import styled from 'styled-components';
import { useState } from 'react';
import RestaurantCard from '../components/resturants/RestaurantCard';
import RestaurantsNavbar from '../layout/RestaurantsNavbar';
import { Link } from 'react-router-dom';

const data = [
  {
    _id: '1',
    name: 'Claro',
    chef: 'Ran Shmueli',
    opens: '10:00',
    closes: '22:00',
    dateOpened: new Date('March 12, 2020, 23:10:20'),
    thumb: 'assets/restaurants/claro.png',
    image: 'assets/restaurants/claroBig.png',
    dishes: [''],
  },
  {
    _id: '2',
    name: 'Kab Kem',
    chef: 'Yariv Malili',
    opens: '13:00',
    closes: '22:00',
    dateOpened: new Date('August 19, 2020, 23:10:20'),
    thumb: 'assets/restaurants/kab-kem.png',
    image: 'assets/restaurants/claroBig.png',
    dishes: [''],
  },
  {
    _id: '3',
    name: 'Messa',
    chef: 'Aviv Moshe',
    opens: '08:00',
    closes: '13:00',
    dateOpened: new Date('April 4, 2020, 23:10:20'),
    thumb: 'assets/restaurants/messa.png',
    image: 'assets/restaurants/claroBig.png',
    dishes: [''],
  },
  {
    _id: '4',
    name: 'Lumina',
    chef: 'Meir Adoni',
    opens: '12:00',
    closes: '16:00',
    dateOpened: 'April 4, 2018, 23:10:20',
    thumb: 'assets/restaurants/lumina.png',
    image: 'assets/restaurants/claroBig.png',
    dishes: [''],
  },
  {
    _id: '5',
    name: 'Ya Pan',
    chef: 'Yuval Ben Neriah',
    opens: '16:00',
    closes: '22:00',
    dateOpened: 'April 4, 2021, 23:10:20',
    thumb: 'assets/restaurants/ya-pan.png',
    image: 'assets/restaurants/claroBig.png',
    dishes: [''],
  },
  {
    _id: '6',
    name: 'Tiger Lilly',
    chef: 'Yanir Green',
    opens: '20:00',
    closes: '24:00',
    dateOpened: 'May 12, 2016, 23:10:20',
    thumb: 'assets/restaurants/tiger-lilly.png',
    image: 'assets/restaurants/claroBig.png',
    dishes: [''],
  },
  {
    _id: '7',
    name: 'Nithan Thai',
    chef: 'Shahaf Shabtay',
    opens: '07:00',
    closes: '15:00',
    dateOpened: 'June 22, 2016, 23:10:20',
    thumb: 'assets/restaurants/nithan-thai.png',
    image: 'assets/restaurants/claroBig.png',
    dishes: [''],
  },
];

const Resturants = () => {
  const [filtered, setFiltered] = useState(data);

  const filterRestaurants = (filter: string) => {
    if (filter === 'new') {
      setFiltered(
        data.filter(
          (dat) => dat.dateOpened > new Date('Jan 01, 2020, 00:00:00')
        )
      );
    } else {
      if (filter === 'opennow') {
        const currentdate = new Date();
        const currenttime =
          (currentdate.getHours() < 10
            ? '0' + currentdate.getHours()
            : currentdate.getHours()) +
          ':' +
          currentdate.getMinutes();
        setFiltered(
          data.filter(
            (dat) => dat.opens < currenttime && currenttime < dat.closes
          )
        );
      } else {
        setFiltered(data);
      }
    }
  };

  return (
    <ResturantsContainer>
      <h3>RESTURANTS</h3>
      <RestaurantsNavbar filterRestaurants={filterRestaurants} />
      <ResturantsCardContainer>
        {filtered.map((dat: any) => (
          <RestaurantCard {...dat} key={dat._id} />
        ))}
      </ResturantsCardContainer>
    </ResturantsContainer>
  );
};

export default Resturants;

const ResturantsContainer = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResturantsCardContainer = styled.div`
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  justify-content: space-around;
`;
