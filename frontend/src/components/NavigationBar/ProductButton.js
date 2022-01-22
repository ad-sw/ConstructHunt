import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import * as sessionActions from '../../store/session';

function ProductButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();

  return (
    <>
      <div className="dropdown">
      <div className="ttBtn"><button className="route-button" activeClassName="link-active" id="communityLink">Products</button></div>
        <div className="dropdown-content">
          <NavLink to={`/products`} exact={true} activeClassName='active' id="dropdownLink">Topics</NavLink>
          <NavLink to={`/products`} exact={true} activeClassName='active' id="dropdownLink">Collections</NavLink>
          <NavLink to={`/products`} exact={true} activeClassName='active' id="dropdownLink">Time travel</NavLink>
        </div>
      </div>
    </>
  );
}

export default ProductButton;
