import React,{useState} from 'react';
import userPageImage from '../images/login.jpg';

function LoginPage() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleChanangeUser = (e) => {
        setUser(e.target.value)
    }
    const handleChanangePassword = (e) => {
        setPassword(e.target.value)
    }
    const formSubmit = (e) => {
        e.preventDefault();
        console.log('user: ', user, 'password: ', password
        )
    }
  return (
    <div>
        <form onSubmit={formSubmit}>
            <h1>Employee Poll</h1>
            <img src={userPageImage} width="450px" height="auto" alt="userpage"/>
            <h3>Log In</h3>
           
            <label htmlFor='user' >User</label>
            <br />
            <input type="text" name="user" value={user} onChange={handleChanangeUser} className="input-field"/>
            <br />

            <label htmlFor='password' >Password</label>
            <br />
          
            <input type="password" name="password" value={password} onChange={handleChanangePassword} className="input-field"/>
            <br />
          
        
          <button className="btn waves-effect waves-light" type="submit" value="Submit">Submit
         <i className="material-icons right">send</i>
  </button>

        </form>
    </div>
  )
}

export default LoginPage