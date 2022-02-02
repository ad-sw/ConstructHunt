import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createProduct} from '../../store/product';
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDropzone } from 'react-dropzone'
import FormNavBar from '../NavigationBarForm'

function ProductFormCreate({setShowModal, page}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [topic, setTopic] = useState('');
  const [tagline, setTagline] = useState('');
  const [link, setLink] = useState('');
  const [galleryImage1, setGalleryImage1] = useState('');
  const [galleryImage2, setGalleryImage2] = useState('');
  const [galleryImage3, setGalleryImage3] = useState('');
  const [firstReview, setFirstReview] = useState('');
  // const [page, setPage] = useState(1);
  const [errors, setErrors] = useState([]);
  const [price, setPrice] = React.useState('free');

  function nextPage() {
    const errors = [];

    if (page === 1){
      if (!link.length) errors.push("Please enter a link")
      if ((link.split('.com')[0].length < 9) !== false) errors.push("Please enter a full valid link")
      if (link.slice(Math.max(link.length - 4, 1)) !== '.com') errors.push("Please enter a valid link ending in '.com'")
    }
    if (page === 2){
      if (!name.length) errors.push("Please enter a product name")
      if (name.length > 41) errors.push("Please enter a product name shorter than 40 characters")
      if (!tagline.length) errors.push("Please enter a tagline")
      if (tagline.length > 61) errors.push("Please enter a tagline shorter than 40 characters")
      if (!link.length) errors.push("Please enter a link")
      if (link.slice(Math.max(link.length - 4, 1)) !== '.com') errors.push("Please enter a valid link ending in '.com'")
      if (!description.length) errors.push("Please enter a description")
      if (description.length > 261) errors.push("Please enter a description shorter than 60 characters")
    }
    setErrors(errors)
    // if(!errors.length) setPage((page) => page +1);
  }

  function prevPage() {
    // if(!errors.length) setPage((page) => page -1);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = [];
    // const new_event = await dispatch(newEvent({
    //   hostId,
    //   name,
    //   description,
    //   start_date,
    //   end_date,
    //   venue,
    //   venue_types,
    //   address,
    //   city,
    //   state: state.value,
    //   zip,
    //   // country: country.value,
    //   // lat,
    //   // lng,
    //   genres,
    //   types,
    //   image: image[0],
    //   video,
    // }))
    // .then(() => {
    //   setName("");
    //   setDescription("");
    //   setStart_date(null);
    //   setEnd_date(null);
    //   setVenue("");
    //   setVenue_types(null);
    //   setCity("");
    //   setState("")
    //   setCountry("");
    //   // setLat(null);
    //   // setLng(null);
    //   setGenres(null);
    //   setTypes([]);
    //   setImage([]);
    //   setVideo([]);
    // })
    // .catch(async (res) => {
    //   const data = await res.json();
    //   if (data && data.errors) {
    //     newErrors = data.errors;
    //     setErrors(newErrors);
    //   }
    //   });
    //   if(new_event) history.push(`/events/${new_event.id}`)
    }

    // const updateImageFile = (e) => {
    //   const file = e.target.files[0]
    //   if (file) setImage(file);
    // };

    // const updateVideoFile = (e) => {
    //   const file = e.target.files[0];
    //   if (file) setVideo(file);
    // };

    const handleChange = (e) => {
      setPrice(e.target.value)
    }
    const resetRadioState = () => {
      setPrice('');
    }

  return (<>
    <form
      onSubmit={handleSubmit}
      className='field2'>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
        {page === 1 ? (<>
        <div id='pageWrap'>
          <div className="leftSide3">
            <img src="https://image.freepik.com/free-vector/flat-engineering-construction-illustrated_23-2148892788.jpg" width="88%" height="115%"/>
          </div>
          <div className="behindBack"></div>
          <div className="backColor">
            <div className='contents'>
              <div className="formWrap">
              Submit a product
              </div>
              <div className="classicBio">
                Found a cool product you want everyone to know about? Or maybe you made one yourself and want the world to know about it?
                You're in the right place. So relax and follow the steps.
              </div>
              <div className="someTxt">Link to the product</div>
              <input
              className="test3"
              type="url"
              placeholder="https://www.constructhunt.herokuapp.com/"
              value={link}
              required
              onFocus={(e) => setLink('https://')}
              onChange={(e) => setLink(e.target.value)}
              />
              <button className="createB5" type='submit' onClick={(e) => {e.preventDefault(); history.push(`/products/new/2`);}}>Get started</button>
              <div className="Qs">Frequent questions</div>
              <div className="totalWidth"><a className="linkThing" href="https://help.producthunt.com/en/articles/5473056-how-to-post-main-info" target="_blank" rel="noopener noreferrer">The info you need to come prepared with to post <svg width="6" height="12" xmlns="http://www.w3.org/2000/svg" class="styles_arrow__I_9GT"><path d="M1.781.375A1 1 0 00.22 1.625L3.72 6l-3.5 4.375a1 1 0 101.562 1.25l4-5a1 1 0 000-1.25l-4-5z" fill="#9ba1a1"></path></svg></a></div>
              <div className="totalWidth"><a className="linkThing" href="https://help.producthunt.com/en/articles/5473242-how-to-post-launching" target="_blank" rel="noopener noreferrer">What happens after immediately launching <svg width="6" height="12" xmlns="http://www.w3.org/2000/svg" class="styles_arrow__I_9GT"><path d="M1.781.375A1 1 0 00.22 1.625L3.72 6l-3.5 4.375a1 1 0 101.562 1.25l4-5a1 1 0 000-1.25l-4-5z" fill="#9ba1a1"></path></svg></a></div>
              <div className="totalWidth"><a className="linkThing" href="https://help.producthunt.com/en/articles/5473225-how-to-post-team" target="_blank" rel="noopener noreferrer">The launch team — know your role <svg width="6" height="12" xmlns="http://www.w3.org/2000/svg" class="styles_arrow__I_9GT"><path d="M1.781.375A1 1 0 00.22 1.625L3.72 6l-3.5 4.375a1 1 0 101.562 1.25l4-5a1 1 0 000-1.25l-4-5z" fill="#9ba1a1"></path></svg></a></div>
            </div>
          </div>
        </div>
        </>) : null}


        {page === 2 ? (<>
        <div id="pageWidth">
          <div className="hereWeGo">
            <div className='thingBehindgoTopp'></div>
            <div className="goTopp">Status: Draft</div>
          <div className="anotherDiv">
            <div className="spaceBehindLeft">
              <div className="leftSide2">
                <FormNavBar page={2}/>
              </div>
            </div>
            <div className="backColor2">
              <div className="contents2">
                <div className="titlePg2">Tell us more about this product</div>
                <div className="innerBioPg2">We'll need its name, tagline, links, topics and description.</div>
                <div className="inlineTry">
                  <div className="inputHeaderPg3">Name of the product</div>
                  <div className="greySide">{name.length}/40</div>
                </div>
                <input
                type="text"
                className='test3'
                placeholder="Simply the name of the product"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

                <div className="inlineTry">
                  <div className="inputHeaderPg3">Tagline</div>
                  <div className="greySide">{tagline.length}/60</div>
                </div>
                <input
                type="text"
                className='test3'
                placeholder="Concise and descriptive tagline for the product"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                />

                <div className="linkHead">Link</div>
                <div className="inputHeaderPg3">Link to the product</div>
                <input
                type="text"
                className='test3'
                placeholder="https://"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                />

                <div className="linkHead">Topic</div>
                <div className="inputHeaderPg3">Select a topic</div>
                <input
                type="text"
                className='test3'
                placeholder="Select a topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                />

                <div className="linkHead">Description</div>
                <div className="inlineTry">
                  <div className="inputHeaderPg3">Description of the product</div>
                  <div className="inline2">
                    <div className="greySide">260 characters max</div>
                    <div className="diffColor">({Math.round((description.length / 260) * 100 )+'%'})</div>
                  </div>
                </div>

                <div className="barNDescription">
                  <div className="descriptionBar">
                    <div className="descriptionTotal"
                    style={{width: (description.length / 260)*100}}>
                    </div>
                  </div>
                  <textarea
                  type="text"
                  className='test31'
                  placeholder="Short description of the product"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <button className="createB6" type='submit' onClick={(e) => {e.preventDefault(); history.push(`/products/new/3`);}}>Next step: Images and media</button>
              </div>
              </div>
            </div>
          </div>
        </div>
        </>) : null}


        {page === 3 ? (<>
        <div id="pageWidth">
          <div className="hereWeGo">
            <div className='thingBehindgoTopp'></div>
            <div className="goTopp">Status: Draft</div>
          <div className="anotherDiv">
            <div className="spaceBehindLeft">
              <div className="leftSide2">
                <FormNavBar/>
              </div>
            </div>
            <div className="backColor2">
              <div className="contents2">
                <div className="titlePg2">Thumbnail</div>
                <div className="innerBioPg2">Let's make your product look nice</div>
                <div className="inputHeaderPg3">Paste a URL</div>
                <input
                type="text"
                className='test3'
                placeholder="Thumbnail image URL here"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                />
                <div className="linkHead">Gallery</div>
                <div className="inputHeaderPg4">
                  The first image will be used as the social preview when your link is shared online.
                  <br></br>We recommend 3 image URLs.  <a href="https://help.producthunt.com/en/articles/5473122-how-to-post-media" target="_blank" rel="noopener noreferrer">Read our tips for great product galleries →</a>
                </div>
                <input
                type="text"
                className='test4'
                placeholder="Gallery image URL 1"
                value={galleryImage1}
                onChange={(e) => setGalleryImage1(e.target.value)}
                />
                <input
                type="text"
                className='test4'
                placeholder="Gallery image URL 2"
                value={galleryImage2}
                onChange={(e) => setGalleryImage2(e.target.value)}
                />
                <input
                type="text"
                className='test4'
                placeholder="Gallery image URL 3"
                value={galleryImage3}
                onChange={(e) => setGalleryImage3(e.target.value)}
                />
                <button className="createB7" type='submit' onClick={(e) => {e.preventDefault(); history.push(`/products/new/4`);}}>Next step: Extras</button>
              </div>
              </div>
            </div>
          </div>
        </div>
        </>) : null}


        {page === 4 ? (<>
        <div id="pageWidth">
          <div className="hereWeGo">
            <div className='thingBehindgoTopp'></div>
            <div className="goTopp">Status: Draft</div>
          <div className="anotherDiv">
            <div className="spaceBehindLeft">
              <div className="leftSide2">
                <FormNavBar/>
              </div>
            </div>
            <div className="backColor2">
              <div className="contents2">
                <div className="titlePg2">Pricing</div>
                <div className="innerBioPg8">The community really appreciates knowing.</div>
                <div className="group3">
                  <input
                  type="radio"
                  value="free"
                  checked={price === 'free'}
                  onChange={handleChange}
                  onClick={resetRadioState}
                  />
                  <div className="group2">
                    <div className="inputHeaderPgs">Free</div>
                    <div className="underneathTxt">This product is free to use (i.e. open to the public)</div>
                  </div>
                </div>
                <div className="group">
                  <input
                  type="radio"
                  value="paid"
                  checked={price === 'paid'}
                  onChange={handleChange}
                  onClick={resetRadioState}
                  />
                  <div className="group2">
                    <div className="inputHeaderPgs">Paid</div>
                    <div className="underneathTxt">This product requires payment and there is no free option (i.e. rent)</div>
                  </div>
                </div>
                <div className="linkHead">Write the first comment</div>
                <div className="inputHeaderPg4">
                  This comment will be posted when your product launches. <br></br>Adding a first comment is essential to get the discussion started.
                </div>
                <textarea
                  type="text"
                  className='test30'
                  placeholder="Explain how you discovered this product... invite people to join the conversation, ask questions to the Makers."
                  value={firstReview}
                  onChange={(e) => setFirstReview(e.target.value)}
                  />
                <button className="createB8" type='submit' onClick={(e) => {e.preventDefault(); history.push(`/products/new/5`);}}>Next step: Launch Checklist</button>
              </div>
              </div>
            </div>
          </div>
        </div>
        </>) : null}


        {page === 5 ? (<>
        <div id="pageWidth">
          <div className="hereWeGo">
            <div className='thingBehindgoTopp'></div>
            <div className="goTopp">Status: Draft</div>
          <div className="anotherDiv">
            <div className="spaceBehindLeft">
              <div className="leftSide2">
                <FormNavBar/>
              </div>
            </div>
            <div className="backColor2">
              <div className="contents2">
                <div className="titlePg2">Required info</div>
                <div className="innerBioPg2">Check that you've completed all of the required information.</div>
                <div className="twoWays">
                  <div className="inputHeaderPg3">
                    {name && (
                    <img className="dot" src="https://user-images.githubusercontent.com/86431563/152068907-c45b7f1e-e81c-4abe-b770-3cbb82758f76.PNG"/>
                    )}
                    {!name && (
                    <img className="dot" src="https://user-images.githubusercontent.com/86431563/152070474-0edde74e-6e96-468b-ac5c-1a3d784635a1.PNG"/>
                    )}
                    Product name
                  </div>
                  <div className="inputHeaderPg3">
                    {tagline && (
                    <img className="dot" src="https://user-images.githubusercontent.com/86431563/152068909-42d0103a-a198-4d9f-a9f8-faa831efb338.PNG"/>
                    )}
                    {!tagline && (
                    <img className="dot" src="https://user-images.githubusercontent.com/86431563/152070472-db9cec11-2b35-4146-83aa-72e712698e7f.PNG"/>
                    )}
                    Product tagline
                  </div>
                  <div className="inputHeaderPg3">
                    {description && (
                    <img className="dot" src="https://user-images.githubusercontent.com/86431563/152068918-3ed0a083-569a-400d-b68d-5dd9354b27a8.PNG"/>
                    )}
                    {!description && (
                    <img className="dot" src="https://user-images.githubusercontent.com/86431563/152070471-6835cf70-227b-4d22-8fdd-29e901cf7c69.PNG"/>
                    )}
                    Description
                  </div>
                  <div className="inputHeaderPg3">
                    {topic && (
                    <img className="dot" src="https://user-images.githubusercontent.com/86431563/152068919-fef304fc-2f78-45ca-965f-7f0160c6c808.PNG"/>
                    )}
                    {!topic && (
                    <img className="dot" src="https://user-images.githubusercontent.com/86431563/152070470-13d159d8-5fe7-4c8c-bc05-433973bb079c.PNG"/>
                    )}
                    Topic
                  </div>
                  <div className="inputHeaderPg3">
                    {thumbnail && (
                    <img className="dot" src="https://user-images.githubusercontent.com/86431563/152068910-33fed964-fb0c-4c3d-bcb9-74a52288d0ce.PNG"/>
                    )}
                    {!thumbnail && (
                    <img className="dot" src="https://user-images.githubusercontent.com/86431563/152070479-55195ec7-bb36-4473-8d9d-6aae089d2622.PNG"/>
                    )}
                    Thumbnail
                  </div>
                  <div className="inputHeaderPg3">
                    {galleryImage1 && galleryImage2 && galleryImage3 && (
                    <img className="dot" src="https://user-images.githubusercontent.com/86431563/152068916-5aed329b-080d-4785-9287-288d6ff7ec7d.PNG"/>
                    )}
                    {!galleryImage1 && !galleryImage2 && !galleryImage3 && (
                    <img className="dot" src="https://user-images.githubusercontent.com/86431563/152070478-bd631695-cdb2-4e09-99ae-e1028f89dcd8.PNG"/>
                    )}
                    Gallery images
                  </div>
                  <div className="inputHeaderPg3">
                    {price && (
                    <img className="dot" src="https://user-images.githubusercontent.com/86431563/152068918-3ed0a083-569a-400d-b68d-5dd9354b27a8.PNG"/>
                    )}
                    {!price && (
                    <img className="dot" src="https://user-images.githubusercontent.com/86431563/152070469-72e5f0aa-a0f2-4382-aa96-18fc5512be30.PNG"/>
                    )}
                    Pricing
                  </div>
                  <div className="inputHeaderPg3">
                    {firstReview && (
                    <img className="dot" src="https://user-images.githubusercontent.com/86431563/152068922-fe35ba31-f086-4d9e-9d98-b4ae8e147d3d.PNG"/>
                    )}
                    {!firstReview && (
                    <img className="dot" src="https://user-images.githubusercontent.com/86431563/152070874-d8af8ada-a0e8-40b7-999f-13ff12a99d4f.PNG"/>
                    )}
                    Write the first review
                  </div>
                </div>
                <button className="createB9" type='submit'>Launch now</button> {/*onClick={handleSubmit}*/}
              </div>
              </div>
            </div>
          </div>
        </div>
        </>) : null}


        {/* {page!== 1 && page !== 2 && page !== 3 && page !== 4 && <button
        onClick={() => nextPage()}
        type="button">
        Next</button>}
        {page!== 1 && page !== 2 && page !== 3 && page !== 4 && <button
        onClick={() => prevPage()}
        type="button">
          Prev</button>} */}
    </form>
  </>);
}

export default ProductFormCreate;
