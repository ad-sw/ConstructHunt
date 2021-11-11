import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: 'https://user-images.githubusercontent.com/86431563/141381468-537bdd3f-aab7-4f0f-ba86-e023447a01f7.jpg',
    caption: 'Example Product 1',
  },
  {
    url: 'https://www.asla.org/uploadedImages/CMS/HomePage_New/Salem-State-University.jpg',
    caption: 'Example Product 2'
  },
  {
    url: 'https://cdn.vox-cdn.com/thumbor/SGi7_tXRn20_sh9Jb6nPHfEgqWU=/0x0:5616x3744/1200x800/filters:focal(2359x1423:3257x2321)/cdn.vox-cdn.com/uploads/chorus_image/image/55392693/shutterstock_252259306.0.jpg',
    caption: 'Example Product 3'
  },
];

function Slideshow() {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
                  <center><img src={slideImage.url} alt="test" height="700px" width="1600px"></img>
                <p>{slideImage.caption}</p></center>
            </div>
          ))}
        </Slide>
      </div>
    )
}
export default Slideshow;
