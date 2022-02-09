import './AboutUs.css';

function AboutUs() {
  const descriptionAbout = document?.getElementById('descriptionAbout')
  const searchListVis = document?.getElementsByClassName("searchList")[0];
  const searchBar2 = document.getElementsByClassName('searchBarExpands')[0];

  descriptionAbout?.addEventListener("click", function() {
    searchListVis?.classList?.add('hide')
    searchBar2?.classList?.remove('more');
});

  return (
      <div id="descriptionAbout">
        <div className="innerDiv">
            <div id="textDesc">
              <center>
                Construct Hunt surfaces the best new products, every day. It's a place for product-loving enthusiasts to share and geek out about the latest buildings, parks, city plans, neighborhoods, and hub centers in development.
              </center>
            </div>
            {/* <div className="backgroundThing"><img className="backgroundThing" src="https://user-images.githubusercontent.com/86431563/150698136-eae20d3c-dd88-4af4-b4e9-db31915c7b4e.jpg"/></div> */}
            {/* <div className="cropPicsAbout"><center> */}
            <div className="backgroundThing"></div>
        </div>
              {/* <img src="https://craftoak.com/storage/app/media/street-map-1478.jpg"/> */}
              {/* <img id="banner" alt="test" src="https://media-exp1.licdn.com/dms/image/C5616AQGy6Fi8VKR87A/profile-displaybackgroundimage-shrink_200_800/0/1609543803357?e=1641427200&v=beta&t=P8mv8JT8vy3TCQuWpeRk_E8dcw4wx6_XzhtJ6KnJsRE"></img>
              <img id="banner2" alt="test" src="https://media-exp1.licdn.com/dms/image/C5616AQGy6Fi8VKR87A/profile-displaybackgroundimage-shrink_200_800/0/1609543803357?e=1641427200&v=beta&t=P8mv8JT8vy3TCQuWpeRk_E8dcw4wx6_XzhtJ6KnJsRE"></img>
              <img id="banner3" alt="test" src="https://media-exp1.licdn.com/dms/image/C5616AQGy6Fi8VKR87A/profile-displaybackgroundimage-shrink_200_800/0/1609543803357?e=1641427200&v=beta&t=P8mv8JT8vy3TCQuWpeRk_E8dcw4wx6_XzhtJ6KnJsRE"></img> */}
            {/* </center></div> */}
      </div>
  );
}

export default AboutUs;
