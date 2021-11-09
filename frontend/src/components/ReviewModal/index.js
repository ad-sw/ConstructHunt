import {useSelector, useDispatch} from 'react-redux';
import {getReviews} from '../../store/review';
import {useEffect} from 'react';
import ReviewModalCreate from '../../components/ProductModal_Create';
import ReviewModalUpdate from '../../components/ProductModal_Update';
import ReviewDelete from '../../components/ReviewModal_Delete';

function ReviewModal({product}) {
    const dispatch = useDispatch();

    useEffect(() => dispatch(getReviews(product.id)), [dispatch, product.id]);
    const reviews = useSelector(state => Object.values(state.reviews))
    const reviewsFilter = reviews?.filter(review => review.productId === product.id)

    return (
        <div>
            {
            reviewsFilter.map(reviews => {
            return (
            <div key={reviews.id}>
            <h3>{reviews.title}{reviews.review}</h3>
            <ReviewModalCreate review={reviews}/>
            <ReviewModalUpdate review={reviews}/>
            <ReviewDelete review={reviews}/>
            </div>
            )
        })}
        </div>
    );
}

export default ReviewModal;
