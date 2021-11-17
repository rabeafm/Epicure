import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Chefs from './components/chefs/ChefProfile';
import Resturants from './pages/Restaurants';
import Homepage from './pages/Homepage';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import './App.css';
import RestaurantPage from './components/resturants/RestaurantPage';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Route path="/" exact children={<Homepage />} />
      <Route path="/chefs" children={<Chefs />} />
      <Route path="/restaurants">
        <Route path="/restaurants" exact />
        <Route path="/restaurants/new" />
        <Route path="/restaurants/most-popular" />
        <Route path="/restaurants/open-now" />
        <Resturants />
      </Route>
      <Route path="/chef/:id" />
      <Route path="/dish/:id" />
      <Route
        path="/restaurant/:id"
        render={(props) => <RestaurantPage id={props.match.params.id} />}
      />
      <Footer />
    </Fragment>
  );
}

export default App;
