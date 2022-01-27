import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import * as sessionActions from '../../store/session';
import '../../../src/index.css';

function CommunityButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();


  return (
    <>
      <div class="dropdown">
      <button class="route-button" activeClassName="link-active" id="communityLink">Community</button>
        <div class="dropdown-content">
          <NavLink to={`/users/search`} exact={true} id="dropdownLink">Discussions</NavLink>
          <NavLink to={`/users/find`} exact={true} id="dropdownLink">Makers Grant</NavLink>
        </div>
      </div>
    </>
  );
}

export default CommunityButton;
