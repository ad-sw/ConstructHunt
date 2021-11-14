import {useDispatch, useSelector} from 'react-redux';
import {deleteProduct} from '../../store/product';
import "./ProductDelete.css";
import {useHistory} from 'react-router-dom';

function ProductDelete({product}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser?.id !== product?.userId) {
    return null;
  }

  return (
    <>
      <button className="deleteProductBtn" onClick={(e) => {
        e.preventDefault();
        dispatch(deleteProduct(product.id));
        history.push('/products');
        }}>
          Delete Product
      </button>
    </>
  );
}

export default ProductDelete;
