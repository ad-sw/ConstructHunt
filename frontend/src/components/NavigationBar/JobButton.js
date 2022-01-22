import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import * as sessionActions from '../../store/session';

function JobButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();

  return (
    <>
      <div class="dropdown">
      <button class="route-button" activeClassName="link-active" id="communityLink">Jobs</button>
        <div class="dropdown-content">
          <NavLink to={`/under-construction`} exact={true} activeClassName='active' id="dropdownLink">Post job</NavLink>
          <NavLink to={`/under-construction`} exact={true} activeClassName='active' id="dropdownLink">Find job</NavLink>
        </div>
      </div>
    </>
  );
}

export default JobButton;
