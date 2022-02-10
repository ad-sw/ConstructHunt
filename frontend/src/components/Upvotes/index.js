import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import "../ProductModal/ProductModal.css";
import { Modal } from '../../context/Modal';
import SignupForm from '../SignupFormModal/SignupForm';

function Upvotes({product}) {
    const [showModal, setShowModal] = useState(false);
    // const [isLoaded, setIsLoaded] = useState(false)

    const newest = document.getElementsByTagName("body")[0];
    const body = document.getElementsByTagName('body')[0]

    const openMenu = (e) => {
        e.preventDefault()
        newest.classList.add("no-scroll");
        setShowModal(true);
        };

    const handleCancel = (e) => {
        e.preventDefault();
        body.classList.remove('no-scroll')
        setShowModal(false);
        }

    const closeMenu = (e) => {
        e.preventDefault()
        body.classList.remove('no-scroll')
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
