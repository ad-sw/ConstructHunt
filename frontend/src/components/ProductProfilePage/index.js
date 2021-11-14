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

function ProductProfilePgModal() {
    const sessionUser = useSelector(state => state.session.user);
    const { id } = useParams();
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const product = useSelector(state => state.products[id])

    useEffect(() => dispatch(getProducts(id)).then(() => setIsLoaded(true)), [id, dispatch]);

    return (
        isLoaded && (
        <>
                <div key={product?.id}  className="productProfile">
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

                </div>
        </>
        )
   );
}

export default ProductProfilePgModal;
