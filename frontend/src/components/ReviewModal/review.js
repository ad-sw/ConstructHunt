import {useSelector, useDispatch} from 'react-redux';
import {getReviews} from '../../store/review';
import {getAllUsers} from '../../store/user'
import {useEffect, useState} from 'react';
import ReviewModalUpdate from '../../components/ReviewModal_Update';
import ReviewDelete from '../../components/ReviewModal_Delete';
import { NavLink } from 'react-router-dom';

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
                <div className="dateThing">{date}</div>
                <div className="idk">

                {sessionUser?.id !== review?.userId && (<>
                    <img onClick={() => setShowModal(true)} className="sizeDots2" src="https://user-images.githubusercontent.com/86431563/151293988-212a7e41-a810-45e9-a13a-1819480b61af.png"/>
                    </>)}

                {sessionUser?.id === review?.userId && (<>
                    <img onClick={() => setShowModal(true)} className="sizeDots" src="https://user-images.githubusercontent.com/86431563/151293988-212a7e41-a810-45e9-a13a-1819480b61af.png"/>
                    {showModal && (<>
                    <div className="order" onClose={() => setShowModal(false)}>
                        <div className="flexSide">
                            <ReviewModalUpdate review={review} setShowModal={setShowModal} showModal={showModal}/>
                            <ReviewDelete review={review}/>
                        <div onClick={handleCancel} className="reviewEditBtn">
                            <img className="closeIcon" src="https://user-images.githubusercontent.com/86431563/151359385-3e784422-886f-4c31-8f6c-1b039b1c0032.png"/>
                        </div>
                        </div>
                    </div>
                    </>)}
                </>)}
                </div>
            </div>
            </div>
        </>
    )
}

export default ReviewTest;
