import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

  const closeMenu = () => {
    setShowMenu(false);
  };

  document.addEventListener('click', closeMenu);

  return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  //full date format
  // let event = new Date(user.created_at);
  // let date = JSON.stringify(event)
  // date = date.slice(1,11).split('-')
  // date.push(date.shift())
  // date = date.join(',').replace(/\,/g, '/')
  let event = new Date(user?.created_at); //fri dec 31 2021
  let date = event.toLocaleDateString().slice(0,5) + event.toLocaleDateString().slice(7,9)

  return (
    <>
      <button onClick={openMenu} className="profile-button2">{sessionUser.username[0].toUpperCase()}
      </button>
      {showMenu && (
        <ul className="profile-dropdown" id="style">
          <li id="dropdownLink3">{user.username}</li>
          <li><NavLink to='/my-hunts' exact={true} activeClassName='active1' id="dropdownLink2">My hunts</NavLink></li>
          <li><NavLink to='/my-collections' exact={true} activeClassName='active1' id="dropdownLink2">My collections</NavLink></li>
          <li><NavLink to='/my-topics' exact={true} activeClassName='active1' id="dropdownLink2">My topics</NavLink></li>
          <li className="logoutBtn"id="dropdownLink4" onClick={logout}>Log Out</li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
