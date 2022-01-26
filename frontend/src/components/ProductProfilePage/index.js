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

    let event = new Date(product?.createdAt);
    let date = event.toLocaleDateString().slice(0,5) + event.toLocaleDateString().slice(7,9)

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
=                           <a className="main-info" target="_blank" rel="noopener noreferrer" href={product?.link}>
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



            <div>

            </div>
        </div>
        </div>
        </>
        )
   );
}

export default ProductProfilePgModal;
