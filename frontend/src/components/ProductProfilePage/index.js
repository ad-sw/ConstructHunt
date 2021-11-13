import {useSelector, useDispatch} from 'react-redux';
import {getOneProduct} from '../../store/product';
import {useEffect, useState} from 'react';
// import { NavLink } from 'react-router-dom';
import {useParams } from 'react-router';
import ProductModalUpdate from '../../components/ProductModal_Update';
import ProductModalDelete from '../../components/ProductModal_Delete';
import ReviewModal from '../../components/ReviewModal';
import ReviewModalCreate from '../../components/ReviewModal_Create';
import "./ProductProfile.css";

function ProductProfilePgModal() {
    const sessionUser = useSelector(state => state.session.user);
    const { id } = useParams();
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const product = useSelector(state => state.products[id])

    useEffect(() => dispatch(getOneProduct(id)).then(() => setIsLoaded(true)), [dispatch]);
    // console.log(product)

    return (
        isLoaded && (
        <>
                <div key={product?.id}  className="productsProfile">
                    <h2 id="prodProfileTitle">{product?.title}</h2>
                    {<img className="profileImg" src={product?.imageUrl} height="25%" width="50%" alt="display"></img>}
                    <p>{product?.description}</p>
                </div>
                <div>
                    {sessionUser?.id === product?.userId &&
                    <><ProductModalUpdate product={product}/>
                    <ProductModalDelete product={product}/>
                    </>
                    }
                    {<ReviewModal product={product}/>}
                    {sessionUser && <ReviewModalCreate productId={product?.id}/>}
                </div>
        </>
        )
   );
}

export default ProductProfilePgModal;
