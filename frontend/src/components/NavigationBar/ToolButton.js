import { NavLink } from 'react-router-dom';

function JobButton() {

  return (
    <>
      <div class="dropdown">
      <button class="route-button" activeClassName="link-active" id="communityLink">Tools</button>
        <div class="dropdown-content">
          <NavLink to={`/under-construction`} exact={true} activeClassName='active' id="dropdownLink">Builder Club</NavLink>
          <NavLink to={`/under-construction`} exact={true} activeClassName='active' id="dropdownLink">Construct</NavLink>
        </div>
      </div>
    </>
  );
}

export default JobButton;
