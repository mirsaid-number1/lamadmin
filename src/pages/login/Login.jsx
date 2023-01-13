import React,{ useState } from 'react';
import './login.scss';
import { signInUser } from '../../hooks/firebase';
import {Link,useNavigate} from 'react-router-dom';
function Login() {
  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');
  let [err,setErr] = useState('')
  let navigate = useNavigate();

  function submitLogin(e) {
    e.preventDefault();
    signInUser(email,password).then(cred => {
      console.log(cred)
      alert(
        'success'
      )
      navigate('/');
    }).catch(err => alert(err.message));
    setEmail(''); 
    setPassword('');
  }
  return (<>
    <div className='login'>
      <form onSubmit={submitLogin}>
        <h1 className='title'>Login</h1>
        <label htmlFor="email">Email:</label><br />
        <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/><br />
        <label htmlFor="password">Password:</label><br />
        <input type="text" name="passord" id="passord" onChange={(e) => setPassword(e.target.value)}/><br />
        <button type='submit' className='submit'>Submit</button>
        <Link to={'/signup'}>Register or Sign up</Link>
      </form>
    </div>
  </>)
}

export default Login