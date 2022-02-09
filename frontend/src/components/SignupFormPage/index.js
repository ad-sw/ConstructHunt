// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
// import { signup } from '../../store/session';
// import * as sessionActions from "../../store/session";

// function SignupFormPage() {
//   const [errors, setErrors] = useState([]);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   let [password, setPassword] = useState('');
//   const [repeatPassword, setRepeatPassword] = useState('');
//   const user = useSelector(state => state.session.user);
//   const [loaded, setLoaded] = useState(false);
//   let [credential, setCredential] = useState("");
//   const dispatch = useDispatch();

//   useEffect(() => {
//     (async() => {
//       setLoaded(true);
//     })();
//   }, [dispatch]);

//   const validator = () => {
//     let error = []
//     if(username.length > 31) {
//         error.push('. : Please enter a username shortner than 30 characters.')
//     } else if(username.length < 4) {
//       error.push('. : Please enter a username longer than 3 characters.')
//     }
//     if(password !== repeatPassword) {
//       error.push('. : Please enter matching passwords.')
//     }
//     if(email.length > 256) {
//         error.push('. : Please enter a shorter email than 255 characters.')
//     }
//     if(password.length > 256) {
//       error.push('. : Please enter a shorter password than 255 characters.')
//     }
//     else if (password.length < 6) {
//     error.push('. : Please enter a password longer than 5 characters.')
//     }
//     return error;
//   }

//   const demoLogin = async() => {
//     setErrors([]);
//     credential = 'Demo';
//     password = 'password';
//     await dispatch(sessionActions.login({ credential, password })).catch(
//       async (res) => {
//         const data = await res.json();
//         if (data && data.errors) setErrors(data.errors);
//       }
//     );
//   }

//   const onSignUp = async (e) => {
//     e.preventDefault();
//     const errorsArr = validator()
//     if(errorsArr.length) {
//       setErrors(errorsArr)
//     } else{
//       const payload = {
//           username,
//           email,
//           password
//       }
//     if (password === repeatPassword) {
//       const data = await dispatch(signup(payload));
//       if(data) {
//         setErrors(data)
//         }
//       }
//     }
//   };

//   const updateUsername = (e) => {
//     setUsername(e.target.value);
//   };

//   const updateEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const updatePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const updateRepeatPassword = (e) => {
//     setRepeatPassword(e.target.value);
//   };

//   if (user) {
//     return <Redirect to={`/`}/>;
//   }

//   return (<>
//     <div className="signupPage2">
//       <div className="login-form-container2">
//       <div className="spaceInBetween"/>
//       <div className="logoThing"><img className="loginLogo" src="https://user-images.githubusercontent.com/86431563/151272960-32862845-4cd0-4618-89c8-cbd657c31d15.png"/></div>
//       <div className="loginText2">Sign up on Construct Hunt</div>
//       <div className="textStuff">Join our community of friendly folks discovering and sharing the latest products in urban planning and architecture.</div>
//         <button onClick={demoLogin} className="demoBtn3">Sign in with demo</button>
//         <form onSubmit={onSignUp} className="login-form">
//           <div className="errors">
//             {errors.map((error, idx) => (
//             <div key={idx}>{error.split(':')[1]}</div>
//             ))}
//           </div>
//           <div>
//             <input
//               type='text'
//               className="email-input2"
//               placeholder="username"
//               name='username'
//               value={username}
//               onChange={updateUsername}
//               required
//             />
//           </div>
//           <div>
//             <input
//               type='text'
//               className="email-input2"
//               placeholder="email"
//               name='email'
//               value={email}
//               onChange={updateEmail}
//               required
//             />
//           </div>
//           <div>
//             <input
//               type='password'
//               className='email-input2'
//               placeholder="password"
//               name='password'
//               value={password}
//               onChange={updatePassword}
//               required
//             />
//           </div>
//           <div>
//             <input
//               type='password'
//               className='email-input2'
//               placeholder="repeat password"
//               name='repeat_password'
//               value={repeatPassword}
//               onChange={updateRepeatPassword}
//               required
//             />
//             <button type='submit' className="signup-button">Sign up</button>
//           </div>
//         </form>
//         </div>
//       </div>
//       <div id="logBtns2">
//         <button className="RegUserDemoBtns4">Sign in</button>
//         <button className="RegUserDemoBtns3">Sign up</button>
//         </div>
//       </>
//   );
// }

// export default SignupFormPage;
