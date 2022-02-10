import { NavLink } from 'react-router-dom';

function JobButton() {

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
