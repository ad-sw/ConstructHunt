import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateReview} from '../../store/review';

function ReviewFormUpdate({review, setShowModal}) {
    const [reviews, setReviews] = useState(review.review);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
          reviews,
          reviewId: review.id
        };

        await dispatch(updateReview(payload));
      };

    const handleClick = (e) => {
      handleSubmit(e);
      setShowModal(false);
    }

    return (
      <div>
        <form className="formUpdateReview" onSubmit={handleSubmit}>
          <textarea
          placeholder="Review"
          value={reviews}
          onChange={e => setReviews(e.target.value)}
          />
          <button type='submit' onClick={e => handleClick(e)}>Update Review</button>
        </form>
      </div>
      );
}

export default ReviewFormUpdate;
