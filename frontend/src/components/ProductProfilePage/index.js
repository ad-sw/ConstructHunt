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
import { Modal } from '../../context/Modal';
import { NavLink } from 'react-router-dom';

function ProductProfilePgModal({product}) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        (async () => {
            // await dispatch(getProducts())
            // await dispatch(getAllReviews())
            await dispatch(getProductsWithReviews())
            setIsLoaded(true);
        })();
    }, [dispatch, sessionUser])

    let event = new Date(product?.createdAt);
    let date = event.toLocaleDateString().slice(0,5) + event.toLocaleDateString().slice(7,9)

    const handleCancel = (e) => {
        e.preventDefault();
        const body = document.getElementsByTagName('body')[0]
        body.classList.remove('no-scroll')
        setShowModal(false);
    }

    return (
        isLoaded && (
        <>
            <div key={product?.id}  className="modal-child">
            <div className="product-container">
                <div className="headerSection">
                    <div className="mainInfo">
                        {<img className="profileImg" src={product?.imageUrl} height="25%" width="50%" alt="display"/>}
                        <div className="titleTagline">
                            <div id="prodProfileTitle2">{product?.title}</div>
                            <p id="productDescription2">{product?.description.slice(0, 68)}</p>
                            <div className="buttons">
                                <div className="priceOption">Free & Paid Options</div>
                                <div className="toolType">{(product?.id %2 === 0) && (<>Open Source</>)}{(product?.id % 2 !== 0) && (<>Freelance</>)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="leftSide">
                <div className="main-image">
                    <div className="gallery">
                            <a className="main-info" target="_blank" rel="noopener noreferrer" href={product?.link}>
                                <img className="img5" src={product?.imageUrl} alt="display"/>
                            </a>
                        <img className="filmstrip" src={product?.imageUrl} alt="display"/>
                        <img className="filmstrip" src={product?.imageUrl} alt="display"/>
                        <img className="filmstrip" src={product?.imageUrl} alt="display"/>
                        <img className="filmstrip" src={product?.imageUrl} alt="display"/>
                    </div>
                    <p className='description'>
                        {product?.description}
                        <div className="dateProd">FEATURED {date}</div>
                    </p>
                </div>
                <div className="discuss">DISCUSSION</div>
                <div className="description2">
                <div className="reviewInput">Would you recommend this product?</div>
                    <div className="review">
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


            {/* <aside className='product'>
            <div className='upvote-section'>
              <span
                onClick={this.upVote.bind(this)}
                className="upvote-button">{(upvoted) ? `▲ UPVOTED  ` : `▲ UPVOTE   ` }<div>
                  {upvote_ids.length}</div>
              </span>
              <div className='product-upvoters'>
                {upvoters && Object.values(upvoters).map((user,idx) => {
                  return (idx < 3) ? (<img key={user.id} className='ppr upvoter-picture' src={user.profilePictureUrl} />) : null;
                })}
              </div>
            </div>

            <hr />

            <section className="website-link">
              <h4>Website</h4>
              <a href={website.toLowerCase().startsWith('http') ? website : `http://${website}`} target="_blank">{this.cleanUrl(website)}</a>
            </section>

            <hr />

            <section className="hunter-link">
              <h4>Hunter</h4>
              <img src={hunter.profilePictureUrl} className="profile-picture-round"/>
              <Link to={`/@${hunter.username}`}>@{hunter.username}</Link>
            </section>
          </aside> */}
            <div className="rightSide">
                <div className="upvote-section">
                    {sessionUser && (
                    <span
                    onClick={'this.upVote.bind(this)'}
                    className="upvote-button">{('hi') ? `▲ UPVOTED  ` : `▲ UPVOTE   ` }
                        <div>
                            {'hi'}
                        </div>
                    </span>
                    )}
                    {!sessionUser && (
                    <NavLink exact to={`/sign-up`}>
                        <span
                        className="upvote-button">{('hi') ? `▲ UPVOTED  ` : `▲ UPVOTE   ` }
                            <div>
                                {'hi'}
                            </div>
                        </span>
                    </NavLink>
                    )}

                    <div className='product-upvoters'>
                    {'hi' && Object.values('hi').map((user,idx) => {
                    return (idx < 3) ? (<img key={user.id} className='upvoter-picture' src={user.profilePictureUrl} />) : null;
                    })}
                    </div>
                </div>

                <hr />

                <section className="website-link">
                <h4>Website</h4>
                {/* <a href={'k'.toLowerCase().startsWith('http') ? 'website' : `http://${'website'}`} target="_blank">{this.cleanUrl('website')}</a> */}
                </section>

                <hr />

                <section className="hunter-link">
                <h4>Hunter</h4>
                <img src={'user.profilePictureUrl'} className="profile-picture-round"/>
                {/* <Link to={`/@${user.username}`}>@{user.username}</Link> */}
                </section>
            </div>
        </div>
        </div>
        </>
        )
   );
}

export default ProductProfilePgModal;
