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

    // function componentWillUnmount() {
    //     if (this.props.inModal && !window.location.hash.includes('@')) {
    //       window.location.hash = this.state.prevHash;
    //     }

    //     const body = document.getElementsByTagName('body')[0]
    //     body.classList.remove('no-scroll')
    //   }

    // function componentDidMount() {
    //     this.props.fetchProduct(product?.id);
    //     if (this.props.inModal && !this.state.loaded) {
    //       const body = document.getElementsByTagName('body')[0];
    //       body.classList.add('no-scroll');
    //       this.setState({loaded: true});
    //     }
    //   }

    return (
        isLoaded && (
        <>
                <div key={product?.id}  className="modal-child">
                <div className="product-container">
                    <h2 id="prodProfileTitle">{product?.title}</h2>

                    {<a href={product?.link}><img className="profileImg" src={product?.imageUrl} height="25%" width="50%" alt="display"></img></a>}

                    <p id="productDescription">{product?.description}</p>

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
                    nnnnnnnnnnnn<p></p>
                    nnnnnnnnnnnn<p></p>
                    nnnnnnnnnnnn<p></p>
                    nnnnnnnnnnnn<p></p>
                    nnnnnnnnnnnn<p></p>
                    nnnnnnnnnnnn<p></p>
                </div>
                </div>
        </>
        )
   );
}

export default ProductProfilePgModal;
