import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateReview} from '../../store/review';

function ReviewFormUpdate({review, setShowModal}) {
    const [reviews, setReviews] = useState(review.review);
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
        <form id="formReviewUpdate" onSubmit={handleSubmit}>
          <input
          placeholder="Review"
          value={reviews}
          className="test2"
          required
          onChange={e => setReviews(e.target.value)}
          />
          <button className="createB4" type='submit'>Update</button>
        </form>
      );
}

export default ReviewFormUpdate;
