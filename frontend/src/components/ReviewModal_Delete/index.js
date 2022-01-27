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
      <div className="reviewEditBtn" onClick={(e) => {
        e.preventDefault();
        dispatch(deleteReview(review.id));
        }}>
          <img className="delIcon" src="https://user-images.githubusercontent.com/86431563/151331165-d3e401af-8a9a-427f-9aa5-9e518e23cc2f.png"/>
      </div>
    </>
  );
}

export default ReviewDelete;
