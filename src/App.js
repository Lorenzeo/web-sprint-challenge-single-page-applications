import React from "react";
import {Switch, Route, Link} from 'react-router-dom'
import OrderForm from '.components/OrderForm'

const App = () => {



  return (
    <>
    <div className='App'>
      <header>
        <Link to="/">Home</Link>
      </header>
      <Switch>
          <Route exact path="/">
            <h1>Lambda Eats</h1>
            <p>We Code!, We BAKE!, We DELIVER!</p>
          </Route>
          <Route path="/pizza">
            <h2>Order your pizza here!</h2>
            <OrderForm/>
          </Route>
          
      </Switch>
      
    </div>
    </>
  );
};
export default App;
