import {useSelector, useDispatch} from 'react-redux';
import {getReviews} from '../../store/review';
import {useEffect} from 'react';
// import ReviewModalCreate from '../../components/ReviewModal_Create';
import ReviewModalUpdate from '../../components/ReviewModal_Update';
import ReviewDelete from '../../components/ReviewModal_Delete';

function ReviewModal({product}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => dispatch(getReviews(product.id)), [dispatch, product.id]);
    const reviews = useSelector(state => Object.values(state.reviews))
    const reviewsFilter = reviews?.filter(review => review.productId === product.id)

    return (
        <div>
            {
            reviewsFilter.map(review => {
            return (
            <div key={review.id}>
            <h3>{review.review}</h3>
            {/* <ReviewModalCreate review={review}/> */}
            {sessionUser && <ReviewModalUpdate review={review}/>}
            {sessionUser && <ReviewDelete review={review}/>}
            </div>
            )
        })}
        </div>
    );
}

export default ReviewModal;
