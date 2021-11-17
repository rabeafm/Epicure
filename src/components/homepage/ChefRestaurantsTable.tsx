import UITable from '../../ui/UITable';
import RestaurantCard from '../resturants/RestaurantCard';

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

const ChefRestaurantsTable = () => {
  return (
    <UITable>
      <p>Yossi’s restaurants :</p>
      <div className="inner">
        {data
          .map((dat: any) => {
            dat.chef = '';
            return <RestaurantCard {...dat} key={dat._id} />;
          })
          .slice(0, 3)}
      </div>
    </UITable>
  );
};

export default ChefRestaurantsTable;
