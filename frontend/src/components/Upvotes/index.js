import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../store/product';
import {useEffect, useState} from 'react';
import SignupFormModal from '../SignupFormModal';
import { NavLink /*, useHistory*/ } from 'react-router-dom';
// import ProductModalUpdate from '../../components/ProductModal_Update';
// import ProductModalDelete from '../../components/ProductModal_Delete';
// import ReviewModal from '../../components/ReviewModal';
// import ReviewModalCreate from '../../components/ReviewModal_Create';
import {getProductsWithReviews} from '../../store/product'
import ProductFormCreate from "../../components/ProductModal_Create";
import "../ProductModal/ProductModal.css";
import { Modal } from '../../context/Modal';
import ProductProfilePgModal from "../ProductProfilePage";
import SignupForm from '../SignupFormModal/SignupForm';

function Upvotes({product}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [showModal, setShowModal] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false)

    const handleCancel = (e) => {
        e.preventDefault();
        setShowModal(false);
        }

    return (<>
        <div className="upvote" onClick={() => setShowModal(true)}>
            <img className="arrow" src="https://user-images.githubusercontent.com/86431563/150881722-fe0f3572-0d7a-4f6e-a237-3ea07be4197d.png"/>
            <div className="upvoteText">0</div>
        </div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <SignupForm />
              <button className="circleClose" onClick={handleCancel} >x</button>
            </Modal>
          )}
    </>)
}

export default Upvotes;
