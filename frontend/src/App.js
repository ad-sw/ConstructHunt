import React, { useState, useEffect } from "react";
import { useDispatch /*, useSelector*/ } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
// import Navigation from "./components/Navigation";
import AboutUs from "./components/AboutUsPg"
import ProductModal from "./components/ProductModal";
// import AboutMe from "./components/AboutMeFooter/AboutMe";
// import Slideshow from "./components/HomeImages";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import SignupFormPage from "../src/components/SignupFormPage"
import ProductProfilePgModal from "./components/ProductProfilePage"
import NavBar from '../src/components/NavigationBar';
import HomePage from '../src/components/HomePage';
import ProductFormCreate from '../src/components/ProductModal_Create/ProductForm_Create';
// import ProductFormCreate from "./components/ProductModal_Create";

function App() {
  const dispatch = useDispatch();
  // const sessionUser = useSelector(state => state.session.user);
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
          {/* <Route exact path="/products/:id">
            <ProductProfilePgModal/>
          </Route> */}
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
