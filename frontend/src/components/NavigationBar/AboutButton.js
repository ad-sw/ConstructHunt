import { NavLink } from 'react-router-dom';

function AboutButton() {

  return (
    <>
      <div class="dropdown">
      <button class="route-button" activeClassName="link-active" id="communityLink">About</button>
        <div class="dropdown-content">
          <NavLink to={`/about`} exact={true} activeClassName='active' id="dropdownLink">About us</NavLink>
          <NavLink to={`/ambassador-program`} exact={true} activeClassName='active' id="dropdownLink">Ambassadors</NavLink>
          <NavLink to={`/faq`} exact={true} activeClassName='active' id="dropdownLink">FAQs</NavLink>
        </div>
      </div>
    </>
  );
}

export default AboutButton;
