import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
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
      <NavLink exact to={`/products/new/2`} id="communityLink2">Main info</NavLink>
      </>
    )

  let imagesMediaLink = (
      <>
      <NavLink exact to={`/products/new/3`} id="communityLink2">Images and media</NavLink>
      </>
    )

  let extrasLink = (
      <>
      <NavLink exact to={`/products/new/4`} id="communityLink2">Extras</NavLink>
      </>
    )

  let reviewLaunchLink = (
      <>
      <NavLink exact to={`/products/new/5`} id="communityLink2">Review & Launch</NavLink>
      </>
    )

  return (<>
    <header className="formNavbar">
      <div className="">
        <div className="link-active">{isLoaded && mainInfoLink}</div>
        <div className="link-active">{isLoaded && imagesMediaLink}</div>
        <div className="link-active">{isLoaded && extrasLink}</div>
        <div className="link-active">{isLoaded && reviewLaunchLink}</div>
      </div>
    </header>
    </>
  );
}

export default FormNavBar;
