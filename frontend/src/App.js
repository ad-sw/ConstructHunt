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
import SearchBar from "./components/SearchBar";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import SignupFormPage from "../src/components/SignupFormPage"
import ProductProfilePgModal from "./components/ProductProfilePage"
import NavBar from '../src/components/NavigationBar';
import HomePage from '../src/components/HomePage'
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
            <br></br><br></br><br></br>
            <p>Under Construct(ion)</p>
            <img alt="test" style={{filter: "grayscale(100%)", border: "10px solid transparent"}} height="450" width="650" src="https://ultimate-survival-training.com/wp-content/uploads/2018/02/tourist-2.jpg"/>
            </center>
          </Route>
          {/* <Route exact path="/products/:id">
            <ProductProfilePgModal/>
          </Route> */}
          <Route>
            <center>
            <br></br><br></br><br></br>
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

// function App() {
//   const [loaded, setLoaded] = useState(false);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     (async() => {
//       await dispatch(authenticate());
//       setLoaded(true);
//     })();
//   }, [dispatch]);

//   return (
//     <BrowserRouter>
//       <NavBar/>
//       <Switch>
//         <Route path='/' exact={true} >
//           <HomePage/>
//         </Route>
//         <Route path='/login' exact={true}>
//         {loaded && (
//           <LoginForm/>
//           )}
//         </Route>
//         <Route path='/sign-up' exact={true}>
//         {loaded && (
//           <SignUpForm/>
//           )}
//         </Route>
//         <Route path='/users' exact={true} >
//           <UsersList/>
//         </Route>
//         <Route path='/users/:userId' exact={true} >
//           <User/>
//         </Route>
//         <Route path='/routes/new' exact={true}>
//           <RouteCreateForm/>
//         </Route>
//         <Route path='/routes/:routeId' exact={true}>
//           <RoutePage/>
//         </Route>
//         <Route path='/routes/:routeId/edit' exact={true}>
//           <RouteEditForm/>
//         </Route>
//         {/* <Route path='/users/:userId/people' exact={true} >
//           <UserNonfriendsDashboard/>
//         </Route> */}
//         {/* <Route path='/users/:userId/friends' exact={true}>
//           <UserFriendsDashboard/>
//         </Route> */}
//         <Route path='/under-construction' exact={true}>
//           <ShopUnderConstruction/>
//         </Route>
//         <Route path='/about-us' exact={true}>
//           <ShopUnderConstruction/>
//         </Route>
//         <Route path='/about' exact={true}>
//           <AboutUs/>
//         </Route>
//         <Route path='/ambassador-program' exact={true}>
//           <ShopUnderConstruction/>
//         </Route>
//         <Route path='/faq' exact={true}>
//           <ShopUnderConstruction/>
//         </Route>
//         <Route path='/users/:userId/routes' exact={true}>
//           <RoutesDashboard/>
//         </Route>
//         <Route path='/users/:userId/explore' exact={true}>
//           <RoutesDashboard/>
//         </Route>
//         <Route path='/users/:userId/explore/:term' exact={true}>
//           <RoutesDashboard/>
//         </Route>
//         <Route path='/users/:userId/search' exact={true}>
//           <UserFriendsDashboard/>
//         </Route>
//         <Route path='/users/:userId/search/:term' exact={true}>
//           <UserFriendsDashboard/>
//         </Route>
//         <Route path='/users/:userId/find' exact={true}>
//           <UserNonfriendsDashboard/>
//         </Route>
//         <Route path='/users/:userId/find/:term' exact={true}>
//           <UserNonfriendsDashboard/>
//         </Route>
//         <Route path='/users/:userId/discover' exact={true}>
//           <UsersList/>
//         </Route>
//         <Route path='/users/:userId/discover/:term' exact={true}>
//           <UsersList/>
//         </Route>
//         <Route path='/users/:userId/browse' exact={true}>
//           <User/>
//         </Route>
//         <Route path='/users/:userId/browse/:term' exact={true}>
//           <User/>
//         </Route>
//         <Route>
//         {loaded && (
//           <center>
//             <h1 id="h1404">404:</h1>
//             Page Not Found
//             <div><img alt="test" height="580" width="375" src="https://i.pinimg.com/originals/ec/94/fa/ec94fa24a9d4dca2c0d627039763dbaa.png"></img></div>
//           </center>
//         )}
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// }

// export default App;
