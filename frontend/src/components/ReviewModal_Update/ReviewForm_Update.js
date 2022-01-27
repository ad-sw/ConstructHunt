import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateReview} from '../../store/review';

function ReviewFormUpdate({review}) {
    const [reviews, setReviews] = useState(review.review);
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
          review: reviews,
          reviewId: review.id
        };

        await dispatch(updateReview(payload));
        setShowModal(false);
      };

    return (
      <div>
        <form className="formReviewUpdate" onSubmit={handleSubmit}>
          <input
          placeholder="Review"
          value={reviews}
          required
          onChange={e => setReviews(e.target.value)}
          />
          <div className="tried" type='submit'>Update</div>
        </form>
      </div>
      );
}

export default ReviewFormUpdate;
