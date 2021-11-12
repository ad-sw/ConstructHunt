import {useSelector, useDispatch} from 'react-redux';
import {getOneProduct} from '../../store/product';
import {useEffect} from 'react';
// import { NavLink } from 'react-router-dom';
import {useParams } from 'react-router';
import ProductModalUpdate from '../../components/ProductModal_Update';
import ProductModalDelete from '../../components/ProductModal_Delete';
import ReviewModal from '../../components/ReviewModal';
import ReviewModalCreate from '../../components/ReviewModal_Create';

function ProductProfilePgModal() {
    const sessionUser = useSelector(state => state.session.user);
    const { productId } = useParams();
    const dispatch = useDispatch();
  
    useEffect(() => dispatch(getOneProduct()), [dispatch]);
    const products = useSelector(state => Object.values(state.products))

    return (
        <div className="products">
          {
            products?.map(product => {
            return (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    {<img alt="display" src={product.imageUrl} height="25%" width="50%"></img>}
                    <p>{product.description}</p>
                    {sessionUser && <ProductModalUpdate product={product}/>}
                    {sessionUser && <ProductModalDelete product={product}/>}
                    <ReviewModal product={product}/>
                    {sessionUser && <ReviewModalCreate productId={product.id}/>}
                </div>
                  )
                }
              )
            }
        </div>
    );
}

export default ProductProfilePgModal;
