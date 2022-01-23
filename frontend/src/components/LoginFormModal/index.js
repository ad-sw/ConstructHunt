import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { Modal } from '../../context/Modal';
import {login} from '../../store/session';
import { useHistory } from 'react-router-dom';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false)

  // const demoLogin = async () => {
  //   const demoUser = {credential: "demo@user.io", password: "password"};
  //   await dispatch(login(demoUser));
  //   history.push('/');
  // }

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
      <button className="RegUserDemoBtns2" onClick={() => setShowModal(true)}>Sign in</button>
      {showModal && (<>
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
          <button className="circleClose" onClick={handleCancel} >x</button>
        </Modal>
        </>
      )}
    </>
    {/* <>
    <button onClick={demoLogin} className="demoBtn">Demo Login</button>
    </> */}
    </div>
  );
}

export default LoginFormModal;
