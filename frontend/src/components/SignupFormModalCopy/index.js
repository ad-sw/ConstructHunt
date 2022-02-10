import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal({product}) {
  const [showModal, setShowModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false)

  const newest = document.getElementsByTagName("body")[0];
  const newest2 = document.getElementsByClassName("productContainer")[0];

    useEffect(() => {
      setIsLoaded(true)
  }, [setIsLoaded]);

  const openMenu = (e) => {
    e.preventDefault()
    newest.classList.add("no-scroll");
    newest2.classList.add("hide");
    setShowModal(true);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    newest2.classList.remove("hide");
    setShowModal(false);
  }

  const closeMenu = (e) => {
    e.preventDefault()
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
