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

  const handleCancel = (e) => {
    e.preventDefault();
    setShowModal(false);
  }

  return (
    <div>
    <>
      <button className="RegUserDemoBtns" onClick={() => setShowModal(true)}>Sign up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
          <button className="circleClose" onClick={handleCancel} >x</button>
        </Modal>
      )}
    </>
    </div>
  );
}

export default SignupFormModal;
