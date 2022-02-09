import { NavLink } from 'react-router-dom';

function SubmitButton() {

  return (
    <>
      <div class="dropdown">
      <button activeClassName="link-active" id="submitLink">Submit</button>
        <div className="dropdown-content2">
          <NavLink to={`/products/new/1`} exact={true} activeClassName='active' id="dropdownLink">New product</NavLink>
        </div>
      </div>
    </>
  );
}

export default SubmitButton;
