import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../store/product';
import {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import ProductModalUpdate from '../../components/ProductModal_Update';
import ProductModalDelete from '../../components/ProductModal_Delete';
import ReviewModal from '../../components/ReviewModal';
import ReviewModalCreate from '../../components/ReviewModal_Create';
import "./ProductModal.css";

function ProductModal() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    // useEffect(() => dispatch(getProducts(sessionUser?.id)), [dispatch, sessionUser?.id]);
    useEffect(() => dispatch(getProducts()), [dispatch]);
    const products = useSelector(state => Object.values(state.products))

    return (
        <div className="products">
            {products?.map(product => {
            return (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    {/* <p>{product.upvotes}</p> */}
                    {<NavLink exact to="/products/:id"><img alt="display" src={product.imageUrl}></img></NavLink>}
                    <p>{product.description}</p>
                    {sessionUser && <ProductModalUpdate product={product}/>}
                    {sessionUser && <ProductModalDelete product={product}/>}
                    <ReviewModal product={product}/>
                    {sessionUser && <ReviewModalCreate productId={product.id}/>}
                </div>
            )
            })}
        </div>
    );
}

export default ProductModal;
