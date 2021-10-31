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
            <Route path='/add-new-plan'>
              <AddPlan></AddPlan>
            </Route>
            <Route path='/plans'>
              <Plans></Plans>
            </Route>
            <Route path='/place-order/:planId'>
              <PlaceOrder></PlaceOrder>
            </Route>
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
