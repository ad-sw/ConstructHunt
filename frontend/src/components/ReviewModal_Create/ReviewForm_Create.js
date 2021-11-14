import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createReview} from '../../store/review';

function ReviewFormCreate({productId, setShowModal}) {
    const [review, setReview] = useState('');

    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
          userId: sessionUser.id,
          productId,
          review
        };

        await dispatch(createReview(payload));
        setShowModal(false);
      };

    return (
      <div>
        <form className="formCreateReview" onSubmit={handleSubmit}>
          <textarea
          placeholder="Review"
          value={review}
          required
          onChange={e => setReview(e.target.value)}
          />
          <button type='submit'>Create Review</button>
        </form>
      </div>
      );
}

export default ReviewFormCreate;
