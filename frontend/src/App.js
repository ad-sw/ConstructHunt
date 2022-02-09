import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import * as sessionActions from "./store/session";
import AboutUs from "./components/AboutUsPg"
import LoginForm from "./components/auth/LoginForm";
import SignupFormPage from "../src/components/SignupFormPage"
import NavBar from '../src/components/NavigationBar';
import HomePage from '../src/components/HomePage';
import ProductFormCreate from '../src/components/ProductModal_Create/ProductForm_Create';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path='/sign-in' exact={true}>
            <LoginForm/>
          </Route>
          <Route path='/sign-up' exact={true}>
          {isLoaded && (
            <SignupFormPage/>
            )}
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/products">
          <center>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <p>Under Construct(ion)</p>
            <img alt="test" style={{filter: "grayscale(100%)", border: "10px solid transparent"}} height="450" width="650" src="https://ultimate-survival-training.com/wp-content/uploads/2018/02/tourist-2.jpg"/>
            </center>
          </Route>
          <Route exact path="/products/new/1">
            <ProductFormCreate page={1}/>
          </Route>
          <Route exact path="/products/new/2">
            <ProductFormCreate page={2}/>
          </Route>
          <Route exact path="/products/new/3">
            <ProductFormCreate page={3}/>
          </Route>
          <Route exact path="/products/new/4">
            <ProductFormCreate page={4}/>
          </Route>
          <Route exact path="/products/new/5">
            <ProductFormCreate page={5}/>
          </Route>
          <Route>
            <center>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <p>Under Construct(ion)</p>
            <img alt="test" style={{filter: "grayscale(100%)", border: "10px solid transparent"}} height="450" width="650" src="https://ultimate-survival-training.com/wp-content/uploads/2018/02/tourist-2.jpg"/>
            </center>
          </Route>
        </Switch>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
