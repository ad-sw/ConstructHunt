import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import {searchProducts} from '../src/store/product';
import ProductModal from "./components/ProductModal";
import AboutMe from "./components/AboutMeFooter/AboutMe";
import ProductFormCreate from "./components/ProductModal_Create";

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  // const products = useSelector(state => state.session.products);
  // console.log(useSelector(state => state.session))
  const [search, setSearch] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />

      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/products">
            {<form className="search" onSubmit={(e) => {
              if (search) {
              e.preventDefault();
              dispatch(searchProducts(search));
              }}
            }>
            <input
            className="searchArea" type="text" name="search" value={search}
            onChange={e => setSearch(e.target.value)}
            ></input>
            <button className='searchBtn' type="submit">Search Products</button>
            </form>}
            {<ProductModal/>}
            {sessionUser && <ProductFormCreate/>}
          </Route>
        </Switch>
      )}
      <AboutMe/>
    </>
  );
}

export default App;
