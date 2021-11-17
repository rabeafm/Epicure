import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
// Layout Imports
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
// Pages Imports
import Homepage from './pages/Homepage';
import Restaurants from './pages/Restaurants';
import Chefs from './pages/Chefs';
import Dishes from './pages/Dishes';
import Restaurant from './pages/Restaurant';
import Chef from './pages/Chef';
import Dish from './pages/Dish';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Route path="/" exact children={<Homepage />} />
      <Route path="/restaurants">
        <Route path="/restaurants" exact />
        <Route path="/restaurants/new" />
        <Route path="/restaurants/most-popular" />
        <Route path="/restaurants/open-now" />
        <Restaurants />
      </Route>
      <Route path="/chefs" children={<Chefs />} />
      <Route path="/dishes" children={<Dishes />} />
      <Route
        path="/restaurant/:id"
        render={(props) => <Restaurant id={props.match.params.id} />}
      />
      <Route
        path="/chef/:id"
        render={(props) => <Chef id={props.match.params.id} />}
      />
      <Route
        path="/dish/:id"
        render={(props) => <Dish id={props.match.params.id} />}
      />
      <Footer />
    </Fragment>
  );
}

export default App;
