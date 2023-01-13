import React,{useState} from 'react'
import './signup.scss'
import {createUser} from '../../hooks/firebase'
import {Link} from 'react-router-dom'
function SignUp() {

  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');


  function submitLogin(e) {
    e.preventDefault();
    createUser(email,password).then(res => {
      console.log(res.user)
    }).catch(err => console.log(err.message));
    setEmail('');
    setPassword('')
  }
  return (<>
    <section className='signup'>
        <form onSubmit={submitLogin}>
        <h1 className='title'>Register</h1>
        <label htmlFor="email">Email:</label><br />
        <input type="text" name="email" id="email" onChange={e => setEmail(e.target.value)}/><br />
        <label htmlFor="password">Password:</label><br />
        <input type="text" name="passord" id="passord" onChange={e => setPassword(e.target.value)}/><br />
        <button type='submit' className='submit'>Submit</button>
        <Link to={'/login'}>Log in</Link>
      </form>
    </section>
  </> )
}

export default SignUp