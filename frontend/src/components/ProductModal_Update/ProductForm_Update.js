import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import "../ProductProfilePage/ProductProfile.css";
import "../../components/ReviewModal/ReviewModal.css"
import SignupFormModal from '../SignupFormModalCopy'
import {updateProduct} from '../../store/product';

function ProductFormUpdate({product, setShowModal, showModal, athumbnailUrl, adescription, atagline, agalleryImage1, agalleryImage2, agalleryImage3, alink, aname, atopicId}) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const [name, setName] = useState(aname);
    const [tagline, setTagline] = useState(atagline);
    const [galleryImage1, setGalleryImage1] = useState(agalleryImage1);
    const [galleryImage2, setGalleryImage2] = useState(agalleryImage2);
    const [galleryImage3, setGalleryImage3] = useState(agalleryImage3);
    const [thumbnailUrl, setThumbnailUrl] = useState(athumbnailUrl);
    const [link, setLink] = useState(alink);
    const [topicId, setTopicId] = useState(atopicId);
    const [description, setDescription] = useState(adescription);

    const newest2 = document.getElementsByClassName("productContainer")[0];

    const topics_arr = [[],['Freelance'], ["Open Source"], ['User Experience'], ['Design Tools'],
    ['Developer Tools'], ['Home'], ['Productivity'], ['Education'], ['Health & Fitness'], ['Music']]

    useEffect(() => {
        (async () => {
            setIsLoaded(true);
        })();
    }, [dispatch, sessionUser])

    const handleSubmit = async (e) => {
      e.preventDefault();
      const payload = {
        productId: product.id,
        name,
        thumbnailUrl,
        galleryImage1,
        galleryImage2,
        galleryImage3,
        link,
        tagline,
        topicId,
        description,
      };

      await dispatch(updateProduct(payload));
      newest2.classList.remove("hide");
      setShowModal(false);
    };

    const handleCancel = (e) => {
      e.preventDefault();
      const newest2 = document.getElementsByClassName("productContainer")[0];
      newest2.classList.remove("hide");
      setShowModal(false);
    }

    let event = new Date(product?.createdAt);
    let date = event.toLocaleDateString().slice(0,5) + event.toLocaleDateString().slice(7,9)

    if (!isLoaded) {
        return (
            <div id="loadingGif">
                <img src={"https://cdn.dribbble.com/users/56427/screenshots/6003020/budio_hero_illustration_for_animation_2.gif"} height="650px" width="850px" alt="loading"/>
                <div className="loadText">Loading</div>
            </div>
            );
        }

    return (
      isLoaded && showModal && (
      <>
          <div key={product?.id}  className="modal-child">
          <div className="productContainer">
          <form onSubmit={handleSubmit}>
              <div className="headerSection">
                <div className="mainInfo">
                  <input
                  type="url"
                  className="profileImg3"
                  placeholder={`${product?.thumbnailUrl}`}
                  value={thumbnailUrl}
                  required
                  onChange={(e) => setThumbnailUrl(e.target.value)}
                  />
                  <div className="titleTagline">
                    <div className="CreateUpdateDeleteBtns">
                      <input
                      type='text'
                      id="prodProfileTitle3"
                      placeholder={`${product?.name}`}
                      value={name}
                      required
                      onChange={e => setName(e.target.value)}
                      />
                      {sessionUser?.id === product?.userId &&
                      (<button className="submitBtn" type='submit'>Update</button>)}
                    </div>
                    <input
                    type="text"
                    placeholder={`${product?.tagline}`}
                    id="productDescription4"
                    value={tagline}
                    required
                    onChange={(e) => setTagline(e.target.value)}
                    />
                    <div className="buttons2">
                      <div className="priceOption">Free & Paid Options</div>
                      <select className="toolType2" required value={topicId} onChange={(e) => setTopicId(e.target.value)}>
                        <option value={0}>{topics_arr[0]}</option>
                        <option value={1}>{topics_arr[1]}</option>
                        <option value={2}>{topics_arr[2]}</option>
                        <option value={3}>{topics_arr[3]}</option>
                        <option value={4}>{topics_arr[4]}</option>
                        <option value={5}>{topics_arr[5]}</option>
                        <option value={6}>{topics_arr[6]}</option>
                        <option value={7}>{topics_arr[7]}</option>
                        <option value={8}>{topics_arr[8]}</option>
                        <option value={9}>{topics_arr[9]}</option>
                        <option value={10}>{topics_arr[10]}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

          <div className="leftSide">
              <div className="mainImage2">
                  <div className="gallery">
                    <input
                    type="url"
                    className="carouselPics2"
                    placeholder={`${product?.galleryImage1}`}
                    value={galleryImage1}
                    required
                    onChange={(e) => setGalleryImage1(e.target.value)}
                    />
                    <input
                    type="url"
                    className="carouselPics2"
                    placeholder={`${product?.galleryImage2}`}
                    value={galleryImage2}
                    required
                    onChange={(e) => setGalleryImage2(e.target.value)}
                    />
                    <input
                    type="url"
                    className="carouselPics2"
                    placeholder={`${product?.galleryImage3}`}
                    value={galleryImage3}
                    required
                    onChange={(e) => setGalleryImage3(e.target.value)}
                    />
                  <div className="groupStuff">
                  <input
                  type="text"
                  placeholder={`${product?.description}`}
                  className='description22'
                  value={description}
                  required
                  onChange={(e) => setDescription(e.target.value)}
                  />
                  <div className="dateProd2">FEATURED {date}</div>
                  </div>
                  </div>
              </div>
              <div className="discuss">DISCUSSION</div>
              <div className="description3">
              {/* <div className="reviewInput">
                  Would you recommend this product?
                  {sessionUser && (
                  <ReviewFormCreate productId={product?.id} review={product?.Review}/>
                  )}
                  {!sessionUser && (
                  <ReviewFormCreate productId={product?.id} product={product} review={product?.Review} setShowModal={setShowModal}/>
                  )}
              </div>
              <div className="review">
                  {<ReviewModal product={product}/>}
              </div> */}
              </div>
          </div>

          <div className="rightSide">
            <div className="upvoteSection">
              {sessionUser && (<>
              <input
                type="url"
                placeholder={`${product?.link}`}
                className='getItBtn2'
                value={link}
                required
                onChange={(e) => setLink(e.target.value)}
                />
              <button className="upvoteBtn2"></button>
              </>)}
              {!sessionUser && (
              <button>
                  <SignupFormModal setShowModal={setShowModal} product={product}/>
              </button>
              )}
              </div>
              <div className="areaBelow2"></div>
        </div>
          </form>
      </div>
      </div>
      <button className="circleClose" onClick={handleCancel}>x</button>
      </>
      )
  );
}

export default ProductFormUpdate;
