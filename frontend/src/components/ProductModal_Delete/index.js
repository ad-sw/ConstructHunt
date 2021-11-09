import {useDispatch} from 'react-redux';
import {deleteProduct} from '../../store/product';
import "./ProductDelete.css";

function ProductDelete({product}) {
  const dispatch = useDispatch();

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
