import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import ProductModalUpdate from '../../components/ProductModal_Update';
import ProductModalDelete from '../../components/ProductModal_Delete';
import ReviewModal from '../../components/ReviewModal';
import "./ProductProfile.css";
import "../../components/ReviewModal/ReviewModal.css"
import {getProductsWithReviews} from '../../store/product'
import ReviewFormCreate from '../../components/ReviewModal_Create/ReviewForm_Create';
import SignupFormModal from '../SignupFormModalCopy'

function ProductProfilePgModal({product, setShowModal}) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const product2 = useSelector(state => state.product);

    useEffect(() => {
        (async () => {
            await dispatch(getProductsWithReviews())
            setIsLoaded(true);
        })();
    }, [dispatch, sessionUser])

    let newArr = [product.thumbnailUrl, product.galleryImage1, product.galleryImage2, product.galleryImage3]

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
                <div className="headerSection">
                    <div className="mainInfo">
                        {<img className="profileImg" src={product?.thumbnailUrl} height="25%" width="50%" alt="display"/>}
                        <div className="titleTagline">
                        <div className="CreateUpdateDeleteBtns">
                            <div id="prodProfileTitle2">
                                {product?.name}
                                    {sessionUser?.id === product?.userId &&
                                    <><ProductModalUpdate product={product} setShowModal={setShowModal}/>
                                    <ProductModalDelete product={product} setShowModal={setShowModal}/></>}
                                </div>
                            </div>
                            <p id="productDescription2">{product?.tagline}</p>
                            <div className="buttons">
                                <div className="priceOption">Free & Paid Options</div>
                                <div className="toolType">{topics[product?.topicId -1]}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <span className='main-image'>
                {this.props.screenshots.map(screenshot => {
                return <img key={`scr-${screenshot}`} className='carousel-main' src={screenshot} alt="" />
                })}
                </span> */}
            <div className="leftSide">
                <div className="main-image">
                    <div className="gallery">
                            <a className="main-info" target="_blank" rel="noopener noreferrer" href={product?.link}>
                                {newArr.map(image => {
                                    if (image.length > 1) return <img className="img5" src={image} alt="display" height="584.97px" min-width="658px"/>
                                })}
                            </a>
                        {product?.galleryImage1.length > 1 && (<>
                        <img className="filmstrip" src={product?.galleryImage1} alt="display"/>
                        </>)}
                        {product?.galleryImage2.length > 1 && (<>
                        <img className="filmstrip" src={product?.galleryImage2} alt="display"/>
                        </>)}
                        {product?.galleryImage3.length > 1 && (<>
                        <img className="filmstrip" src={product?.galleryImage3} alt="display"/>
                        </>)}
                    </div>
                    <p className='description'>
                        {product?.description}
                        <div className="dateProd">FEATURED {date}</div>
                    </p>
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
                    <span>
                        <SignupFormModal setShowModal={setShowModal} product={product}/>
                    </span>
                    )}

                    <div className='product-upvoters'>
                    {'hi' && Object.values('hi').map((user,idx) => {
                    return (idx < 3) ? (<img key={user.id} className='upvoter-picture' src={'user.profilePictureUrl'} />) : null;
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
