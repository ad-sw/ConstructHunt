import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../store/product';
import {useEffect} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
// import ProductModalUpdate from '../../components/ProductModal_Update';
// import ProductModalDelete from '../../components/ProductModal_Delete';
// import ReviewModal from '../../components/ReviewModal';
// import ReviewModalCreate from '../../components/ReviewModal_Create';
import ProductFormCreate from "../../components/ProductModal_Create";
import "./ProductModal.css";

function ProductModal() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    // const history = useHistory();

    // useEffect(() => dispatch(getProducts(sessionUser?.id)), [dispatch, sessionUser?.id]);
    useEffect(() => dispatch(getProducts()), [dispatch]);
    const products = useSelector(state => Object.values(state.products))

    return (
        <><div className="products">
            {products?.map(product => {
            return (
                <div key={product?.id}>
                    <h2 id="productTitle">{product?.title}</h2>
                    {<NavLink to={`/products/${product?.id}`}>
                    <img className="productImg" src={product?.imageUrl} height="25%" width="50%" alt="display"></img>
                    </NavLink>
                    }
                </div>
            )
            })}
        </div>
        <div>
            {sessionUser && <ProductFormCreate/>}
        </div></>
    );
}

export default ProductModal;
