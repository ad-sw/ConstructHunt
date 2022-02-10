import { NavLink } from 'react-router-dom';
import '../../../src/index.css';

function CommunityButton() {

  return (
    <>
      <div class="dropdown">
      <button class="route-button" activeClassName="link-active" id="communityLink">Community</button>
        <div class="dropdown-content">
          <NavLink to={`/users/search`} exact={true} id="dropdownLink">Discussions</NavLink>
          <NavLink to={`/users/find`} exact={true} id="dropdownLink">Makers Grant</NavLink>
        </div>
      </div>
    </>
  );
}

export default CommunityButton;
