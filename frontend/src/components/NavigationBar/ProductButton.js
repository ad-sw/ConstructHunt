import { NavLink } from 'react-router-dom';

function ProductButton() {

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
