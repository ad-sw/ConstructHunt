import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import * as sessionActions from '../../store/session';
import {getProducts} from '../../store/product'

function SubmitButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();

  const submitTry = async(e) => {
    e.preventDefault();
    await dispatch(getProducts());
    return history.push('/products/new/1')
  }

  return (
    <>
      <div class="dropdown">
      <button activeClassName="link-active" id="submitLink">Submit</button>
        <div className="dropdown-content2">
          <button activeClassName='active' id="dropdownLink2" onClick={submitTry}><b>New product</b></button>
        </div>
      </div>
    </>
  );
}

export default SubmitButton;
