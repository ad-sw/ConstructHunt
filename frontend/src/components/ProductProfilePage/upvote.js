// setShowModal={setShowModal}
import {getOneProduct} from '../../store/product';
import {useEffect, useState} from 'react';
import { Modal } from '../../context/Modal';
import "../../components/ReviewModal/ReviewModal.css"
import {getProductsWithReviews} from '../../store/product'
import {useSelector, useDispatch} from 'react-redux';
import ReviewFormCreate from '../../components/ReviewModal_Create/ReviewForm_Create';
import {deleteProduct} from '../../store/product';
import {useHistory} from 'react-router-dom';
import SignupFormModal from '../SignupFormModalCopy';

function UpvoteTest({setShowModal}) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    // const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        (async () => {
            // await dispatch(getProducts())
            // await dispatch(getAllReviews())
            await dispatch(getProductsWithReviews())
            setIsLoaded(true);
        })();
    }, [dispatch, sessionUser])

    return (<>
        {!sessionUser && (<>
        <div className="">
            {/* <NavLink exact to={`/sign-up`}> */}
                <SignupFormModal setShowModal={setShowModal}/>
            {/* </NavLink> */}
            </div>
            </>)}
    </>)
}
export default UpvoteTest;
