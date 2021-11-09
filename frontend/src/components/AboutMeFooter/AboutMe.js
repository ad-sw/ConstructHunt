import React from "react";
import "./AboutMe.css";

const AboutMe = () =>{
    return(
    <div className='footer'>
        <div className="AboutMe">
        <h4 id="author">By Adeline:</h4>
            <div className="links">
            <a id='linkedin' href="https://linkedin.com/in/ad-sw" alt="LinkedIn">
                <img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" alt="LinkedIn" width="30" height="30"></img>
              </a>
              <a id='github' href="https://github.com/ad-sw/Musenote" alt="GitHub">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F25%2F25231.png&f=1&nofb=1" alt="GitHub" width="30" height="30"></img>
              </a>
            </div>
        </div>
        </div>
    )
}

export default AboutMe;
