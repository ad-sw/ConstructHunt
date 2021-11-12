import {useSelector, useDispatch} from 'react-redux';
import {getOneProduct} from '../../store/product';
import {useEffect, useState} from 'react';
// import { NavLink } from 'react-router-dom';
import {useParams } from 'react-router';
import ProductModalUpdate from '../../components/ProductModal_Update';
import ProductModalDelete from '../../components/ProductModal_Delete';
import ReviewModal from '../../components/ReviewModal';
import ReviewModalCreate from '../../components/ReviewModal_Create';

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
        <div className="products">
                <div key={product?.id}>
                    <h2>{product?.title}</h2>
                    {<img alt="display" src={product?.imageUrl} height="25%" width="50%"></img>}
                    <p>{product?.description}</p>
                    {sessionUser?.id === product?.userId &&
                    <><ProductModalUpdate product={product}/>
                    <ProductModalDelete product={product}/>
                    </>
                    }
                    {sessionUser && <ReviewModalCreate productId={product?.id}/>}
                    {<>
                    <ReviewModal product={product}/></>}
                </div>
        </div>)
   );
}

export default ProductProfilePgModal;
