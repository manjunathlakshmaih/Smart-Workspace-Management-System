import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/main_icon.png';
import user from '../../assets/user.svg';
import lock from '../../assets/lock.svg';
import google from '../../assets/google.svg';
import facebook from '../../assets/facebook.svg';
import icon_email from '../../assets/email.svg';
import AuthForm from '../../components/forms/AuthForm';
import './LoginPage.css';

const LoginPage = () => {

  function handleLogin(data) {
    console.log(data);
    alert("Login demo. Plug in API next.");
  }

  return (
    <AuthForm 
    titelIcon = {Logo}
    appName = "Smart Workspace"
    greatings ="Welcome Back!"
    subTitle ="Please sign in to your Account"
    submitText="Login"
    onSubmit={handleLogin}
    fields={[
      {
        name: "email",
        placeholder: "Email",
        icon: user,
        validation: {
          required: "Email is required",
        },
      },
      {
        name: "password",
        type: "password",
        placeholder: "Password",
        icon: lock,
        validation: {
          required: "Password is required",
        },
      },
    ]
    }
    socialProviders={[
      {
        name: "google",
        label: "Google",
        socialIcon: google,
        label:"google"
      },
      {
        name: "facebook",
        label: "Facebook",
        socialIcon: facebook,
        label:"facebook"
        
      },
      {
        name: "email",
        label: "Email",
        socialIcon: icon_email,
        label:"Email"
      },
    ]}
    footer={
      <>
        Don’t have an account?{" "}
        <Link to="/signup" className="login-link">
          Sign Up
        </Link>
      </>
    }
    />
  )}

export default LoginPage;

