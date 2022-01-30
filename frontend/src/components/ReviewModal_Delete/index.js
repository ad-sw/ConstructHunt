import React, {useState, useEffect} from 'react';
import {Modal} from '../../context/Modal';
import {useDispatch, useSelector} from 'react-redux';
import {deleteReview} from '../../store/review';
import "./ReviewDelete.css";

function ReviewDelete({review}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    (async () => {
        setIsLoaded(true)
    })();
  }, [setIsLoaded]);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteReview(review.id));
    setShowModal(false);
  }
  const handleCancel = (e) => {
    e.preventDefault();
    setShowModal(false);
  }


  if (sessionUser.id !== review.userId) {
    return null;
  }

  return (
    <>
      {/* <div className="reviewEditBtn" onClick={(e) => {
        e.preventDefault();
        dispatch(deleteReview(review.id));
        }}>
          <img className="delIcon" src="https://user-images.githubusercontent.com/86431563/151331165-d3e401af-8a9a-427f-9aa5-9e518e23cc2f.png"/>
      </div> */}
      <div onClick={() => setShowModal(true)} className="reviewEditBtn">
        <img className="delIcon" src="https://user-images.githubusercontent.com/86431563/151331165-d3e401af-8a9a-427f-9aa5-9e518e23cc2f.png"/>
      </div>
        {isLoaded && showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <div className="formModal">
                  <div className="innerModalContent">
                    <div className="letsBolden">Delete this review?</div>
                    <div className="outerWrapBtn">
                    <button type="submit" onClick={handleDelete} className="modalBtn">Yes</button>
                    <button type="submit" onClick={handleCancel} className="modalBtn">Cancel</button>
                    </div>
                  </div>
                </div>
            </Modal>
        )}
    </>
  );
}

export default ReviewDelete;
