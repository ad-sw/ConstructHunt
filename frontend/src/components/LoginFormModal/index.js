import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { Modal } from '../../context/Modal';
import {login} from '../../store/session';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const demoLogin = async () => {
    const demoUser = {credential: "demo@user.io", password: "password"};
    await dispatch(login(demoUser))
  }

  return (
    <div className="RegUserDemoBtns">
    <>
      <button onClick={() => setShowModal(true)} className="loginBtn">Login</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
    <>
    <button onClick={demoLogin} className="demoBtn">Demo Login</button>
    </>
    </div>
  );
}

export default LoginFormModal;
