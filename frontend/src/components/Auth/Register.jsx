
import React, {useState} from "react";
import "../../styles/Auth.css";


const Register=()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
  return (
    <div className="auth-form-container">
      <form className="auth-form">
        <h2 className="auth-form-header">Register</h2>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={username}
         
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          
          required
        />
 <div className="button-container">
        <button type="submit">Register</button>
        </div>
      </form>
    </div>
   
  );
}

export default Register;
