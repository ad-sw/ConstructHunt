import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ProductModal from "./components/ProductModal";
import AboutMe from "./components/AboutMeFooter/AboutMe";
import Slideshow from "./components/HomeImages";
import SearchBar from "./components/SearchBar";
import ProductFormCreate from "./components/ProductModal_Create";

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  // const products = useSelector(state => state.session.products);
  // console.log(useSelector(state => state.session))
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
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/products">
            <SearchBar/>
            <ProductModal/>
            {sessionUser && <ProductFormCreate/>}
          </Route>
        </Switch>
      )}
      <AboutMe/>
    </>
  );
}

export default App;
