import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createProduct} from '../../store/product';
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDropzone } from 'react-dropzone'
import FormNavBar from '../NavigationBarForm'

function ProductFormCreate({setShowModal}) {
//     const [title, setTitle] = useState('');
//     const [imageUrl, setImageUrl] = useState('');
//     const [link, setLink] = useState('');
//     const [description, setDescription] = useState('');

//     const sessionUser = useSelector(state => state.session.user);

//     const dispatch = useDispatch();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         let payload = {
//           userId: sessionUser.id,
//           title,
//           imageUrl,
//           link,
//           description
//         };
//         // await dispatch(createProduct(payload));
//       };

//     return (<>
//         <div id="pageWrap">
//           <div className="leftSide">
//             <img src="https://image.freepik.com/free-vector/flat-engineering-construction-illustrated_23-2148892788.jpg" width="88%" height="115%"/>
//           </div>
//           <div className="backColor">
//             <div className='contents'>
//               <div className="formWrap">
//                 Submit a product
//               </div>
//               <div className="classicBio">
//                 Found a cool product you want everyone to know about? Or maybe you made one yourself and want the world to know about it?
//                 You're in the right place. So relax and follow the steps.
//               </div>
//               <div className="someTxt">Link to the product</div>
//               <form onSubmit={handleSubmit} className="field2">
//                 {/* <input
//                 type='text'
//                 placeholder='Title'
//                 value={title}
//                 required
//                 onChange={e => setTitle(e.target.value)}
//                   />
//                 <input
//                 type="url"
//                 placeholder="Image"
//                 value={imageUrl}
//                 required
//                 onChange={(e) => setImageUrl(e.target.value)}
//                 /> */}
//                 <input
//                 className="test3"
//                 type="url"
//                 placeholder="https://www.constructhunt.herokuapp.com/"
//                 value={link}
//                 required
//                 onFocus={(e) => setLink('https://')}
//                 onChange={(e) => setLink(e.target.value)}
//                 />
//                 {/* <textarea
//                 placeholder="Description"
//                 value={description}
//                 required
//                 onChange={(e) => setDescription(e.target.value)}
//                 /> */}
//                 <button className="createB5" type='submit'>Get started</button>

//                 <div className="Qs">Frequent questions</div>
//                 <div className="totalWidth"><a className="linkThing" href="https://help.producthunt.com/en/articles/5473056-how-to-post-main-info">The info you need to come prepared with to post <svg width="6" height="12" xmlns="http://www.w3.org/2000/svg" class="styles_arrow__I_9GT"><path d="M1.781.375A1 1 0 00.22 1.625L3.72 6l-3.5 4.375a1 1 0 101.562 1.25l4-5a1 1 0 000-1.25l-4-5z" fill="#9ba1a1"></path></svg></a></div>
//                 <div className="totalWidth"><a className="linkThing" href="https://help.producthunt.com/en/articles/5473242-how-to-post-launching">What happens after immediately launching <svg width="6" height="12" xmlns="http://www.w3.org/2000/svg" class="styles_arrow__I_9GT"><path d="M1.781.375A1 1 0 00.22 1.625L3.72 6l-3.5 4.375a1 1 0 101.562 1.25l4-5a1 1 0 000-1.25l-4-5z" fill="#9ba1a1"></path></svg></a></div>
//                 <div className="totalWidth"><a className="linkThing" href="https://help.producthunt.com/en/articles/5473225-how-to-post-team">The launch team — know your role <svg width="6" height="12" xmlns="http://www.w3.org/2000/svg" class="styles_arrow__I_9GT"><path d="M1.781.375A1 1 0 00.22 1.625L3.72 6l-3.5 4.375a1 1 0 101.562 1.25l4-5a1 1 0 000-1.25l-4-5z" fill="#9ba1a1"></path></svg></a></div>
//               </form>
//               </div>
//             </div>
//         </div>
//       </>);
// }
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const hostId = sessionUser?.id
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [venue, setVenue] = useState("");
  const [venue_types, setVenue_types] = useState([]);
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  // const [lat, setLat] = useState(null);
  // const [lng, setLng] = useState(null);
  const [image, setImage] = useState(null);
  const [types, setTypes] = useState([]);
  // const [preview, setPreview] = useState();
  const [tagline, setTagline] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [link, setLink] = useState('');
  const [page, setPage] = useState(1);
  const [errors, setErrors] = useState([]);

    const {
      acceptedFiles,
      fileRejections,
      getRootProps,
      getInputProps
    } = useDropzone({
      accept: 'image/jpg, image/jpeg, image/png',
      maxFiles: 1,
      maxSize: 10000000,
      onDrop: acceptedFiles => {
        setImage(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })))
      }
    });

    const acceptedFileItems = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {(file.size / 1024 / 1024).toFixed(2)} MB
      </li>
    ));

    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
        <ul>
          {errors.map(e => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    ));

    const thumb = image?.map(file => (
          <img src={file.preview}
          style={{width: '200px' }}/>
    ));

  function nextPage() {
    const errors = [];
    let newArr = [link]

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
    if(fileRejectionItems.length) setImage([])
    if(!errors.length) setPage((page) => page +1);
  }

  function prevPage() {
    if(fileRejectionItems.length) setImage([])
    if(!errors.length) setPage((page) => page -1);
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
              <button className="createB5" type='submit' onClick={() => nextPage()}>Get started</button>
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
                <FormNavBar/>
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
                value={link}
                onChange={(e) => setLink(e.target.value)}
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
                <button className="createB6" type='submit' onClick={() => nextPage()}>Next step: Images and media</button>
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
                placeholder="Simply the name of the product"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <div className="linkHead">Gallery</div>
                <div className="inputHeaderPg4">
                  The first image will be used as the social preview when your link is shared online.
                  <br></br>We recommend 3 image URLs.  <a href="https://help.producthunt.com/en/articles/5473122-how-to-post-media" target="_blank" rel="noopener noreferrer">Read our tips for great product galleries →</a>
                </div>
                <input
                type="text"
                className='test4'
                placeholder=""
                value={link}
                onChange={(e) => setLink(e.target.value)}
                />
                <input
                type="text"
                className='test4'
                placeholder=""
                value={link}
                onChange={(e) => setLink(e.target.value)}
                />
                <input
                type="text"
                className='test4'
                placeholder=""
                value={link}
                onChange={(e) => setLink(e.target.value)}
                />
                <button className="createB7" type='submit' onClick={() => nextPage()}>Next step: Extras</button>
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
                <div className="innerBioPg2">The community really appreciates knowing.</div>
                <div className="inputHeaderPg3">Free</div>
                This product is free to use
                <input
                type="radio"
                className=''
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <div className="inputHeaderPg3">Paid</div>
                This product requires payment and there is no free option
                <input
                type="radio"
                className=''
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <div className="linkHead">Write the first comment</div>
                <div className="inputHeaderPg4">
                  This comment will be posted when your product launches. <br></br>Adding a first comment is essential to get the discussion started.
                </div>
                <textarea
                  type="text"
                  className='test30'
                  placeholder="Explain how you discovered this product... invite people to join the conversation, ask questions to the Makers."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  />
                <button className="createB8" type='submit' onClick={() => nextPage()}>Next step: Launch Checklist</button>
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
                <div className="inputHeaderPg3">Product name</div>
                <div className="inputHeaderPg3">Product tagline</div>
                <div className="inputHeaderPg3">Description</div>
                <div className="inputHeaderPg3">Topic</div>
                <div className="inputHeaderPg3">Thumbnail</div>
                <div className="inputHeaderPg3">Gallery images</div>
                <div className="inputHeaderPg3">Pricing</div>
                <button className="createB8" type='submit'>Launch now</button> {/*onClick={handleSubmit}*/}
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
