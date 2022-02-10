import {useEffect, useState} from 'react';
import "../../components/ReviewModal/ReviewModal.css"
import {getProductsWithReviews} from '../../store/product'
import {useSelector, useDispatch} from 'react-redux';
import SignupFormModal from '../SignupFormModalCopy';

function UpvoteTest({setShowModal}) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            await dispatch(getProductsWithReviews())
            setIsLoaded(true);
        })();
    }, [dispatch, sessionUser])

    return (<>
        {!sessionUser && (<>
        <div className="">
            <SignupFormModal setShowModal={setShowModal}/>
        </div>
        </>)}
    </>)
}
export default UpvoteTest;
