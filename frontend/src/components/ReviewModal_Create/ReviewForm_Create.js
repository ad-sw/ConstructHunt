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
        // setShowModal(false);
      };

    return (<>
      {sessionUser && (
      <div>
        <form className="field" onSubmit={handleSubmit}>
          <div className="circle"></div>
          <input
          placeholder="What do you think of this product?"
          className="test"
          value={review}
          required
          onChange={e => setReview(e.target.value)}
          />
          <button className="createB" type='submit'>SEND</button>
        </form>
      </div>
      )}

      {!sessionUser &&(
        <form className="field">
        <div className="circle"></div>
        <input
        placeholder="Sign in to post a review"
        className="test"
        value={review}
        />
        <div className="createB2" type='submit'>SEND</div>
      </form>
      )}
    </>);
}

export default ReviewFormCreate;
