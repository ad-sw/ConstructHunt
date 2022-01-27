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
// <<<<<<< Updated upstream
  const [isLoaded, setIsLoaded] = useState(false)

// <<<<<<< Updated upstream
  // const demoLogin = async () => {
  //   const demoUser = {credential: "demo@user.io", password: "password"};
  //   await dispatch(login(demoUser));
  //   history.push('/');
  // }
// =======
// =======
// >>>>>>> Stashed changes
  const demoLogin = async () => {
    const demoUser = {credential: "demo@user.io", password: "password"};
    await dispatch(login(demoUser));
    history.push('/');
  }
// <<<<<<< Updated upstream
// >>>>>>> Stashed changes

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
// <<<<<<< Updated upstream
    };
// =======
  // }
// =======
// >>>>>>> Stashed changes
// >>>>>>> Stashed changes

  return (
    <div>
    <>
      <button className="RegUserDemoBtns2" onClick={openMenu}>Sign in</button>
      {showModal && (<>
        <Modal onClose={handleCancel}>
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
