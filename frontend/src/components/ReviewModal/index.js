import {useSelector, useDispatch} from 'react-redux';
import {getReviews} from '../../store/review';
import {getAllUsers} from '../../store/user'
import {useEffect, useState} from 'react';
// import ReviewModalCreate from '../../components/ReviewModal_Create';
import ReviewModalUpdate from '../../components/ReviewModal_Update';
import ReviewDelete from '../../components/ReviewModal_Delete';

function ReviewModal({product}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            await dispatch(getReviews(product?.id));
            await dispatch(getAllUsers());
            setIsLoaded(true)
        })();
    }, [dispatch, product?.id])

    const reviews = useSelector(state => Object.values(state?.reviews))
    const reviewsFilter = reviews?.filter(review => review.productId === product.id)
    const users = useSelector(state => Object.values(state?.users))
    let reviewUser = {...users}

    return isLoaded && (
        <>
            {
            reviewsFilter.map(review => {
            let event = new Date(review?.createdAt);
            let date = event.toLocaleDateString().slice(0,5) + event.toLocaleDateString().slice(7,9)

            return (
            <div className="review" key={review?.id}>
                <div className="review1">
                    <div className="reviewUser">{reviewUser[review?.userId-1].username}</div>
                    <div className="review-body">
                        {review?.review}
                        <div className="review-body2">{date}</div>
                    </div>
                </div>
                <div className="">
                    {sessionUser && <><ReviewModalUpdate review={review}/><ReviewDelete review={review}/></>}
                </div>
            </div>
            )
        })}
        </>
    );
}

export default ReviewModal;
