import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../store/product';
import {useEffect} from 'react';
import { NavLink /*, useHistory*/ } from 'react-router-dom';
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

    // let productDisplay = products?.map(product => {
    //     return (
    //         <div className="friendCard">
    //             <div className="soMany" key={product?.id}>
    //                 <NavLink className="soMany" to={`/products/${product?.id}`}>
    //                     <img className="friendContent" src={product?.imageUrl} alt="display"></img>
    //                     <div className="fullName">{product?.title}</div>
    //                 </NavLink>
    //             </div>
    //         </div>
    //     )
    //     })

    return (
        <><div className="products">
            {products?.map(product => {
                return (
                    <div className="friendCard">
                        <div className="soMany" key={product?.id}>
                            <NavLink className="soMany" to={`/products/${product?.id}`}>
                                <img className="friendContent" src={product?.imageUrl} alt="display"></img>
                                <div className="fullName">{product?.title}</div>
                            </NavLink>
                        </div>
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
