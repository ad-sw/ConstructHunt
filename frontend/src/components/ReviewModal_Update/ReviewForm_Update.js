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
      <div>
        <form className="formUpdateReview" onSubmit={handleSubmit}>
          <textarea
          placeholder="Review"
          value={reviews}
          required
          onChange={e => setReviews(e.target.value)}
          />
          <button className="updateBtnn" type='submit'>Update</button>
        </form>
      </div>
      );
}

export default ReviewFormUpdate;
