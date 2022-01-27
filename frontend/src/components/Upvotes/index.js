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

    const openMenu = (e) => {
        e.preventDefault()
        const newest = document.getElementsByTagName("body")[0];
        newest.classList.add("no-scroll");
        setShowModal(true);
        };

    const handleCancel = (e) => {
        e.preventDefault();
            const body = document.getElementsByTagName('body')[0]
            body.classList.remove('no-scroll')
        setShowModal(false);
        }

    const closeMenu = (e) => {
        e.preventDefault()
        const body = document.getElementsByTagName('body')[0]
        body.classList.remove('no-scroll')
        // document.documentElement.style.overflow = 'scroll';
        // document.body.scroll = "yes";
        setShowModal(false);
        };

    return (<>
        <div className="upvote" onClick={openMenu}>
            <img className="arrow" src="https://user-images.githubusercontent.com/86431563/150881722-fe0f3572-0d7a-4f6e-a237-3ea07be4197d.png"/>
            <div className="upvoteText">0</div>
        </div>
        {showModal && (
            <Modal onClose={closeMenu}>
              <SignupForm />
              <button className="circleClose" onClick={handleCancel} >x</button>
            </Modal>
          )}
    </>)
}

export default Upvotes;
