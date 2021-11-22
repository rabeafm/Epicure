import { Route } from 'react-router-dom';
import './App.css';
// Layout Imports
import NavbarDesktop from './layout/NavbarDesktop';
import NavbarMobile from './layout/NavbarMobile';
import Footer from './layout/Footer';
// Pages Imports
import Homepage from './pages/Homepage';
import Restaurants from './pages/Restaurants';
import Chefs from './pages/Chefs';
import Restaurant from './pages/Restaurant';
import Chef from './pages/Chef';
import MediaQuery from 'react-responsive';

function App() {
  return (
    <>
      <MediaQuery maxWidth={768} children={<NavbarMobile />} />
      <MediaQuery minWidth={769} children={<NavbarDesktop />} />
      <Route path="/" exact children={<Homepage />} />
      <Route path="/restaurants">
        <Route path="/restaurants" exact />
        <Route path="/restaurants/new" />
        <Route path="/restaurants/most-popular" />
        <Route path="/restaurants/open-now" />
        <Restaurants />
      </Route>
      <Route path="/chefs" children={<Chefs />} />
      <Route
        path="/restaurant/:id"
        render={(props) => <Restaurant id={props.match.params.id} />}
      />
      <Route
        path="/chef/:id"
        render={(props) => <Chef id={props.match.params.id} />}
      />
      <Footer />
    </>
  );
}

export default App;
