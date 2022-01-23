import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
// import LogoutButton from '../auth/LogoutButton';
import ProfileButton from './ProfileButton';
import ProductButton from './ProductButton';
import CommunityButton from './CommunityButton';
import JobButton from './JobButton';
import AboutButton from './AboutButton';
import AboutMe from './AboutMe';
import LoginForm from '../auth/LoginForm';
import SignupFormModal from '../SignupFormModal';
import SearchBar from '../SearchBar';
import LoginFormModal from '../LoginFormModal'
import '../../../src/index.css';

function NavBar(){
  const [isLoaded, setIsLoaded] = useState(false)
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const history = useHistory();

  useEffect(() => {
    (async () => {
        setIsLoaded(true)
    })();
}, [dispatch, sessionUser])

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <>
  //     <ProfileButton user={sessionUser}/>
  //     </>
  //   );
  // }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <ProfileButton user={sessionUser} />
      </>
    );
  }

  if (!sessionUser) {
    sessionLinks = (
      <>
        {/* <NavLink className="RegUserDemoBtns2" to='/sign-in' exact={true} activeClassName='active1'>
          Sign in
        </NavLink>
        <NavLink className="RegUserDemoBtns" to='/sign-up' exact={true} activeClassName='active1'>
          Sign Up
        </NavLink> */}
        <LoginFormModal/>
        <SignupFormModal/>
      </>
    );
  }

  let productLinks = (
      <>
      <ProductButton user={sessionUser} id="productLink" activeClassName="link-active"/>
      </>
    )

  let communityLinks = (
      <>
      <CommunityButton user={sessionUser} id="communityLink" activeClassName="link-active"/>
      </>
    )

  let jobLinks = (
      <>
      <JobButton user={sessionUser} id="jobLink" activeClassName="link-active"/>
      </>
    )

  let aboutLinks = (
    <>
    <AboutButton user={sessionUser} id="aboutLink" activeClassName="link-active"/>
    </>
  )


  // if (!sessionUser) {
  //   sessionLinks = (
  //     <>
  //       <NavLink className="logBtns1" to='/login' exact={true} activeClassName='active1'>
  //         Login
  //       </NavLink>
  //       <NavLink className="logBtns1" to='/sign-up' exact={true} activeClassName='active1'>
  //         Sign Up
  //       </NavLink>
  //     </>
  //   );
  // }

  return (<>
    <header className="navbar">
      {/* <div id='linking'> */}
      <NavLink exact to="/"><div className="profile-button"><div className="logoC">C</div></div></NavLink>
      {/* </div> */}
      <div className="searchBarT"><SearchBar/></div><div className="space-between"></div>
      <div className="linkGroup">
        <div id="productLink" activeClassName="link-active">{isLoaded && productLinks}</div>
        <div id="communityLink" activeClassName="link-active">{isLoaded && communityLinks}</div>
        <div id="jobLink" activeClassName="link-active">{isLoaded && jobLinks}</div>
        <div id="aboutLink" activeClassName="link-active">{isLoaded && aboutLinks}</div>
      </div>
      <div id="logBtns">{isLoaded && sessionLinks}</div>
    </header>
    <AboutMe/>
    </>
  );
}

export default NavBar;
