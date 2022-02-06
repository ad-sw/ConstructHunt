import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';

function SignupFormModal({product}) {
  const [showModal, setShowModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
      setIsLoaded(true)
  }, [setIsLoaded]);

  const openMenu = (e) => {
    e.preventDefault()
    const newest = document.getElementsByTagName("body")[0];
    newest.classList.add("no-scroll");
    const newest2 = document.getElementsByClassName("product-container")[0];
    newest2.classList.add("hide");
    setShowModal(true);
    };

  const handleCancel = (e) => {
    e.preventDefault();
    const newest2 = document.getElementsByClassName("product-container")[0];
    newest2.classList.remove("hide");
    setShowModal(false);
    }

  const closeMenu = (e) => {
    e.preventDefault()
    const newest2 = document.getElementsByClassName("product-container")[0];
    newest2.classList.remove("hide");
    setShowModal(false);
    };

  return (
    <div>
    <>
      <button className="upvoteBtn" onClick={openMenu}>{('hi') ? `▲ UPVOTED  ` : `▲ UPVOTE   ` }</button>
      {showModal && (
        <Modal onClose={closeMenu}>
          <SignupForm setShowModal={setShowModal} product={product}/>
          <button className="circleClose" onClick={handleCancel}>x</button>
        </Modal>
      )}
    </>
    </div>
  );
}

export default SignupFormModal;
