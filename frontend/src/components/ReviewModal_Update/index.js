import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { Modal } from '../../context/Modal';
import ReviewFormUpdate from './ReviewForm_Update';
import "./ReviewUpdate.css";

function ReviewModalUpdate({review}) {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser.id !== review.userId) {
    return null;
  }
  
  return (
    <>
      <button onClick={() => setShowModal(true)} className="updateReview">Update Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewFormUpdate review={review} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default ReviewModalUpdate;
