import {useDispatch, useSelector} from 'react-redux';
import {deleteReview} from '../../store/review';
import "./ReviewDelete.css";

function ReviewDelete({review}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser.id !== review.userId) {
    return null;
  }

  return (
    <>
      <div className="deleteLink" onClick={(e) => {
        e.preventDefault();
        dispatch(deleteReview(review.id));
        }}>
          Delete
      </div>
    </>
  );
}

export default ReviewDelete;
