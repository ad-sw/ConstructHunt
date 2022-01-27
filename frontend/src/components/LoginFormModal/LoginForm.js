import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  let [credential, setCredential] = useState("");
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    (async() => {
      setIsLoaded(true);
    })();
  }, [dispatch]);

  const validator = () => {
    let error = []

    if(password.length < 6) {
      error.push('. : Please enter a password longer than five characters.')
    }
    if(password.length > 256) {
      error.push('. : Please enter a password shorter than 255 characters.')
    }
    else if(email.length > 256) {
      error.push('. : Please enter an email shorter 255 characters.')
    }
    return error;
  }


  const demoLogin = async() => {
    setCredential('Demo');
    setPassword('password');
    setErrors([]);
    credential = 'Demo';
    password = 'password';
    await dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorsArr = validator()


    setErrors([]);
    dispatch(sessionActions?.login({ credential, password })).catch(
      async (res) => {
        const data = await res?.json();
        if(errorsArr.length) {
          setErrors(errorsArr)
        } else{
          const payload = {
              email,
              password
          }
      }
      });
    history.push('/');
  };

  if (user) {
    return <Redirect to={`/`}/>;
  }

  return (<>{isLoaded && (
    <div className="login-page">
      {/* <div className="borderColor"> */}
      <div className="login-container2">
        {/* <img className="logoLogin" src="https://user-images.githubusercontent.com/86431563/150657634-361535b3-47c5-4e55-a9b3-508a8cf3eac8.png"/> */}
      {/* <img src="https://user-images.githubusercontent.com/86431563/150663661-8f2fe759-4770-4443-86ac-3891024905d1.png"/> */}
      {/* <a href={`/sign-up`} className="loginText">Sign Up</a> */}
      {/* <div className="spaceInBetween"/> */}
      <div className="logoThing"><img className="loginLogo" src="https://user-images.githubusercontent.com/86431563/151272960-32862845-4cd0-4618-89c8-cbd657c31d15.png"/></div>
      <div className="loginText2">Sign up on Construct Hunt</div>
      <div className="textStuff">Join our community of friendly folks discovering and sharing the latest products in architecture and city planning.</div>
      <button onClick={demoLogin} className="demoBtn2">Sign in with Demo</button>
        <form onSubmit={handleSubmit} className="login-form">
        <div className="errors">
          {errors.map((error, ind) => (
            <div key={ind}>{error.split(':')[1]}</div>
          ))}
        </div>
          <div>
            <input
              className="email-input"
              name='Usename or Email'
              type='text'
              placeholder='Usename or Email'
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              className='password-input'
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type='submit' className="login-button">Sign in</button>
          </div>
        </form>
      </div>
      </div>
    )}
    </>
  );
}

export default LoginForm;
