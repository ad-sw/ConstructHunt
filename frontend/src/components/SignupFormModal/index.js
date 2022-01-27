import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';

function SignupFormModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
      setIsLoaded(true)
  }, [setIsLoaded]);

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
