import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import ProductModalUpdate from '../../components/ProductModal_Update';
import ProductModalDelete from '../../components/ProductModal_Delete';
import ReviewModal from '../../components/ReviewModal';
import "../ProductProfilePage/ProductProfile.css";
import "../../components/ReviewModal/ReviewModal.css"
import {getProductsWithReviews} from '../../store/product'
import ReviewFormCreate from '../../components/ReviewModal_Create/ReviewForm_Create';
import SignupFormModal from '../SignupFormModalCopy'
import {updateProduct} from '../../store/product';

function ProductFormUpdate({product, setShowModal, athumbnailUrl, adescription, atagline, agalleryImage1, agalleryImage2, agalleryImage3, alink, aname}) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const product2 = useSelector(state => state.product);
    const [name, setName] = useState(aname);
    const [tagline, setTagline] = useState(atagline);
    const [galleryImage1, setGalleryImage1] = useState(agalleryImage1);
    const [galleryImage2, setGalleryImage2] = useState(agalleryImage2);
    const [galleryImage3, setGalleryImage3] = useState(agalleryImage3);
    const [thumbnailUrl, setThumbnailUrl] = useState(athumbnailUrl);
    const [link, setLink] = useState(alink);
    const [description, setDescription] = useState(adescription);

    useEffect(() => {
        (async () => {
            await dispatch(getProductsWithReviews())
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
        description,
      };

      await dispatch(updateProduct(payload));
      setShowModal(false);
    };

    // let newArr = [product.thumbnailUrl, product.galleryImage1, product.galleryImage2, product.galleryImage3]
    // if (newArr.includes(null)) {
    //     newArr = newArr.filter(image => image !== null && image !== '' && image.length > 1);
    // }
    const topics = [['Freelance'], ["Open Source"], ['User Experience'], ['Design Tools'],
    ['Developer Tools'], ['Home'], ['Productivity'], ['Education'], ['Health & Fitness'], ['Music']]

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
      isLoaded && (
      <>
          <div key={product?.id}  className="modal-child">
          <div className="product-container">
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
                    <div className="buttons">
                      <div className="priceOption">Free & Paid Options</div>
                      <div className="toolType">{topics[product?.topicId -1]}</div>
                    </div>
                  </div>
                </div>
              </div>

          <div className="leftSide">
              <div className="mainImage">
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
                  </div>
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
              <div className="discuss">DISCUSSION</div>
              <div className="description2">
              <div className="reviewInput">
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
              </div>
              </div>
          </div>

          <div className="rightSide">
              <div className="upvoteSection">
                  {sessionUser && (
                  <span
                  onClick={''}
                  className="upvoteBtn">{('hi') ? `▲ UPVOTED  ` : `▲ UPVOTE   ` }
                      <div>
                          {'hi'}
                      </div>
                  </span>
                  )}
                  {!sessionUser && (
                  <span>
                      <SignupFormModal setShowModal={setShowModal} product={product}/>
                  </span>
                  )}

                  <div className='productUpvoters'>
                  {'hi' && Object.values('hi').map((user,idx) => {
                  return (idx < 3) ? (<img key={user.id} className='upvoterPic' src={''} />) : null;
                  })}
                  </div>
              </div>

              <hr />

              <section className="websiteLink">
              <h4>Website</h4>
              {/* <a href={'k'.toLowerCase().startsWith('http') ? 'website' : `http://${'website'}`} target="_blank">{this.cleanUrl('website')}</a> */}
              </section>

              <hr />

              <section className="hunterLink">
              <h4>Hunter</h4>
              <img src={''} className="profilePic"/>
              {/* <Link to={`/@${}`}>@{}</Link> */}
              </section>
          </div>
          </form>
      </div>
      </div>
      </>
      )
  );
}

export default ProductFormUpdate;
