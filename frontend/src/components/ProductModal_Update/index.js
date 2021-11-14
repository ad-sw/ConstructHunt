import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { Modal } from '../../context/Modal';
import ProductFormUpdate from './ProductForm_Update';
import "./ProductUpdate.css";

function ProductModalUpdate({product}) {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser.id !== product.userId) {
    return null;
  }

  return (
    <>
      <button onClick={() => setShowModal(true)} className="updateProductBtn">Update Product</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ProductFormUpdate product={product} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default ProductModalUpdate;
