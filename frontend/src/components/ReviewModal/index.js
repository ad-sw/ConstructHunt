import {useSelector, useDispatch} from 'react-redux';
import {getReviews} from '../../store/review';
import {useEffect, useState} from 'react';
// import ReviewModalCreate from '../../components/ReviewModal_Create';
import ReviewModalUpdate from '../../components/ReviewModal_Update';
import ReviewDelete from '../../components/ReviewModal_Delete';

function ReviewModal({product}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => dispatch(getReviews(product?.id)).then(() => setIsLoaded(true)), [dispatch, product?.id]);
    const reviews = useSelector(state => Object.values(state?.reviews))
    const reviewsFilter = reviews?.filter(review => review.productId === product.id)

    return isLoaded && (
        <div>
            {
            reviewsFilter.map(review => {
            return (
            <div key={review?.id}>
            <h3>{review?.review}</h3>
            {/* <ReviewModalCreate review={review}/> */}
            {sessionUser && <div className="reviewBtns"><ReviewModalUpdate review={review}/><ReviewDelete review={review}/></div>}
            </div>
            )
        })}
        </div>
    );
}

export default ReviewModal;
