import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { Modal } from '../../context/Modal';
import ProductFormUpdate from './ProductForm_Update';
import "./ProductUpdate.css";

function ProductModalUpdate({product, ashowModal}) {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser?.id !== product?.userId) {
    return null;
  }

  const openMenu = (e) => {
    e.preventDefault()
    const newest = document.getElementsByTagName("body")[0];
    newest.classList.add("no-scroll");
    const newest2 = document.getElementsByClassName("productContainer")[0];
    newest2.classList.add("hide");
    setShowModal(true);
  };

  const closeMenu = (e) => {
    e.preventDefault()
    const newest2 = document.getElementsByClassName("productContainer")[0];
    newest2.classList.remove("hide");
    setShowModal(false);
  };

  return (
    <>
      <img onClick={openMenu} className="idkk"
      src="https://user-images.githubusercontent.com/86431563/151363159-a0c0f4a3-b175-4e14-bbd6-e968932e7835.png"/>
      {showModal && (
        <Modal onClose={closeMenu}>
          <ProductFormUpdate showModal={ashowModal} product={product} setShowModal={setShowModal} athumbnailUrl={product?.thumbnailUrl}
          alink={product?.link} agalleryImage1={product?.galleryImage1} agalleryImage2={product?.galleryImage2}
          agalleryImage3={product?.galleryImage3} atagline={product?.tagline} adescription={product?.description}
          aname={product?.name} topicId={product?.topicId}
          />
        </Modal>
      )}
    </>
  );
}

export default ProductModalUpdate;