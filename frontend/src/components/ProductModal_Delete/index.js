import {useDispatch, useSelector} from 'react-redux';
import {deleteProduct} from '../../store/product';
import "./ProductDelete.css";

function ProductDelete({product}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser.id !== product.userId) {
    return null;
  }

  return (
    <>
      <button className="deleteProduct" onClick={(e) => {
        e.preventDefault();
        dispatch(deleteProduct(product.id));
        }}>
          Delete Product
      </button>
    </>
  );
}

export default ProductDelete;
