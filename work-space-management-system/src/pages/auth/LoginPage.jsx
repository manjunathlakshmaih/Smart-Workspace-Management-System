import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import Logo from '../../assets/logo.png'
import './LoginPage.css';


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: call your login API
    alert("Login demo. Plug in API next.");
  }

  return (
    <div className="login">
      <header className="login-header">
        <img className = "logo" src={Logo} alt="Smart Workspace Logo" />
        <div className="app-name">Smart Workspace App</div>
      </header>

      <h1 className="login-title">Login</h1>

      <form onSubmit={handleSubmit} className="login-form">
        <TextField className="login-field" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
        <TextField className="login-field" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        <Button type="submit">Login</Button>
      </form>

      <p className="login-meta">
        Don’t have an account?{" "}
        <Link to="/signup" className="login-link">Create one</Link>
      </p>
    </div>
  );
}

export default LoginPage;

