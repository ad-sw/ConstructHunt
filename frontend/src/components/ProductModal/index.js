import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../store/product';
import {useEffect} from 'react';
import ProductModalUpdate from '../../components/ProductModal_Update';
import ProductModalDelete from '../../components/ProductModal_Delete';
import ReviewModal from '../../components/ReviewModal';
import "./ProductModal.css";

function ProductModal() {
    // const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    // useEffect(() => dispatch(getProducts(sessionUser?.id)), [dispatch, sessionUser?.id]);
    useEffect(() => dispatch(getProducts()), [dispatch]);
    const products = useSelector(state => Object.values(state.products))
    console.log(products)

    return (
        <div className="products">
            {products?.map(product => {
                console.log(product)
            return (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.upvotes}</p>
                    {<a href={product.link}><img alt="display" src={product.imageUrl}></img></a>}
                    <p>{product.description}</p>
                    <ProductModalUpdate product={product}/>
                    {/* <ProductModalDelete product={product}/> */}
                    <ReviewModal product={product}/>
                </div>
            )
            })}
        </div>
    );
}

export default ProductModal;
