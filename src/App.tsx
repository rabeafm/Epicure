import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { useDispatch /*, useSelector*/ } from 'react-redux';
import { ActionType } from './store/Action';
// Layout Imports
import NavbarMobile from './layout/NavbarMobile';
import NavbarDesktop from './layout/NavbarDesktop';
import Footer from './layout/Footer';
// Pages Imports
import Homepage from './pages/Homepage';
import Restaurants from './pages/Restaurants';
import Restaurant from './pages/Restaurant';

function App() {
  //const restaurants = useSelector((state: AppState) => state.restaurantsArrays);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('http://localhost:4001/api/admin/v1/chefs/').then((res) => {
      dispatch({ type: ActionType.SET_CHEFS, payload: res.data.data });
      dispatch({
        type: ActionType.SET_CHEF,
        payload:
          res.data.data[Math.floor(Math.random() * res.data.data.length)],
      });
    });
    axios.get('http://localhost:4001/api/admin/v1/dishes/').then((res) => {
      dispatch({ type: ActionType.SET_DISHES, payload: res.data.data });
    });

    axios
      .all([
        axios.get('http://localhost:4001/api/admin/v1/rests/'),
        axios.get('http://localhost:4001/api/admin/v1/rests/?cat=new'),
        axios.get('http://localhost:4001/api/admin/v1/rests/?cat=most-popular'),
        axios.get('http://localhost:4001/api/admin/v1/rests/?cat=open-now'),
      ])
      .then(
        axios.spread((...responses) => {
          dispatch({
            type: ActionType.SET_RESTAURANTS,
            payload: {
              All: [responses[0].data.data],
              New: [responses[1].data.data],
              Popular: [responses[2].data.data],
              Open: [responses[3].data.data],
            },
          });
        })
      );
  }, [dispatch]);

  return (
    <>
      <MediaQuery maxWidth={768} children={<NavbarMobile />} />
      <MediaQuery minWidth={769} children={<NavbarDesktop />} />
      <Route path="/" exact children={<Homepage />} />
      {/* <Route path="/restaurants"> */}
      <Route
        path="/restaurants"
        exact
        render={(props) => <Restaurants url={props.match.url} />}
      />
      <Route
        path="/restaurants/new"
        render={(props) => <Restaurants url={props.match.url} />}
      />
      <Route
        path="/restaurants/most-popular"
        render={(props) => <Restaurants url={props.match.url} />}
      />
      <Route
        path="/restaurants/open-now"
        render={(props) => <Restaurants url={props.match.url} />}
      />
      {/* </Route> */}
      <Route path="/restaurant/:id">
        <Route
          exact
          path="/restaurant/:id"
          render={(props) => (
            <Restaurant id={props.match.params.id} match={props.match} />
          )}
        />
        <Route
          path="/restaurant/:id/lunch"
          render={(props) => (
            <Restaurant id={props.match.params.id} match={props.match} />
          )}
        />
        <Route
          path="/restaurant/:id/dinner"
          render={(props) => (
            <Restaurant id={props.match.params.id} match={props.match} />
          )}
        />
      </Route>
      {/*<Route path="/chefs" children={<Chefs />} />
      <Route
        path="/restaurant/:id"
        render={(props) => <Restaurant id={props.match.params.id} />}
      />
      <Route
        path="/chef/:id"
        render={(props) => <Chef id={props.match.params.id} />}
      /> */}
      <Footer />
    </>
  );
}

export default App;
