import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewFormCreate from './ReviewForm_Create';
import "./ReviewCreate.css";

function ReviewModalCreate({productId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)} className="createReview">Create Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewFormCreate productId={productId} setShowModal={setShowModal}/>
        </Modal>
      )}
    </div>
  );
}

export default ReviewModalCreate;
