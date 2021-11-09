import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ProductFormCreate from './ProductFormCreate';
import "./ProductCreate.css";

function ProductModalCreate() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="createProduct">Create Product</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ProductFormCreate setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default ProductModalCreate;
