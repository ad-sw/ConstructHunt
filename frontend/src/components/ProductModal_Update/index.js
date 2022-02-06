import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { Modal } from '../../context/Modal';
import ProductFormUpdate from './ProductForm_Update';
import "./ProductUpdate.css";

function ProductModalUpdate({product}) {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser?.id !== product?.userId) {
    return null;
  }

  return (
    <>
      <img onClick={() => setShowModal(true)} className="idkk"
      src="https://user-images.githubusercontent.com/86431563/151363159-a0c0f4a3-b175-4e14-bbd6-e968932e7835.png"/>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ProductFormUpdate product={product} setShowModal={setShowModal} athumbnailUrl={product?.thumbnailUrl}
          alink={product?.link} agalleryImage1={product?.galleryImage1} agalleryImage2={product?.galleryImage2}
          agalleryImage3={product?.galleryImage3} atagline={product?.tagline} adescription={product?.description}
          aname={product?.name}
          />
        </Modal>
      )}
    </>
  );
}

export default ProductModalUpdate;
