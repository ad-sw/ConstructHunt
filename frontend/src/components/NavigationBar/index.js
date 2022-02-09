import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import ProductButton from './ProductButton';
import CommunityButton from './CommunityButton';
import JobButton from './JobButton';
import AboutButton from './AboutButton';
import ToolButton from './ToolButton';
import AboutMe from './AboutMe';
import SignupFormModal from '../SignupFormModal';
import SearchBar from '../SearchBar';
import LoginFormModal from '../LoginFormModal';
import SubmitButton from './SubmitButton';
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

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <div className="t3"><SubmitButton/></div>
      <ProfileButton user={sessionUser} />
      </>
    );
  }

  if (!sessionUser) {
    sessionLinks = (
      <>
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

  let toolLinks = (
    <>
    <ToolButton user={sessionUser} id="toolLink" activeClassName="link-active"/>
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

  return (<>
    <header id="navbar">
      <NavLink exact to="/"><div className="profile-button"><div className="logoC">C</div></div></NavLink>
      <div className="searchBarT"><SearchBar/></div><div className="space-between"></div>
      <div className="linkGroup">
        <div id="productLink" activeClassName="link-active">{isLoaded && productLinks}</div>
        <div id="communityLink" activeClassName="link-active">{isLoaded && communityLinks}</div>
        <div id="toolLink" activeClassName="link-active">{isLoaded && toolLinks}</div>
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
