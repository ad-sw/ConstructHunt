import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ProductFormUpdate from './ProductFormUpdate';
import "./ProductUpdate.css";

function ProductModalUpdate({product}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="updateProduct">Update Product</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ProductFormUpdate product={product} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default ProductModalUpdate;
