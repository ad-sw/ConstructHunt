import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import AboutUs from "./components/AboutUsPg"
import ProductModal from "./components/ProductModal";
import AboutMe from "./components/AboutMeFooter/AboutMe";
import Slideshow from "./components/HomeImages";
import SearchBar from "./components/SearchBar";
import ProductFormCreate from "./components/ProductModal_Create";

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />

      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <h3 id="title1">Construct Hunt</h3>
            <Slideshow />
          </Route>
          <Route exact path="/about">
            <h3 id="title1">Construct Hunt</h3>
            <AboutUs />
          </Route>
          <Route exact path="/products">
            <SearchBar/>
            <ProductModal/>
            {sessionUser && <ProductFormCreate/>}
          </Route>
          <Route exact path="/products/:id">
            <SearchBar/>
            <ProductModal/>
            {sessionUser && <ProductFormCreate/>}
          </Route>
          <Route>
            <center>
            <h1>404:</h1>
            <h4>Page Not Found</h4>
            <img alt="test" style={{filter: "grayscale(100%)", border: "20px solid transparent"}} height="450" width="650" src="https://ultimate-survival-training.com/wp-content/uploads/2018/02/tourist-2.jpg"></img>
            </center>
          </Route>
        </Switch>
      )}
      <AboutMe/>
    </>
  );
}

export default App;
