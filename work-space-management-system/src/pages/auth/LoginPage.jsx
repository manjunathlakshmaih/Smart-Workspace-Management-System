import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import TextField from '../../components/Input/TextField';
import Logo from '../../assets/main_icon.png';
import user from '../../assets/user.svg';
import lock from '../../assets/lock.svg';
import google from '../../assets/google.svg';
import facebook from '../../assets/facebook.svg';
import icon_email from '../../assets/email.svg';
import './LoginPage.css';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  function onSubmit(data) {
    console.log(data);
    alert("Login demo. Plug in API next.");
  }

  return (
    <div className="login">
      <header className="login-header">
        <img className="logo" src={Logo} alt="Smart Workspace Logo" />
        <div className="app-name">Smart Workspace</div>
      </header>
      <div className='welcome-header'>
        <h1 className="login-title">Welcome Back!</h1>
        <p>Please sign in to your Account</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <div className='login-input-container'>
        <TextField 
        placeholder="Email"
        error={errors.email?.message}
        {...register("email", {
          required: "Email is required"
        })}
        icon={user}
      />

      <TextField
      icon={lock}
        type="password"
        placeholder="Password"
        error={errors.password?.message}
        {...register("password", {
          required: "Password is required"
        })}
      />
        </div>
        <div className='check_remember'>
          <input type="checkbox" id='remember_id' />
          <label htmlFor='remember_id' >Remember Me</label>
        </div>
        <Button className="login-button" type="submit">Login</Button>
      </form>
      <div className='or-border'>
        <hr />
        <span>or continue with</span>
        <hr />
      </div>
      <div className='social-login'>
        <Button className="social-button google"><img src={google} alt="Google" /></Button>
        <Button className="social-button facebook"><img src={facebook} alt="Facebook" /></Button>
        <Button className="social-button email"><img src={icon_email} alt="Email" /></Button>
      </div>
      <p className="login-meta">
        Don’t have an account?{" "}
        <Link to="/signup" className="login-link">Sign Up</Link>
      </p>
    </div>
  );
}

export default LoginPage;

