import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false)

  const body = document.getElementsByTagName('body')[0]

    useEffect(() => {
      setIsLoaded(true)
    }, [setIsLoaded]);

  const openMenu = (e) => {
    e.preventDefault()
    body.classList.add('no-scroll');
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

  return (
    <div>
    <>
      <button className="RegUserDemoBtns" onClick={openMenu}>Sign up</button>
      {showModal && (
        <Modal onClose={closeMenu}>
          <SignupForm />
          <button className="circleClose" onClick={handleCancel}>x</button>
        </Modal>
      )}
    </>
    </div>
  );
}

export default SignupFormModal;
