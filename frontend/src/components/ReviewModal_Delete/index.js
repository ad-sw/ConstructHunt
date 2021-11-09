import {useDispatch} from 'react-redux';
import {deleteReview} from '../../store/review';
import "./ReviewDelete.css";

function ReviewDelete({review}) {
  const dispatch = useDispatch();

  return (
    <>
      <button className="deleteReview" onClick={(e) => {
        e.preventDefault();
        dispatch(deleteReview(review.id));
        }}>
          Delete Review
      </button>
    </>
  );
}

export default ReviewDelete;
