import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteProduct, getProductsWithReviews} from '../../store/product';
import "./ProductDelete.css";
import {useHistory} from 'react-router-dom';

function ProductDelete({product, setShowModal}) {
  const dispatch = useDispatch();
  // const [showModal, setShowModal] = useState(true);
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser?.id !== product?.userId) {
    return null;
  }

  return (
    <>
      <img src="https://user-images.githubusercontent.com/86431563/151363182-3977ff1c-23fe-49ae-b4e8-6a454064110f.png"
        className="idkk2" onClick={(e) => {
        e.preventDefault();
        dispatch(deleteProduct(product.id))
        .then(dispatch(getProductsWithReviews()))
        .then(setShowModal(false))
        }}/>
    </>
  );
}

export default ProductDelete;
