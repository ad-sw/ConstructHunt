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
      {showModal && (
        <ReviewFormUpdate review={review} setShowModal={setShowModal}/>
      )}
      <div className="reviewEditBtn" onClick={() => setShowModal(true)}>
        <img className="editIcon" src="https://user-images.githubusercontent.com/86431563/151337748-b20c873a-1ecd-403d-9494-c34d192a48de.png"/>
      </div>
    </>
  );
}

export default ReviewModalUpdate;
