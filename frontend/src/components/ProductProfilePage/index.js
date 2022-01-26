import {useSelector, useDispatch} from 'react-redux';
// import {getOneProduct} from '../../store/product';
import {getProducts} from '../../store/product';
import {useEffect, useState} from 'react';
// import { NavLink } from 'react-router-dom';
import {useParams } from 'react-router';
import ProductModalUpdate from '../../components/ProductModal_Update';
import ProductModalDelete from '../../components/ProductModal_Delete';
import ReviewModal from '../../components/ReviewModal';
import ReviewModalCreate from '../../components/ReviewModal_Create';
import "./ProductProfile.css";
import "../../components/ReviewModal/ReviewModal.css"
import {getProductsWithReviews} from '../../store/product'

function ProductProfilePgModal({product}) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            // await dispatch(getProducts())
            // await dispatch(getAllReviews())
            await dispatch(getProductsWithReviews())
            setIsLoaded(true);
        })();
    }, [dispatch, sessionUser])

    return (
        isLoaded && (
        <>
            <div key={product?.id}  className="modal-child">
            <div className="product-container">
                <div className="headerSection">
                    <div className="mainInfo">
                        {<a href={product?.link}><img className="profileImg" src={product?.imageUrl} height="25%" width="50%" alt="display"/></a>}
                        <div className="titleTagline">
                            <div id="prodProfileTitle2">{product?.title}</div>
                            <p id="productDescription2">{product?.description.slice(0, 68)}</p>
                        </div>
                    </div>
                </div>

         {/*<main>
            <section className="main-image">
              <section className="gallery">
                <GalleryDisplay youtube={youtube} screenshots={screenshotUrls} />
              </section>
              <p className='description'>
                <span>DESCRIPTION</span>
                {description}
              </p>
            </section>

            <h4>REVIEWS</h4>
            <section className="discussion">
              <section className="review-input">
                <ReviewInput review={
                  {
                    product_id: id,
                    reviewer_id: this.props.loggedIn,
                    parent_review_id: null
                  }
                } profilePictureUrl={this.props.profilePictureCurrentUser}
                />
              </section>
              <span className='reviews'>
                <ul>
                  {review_ids.slice(0).reverse().map(id => {
                    return (
                      <Review key={`review-${id}`} id={id} />
                      )
                  })}
                  {review_ids.length === 0 ? (
                    "no reviews yet"
                  ) : (null)}
                </ul>
              </span>
            </section>
            </main> */}
            <div className="leftSide">
                <div className="main-image">
                    <div className="gallery">
                        <img className="main-info" src={product?.imageUrl} alt="display"/>
                        <img className="filmstrip" src={product?.imageUrl} alt="display"/>
                        <img className="filmstrip" src={product?.imageUrl} alt="display"/>
                        <img className="filmstrip" src={product?.imageUrl} alt="display"/>
                        <img className="filmstrip" src={product?.imageUrl} alt="display"/>
                        {/* <GalleryDisplay youtube={youtube} screenshots={screenshotUrls} /> */}
                    </div>
                    <p className='description'>
                        <span>DESCRIPTION</span>
                        {product?.description}
                    </p>
                </div>

                <div className="productDiscussionWrapper">
                <h4 className="discussionTitle">Product Discussion:</h4>
                    <div className="reviewsTable">
                        {<ReviewModal product={product}/>}
                    </div>
                </div>

                <div className="CreateUpdateDeleteBtns">
                    {sessionUser?.id === product?.userId &&
                    <><ProductModalUpdate product={product}/>
                    <ProductModalDelete product={product}/></>}
                    {sessionUser && <ReviewModalCreate productId={product?.id}/>}
                </div>
            </div>
            {/* nnnnnnnnnnnn<p></p>
            nnnnnnnnnnnn<p></p>
            nnnnnnnnnnnn<p></p>
            nnnnnnnnnnnn<p></p>
            nnnnnnnnnnnn<p></p>
            nnnnnnnnnnnn<p></p> */}
        </div>
        </div>
        </>
        )
   );
}

export default ProductProfilePgModal;
