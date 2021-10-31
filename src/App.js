// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import NotFound from './Components/Home/NotFound/NotFound';
import AddPlan from './Components/AddPlan/AddPlan';
import Plans from './Components/Plans/Plans';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/add-new-plan'>
              <AddPlan></AddPlan>
            </PrivateRoute>
            <Route path='/plans'>
              <Plans></Plans>
            </Route>
            <PrivateRoute path='/place-order/:planId'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
