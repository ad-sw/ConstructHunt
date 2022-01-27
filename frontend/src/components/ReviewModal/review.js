import {useSelector, useDispatch} from 'react-redux';
import {getReviews} from '../../store/review';
import {getAllUsers} from '../../store/user'
import {useEffect, useState} from 'react';
// import ReviewModalCreate from '../../components/ReviewModal_Create';
import ReviewModalUpdate from '../../components/ReviewModal_Update';
import ReviewFormUpdate from '../../components/ReviewModal_Update/ReviewForm_Update'
import ReviewDelete from '../../components/ReviewModal_Delete';
// import { Modal } from '../../context/Modal';

function ReviewTest({review, date}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        (async () => {
            // await dispatch(getReviews(product?.id));
            await dispatch(getAllUsers());
            setIsLoaded(true)
        })();
    }, [dispatch])


    const handleCancel = (e) => {
        e.preventDefault();
        setShowModal(false);
      }

    return isLoaded && (
        <>
            <div className="review-body">
                {review?.review}
                <div className="review-body2">
                    <div>{date}</div>
                    <div className="idk">

                    <img onClick={() => setShowModal(true)} className="sizeDots" src="https://user-images.githubusercontent.com/86431563/151293988-212a7e41-a810-45e9-a13a-1819480b61af.png"/>

                    {sessionUser?.id === review?.userId && showModal && (
                        <div className="order" onClose={() => setShowModal(false)}>
                            <>
                            {/* <button className="updateReviewBtn">Update</button>
                            <button className="updateReviewBtn">Delete</button> */}
                            <ReviewModalUpdate review={review}/>
                            <ReviewDelete review={review}/>
                            </>
                            <div onClick={handleCancel} className="thingHere">close</div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewTest;
