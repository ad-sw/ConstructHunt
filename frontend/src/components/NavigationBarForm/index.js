import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import '../../../src/index.css';

function FormNavBar(){
  const [isLoaded, setIsLoaded] = useState(false)
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
        setIsLoaded(true)
    })();
  }, [dispatch, sessionUser])

  let mainInfoLink = (
      <>
      <div id="communityLink2">
        <NavLink to={`/products/new`} exact={true}>Main info</NavLink>
        </div>
      </>
    )

  let imagesMediaLink = (
      <>
      <div id="communityLink2">
        <NavLink to={`/products/new`} exact={true}>Images and media</NavLink>
      </div>
      </>
    )

// <NavLink to={`/under-construction`} exact={true} activeClassName='active' id="dropdownLink">Post job</NavLink>
  let extrasLink = (
      <>
      <div id="communityLink2">
        <NavLink to={`/products/new`} exact={true} >Extras</NavLink>
      </div>
      </>
    )

  let reviewLaunchLink = (
      <>
      <div id="communityLink2">
        <NavLink to={`/products/new`} exact={true}>Review & Launch</NavLink>
      </div>
      </>
    )

  return (<>
    <header className="formNavbar">
      <div className="">
        <div id="" activeClassName="">{isLoaded && mainInfoLink}</div>
        <div id="" activeClassName="">{isLoaded && imagesMediaLink}</div>
        <div id="" activeClassName="">{isLoaded && extrasLink}</div>
        <div id="" activeClassName="">{isLoaded && reviewLaunchLink}</div>
      </div>
    </header>
    </>
  );
}

export default FormNavBar;
