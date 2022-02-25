import React, {useState, useEffect} from "react";
import {Switch, Route, Link} from 'react-router-dom'
import OrderForm from './components/OrderForm'
import schema from './components/Schema'
import * as yup from 'yup'
import axios from 'axios'

  const initialFormValues ={
    name: '',
    size: '',
    instructions: '',
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false
  }
  const initialFormErrors = {
    name: '',
    instructions: '',
    size:'',
    
  }

const initialDisabled = true


const App = () => {
  const [orders, setOrders] = useState(initialFormErrors)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewOrder = newOrder => {
    axios.post(`https://reqres.in/api/orders`, newOrder)
    .then(res => {
      console.log(res)
      setOrders([res.data, ...orders])
      setFormValues(initialFormValues)
    }).catch(err => console.error(err))
  }

  

  const formSubmit = () =>{
    const newOrder = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }
      postNewOrder(newOrder)
     } 
  
  const validate = (name, value) => {
    yup.reach(schema, name)
        .validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: ''}))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }
  const inputChange = (name, value) =>{
    validate(name,value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
 
  useEffect(()=>{
    schema.isValid(formValues)
    .then(valid=> setDisabled(!valid))
  }, [formValues])


  return (
    <>
    <div className='App'>
      <header>
        <Link to="/pizza" id="order-pizza" >Home</Link>
        <Link to="/pizza" id="">Order Pizza</Link>
      </header>
      <Switch>
          <Route exact path="/">
            <h1>Lambda Eats</h1>
            <p>We Code!, We BAKE!, We DELIVER!</p>
          </Route>
          <Route exact path="/pizza" >
            <h2>Order your pizza here!</h2>
            <OrderForm 
            errors={formErrors}
            change={inputChange}
            values={formValues}
            submit ={formSubmit}
            disabled={disabled}
            />
          </Route>
          
      </Switch>
      
    </div>
    </>
  );
};
export default App;
