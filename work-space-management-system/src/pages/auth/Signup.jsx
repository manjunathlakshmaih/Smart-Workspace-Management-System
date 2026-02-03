import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/main_icon.png';
import user from '../../assets/user.svg';
import email from '../../assets/email.svg';
import lock from '../../assets/lock.svg';
import google from '../../assets/google.svg';
import facebook from '../../assets/facebook.svg';
import icon_email from '../../assets/email.svg';
import AuthForm from '../../components/forms/AuthForm';

const Signup = () => {
  function handleLogin(data) {
    console.log(data);
    alert("Login demo. Plug in API next.");
  }
  return (
    <AuthForm
      titelIcon={Logo}
      appName="Smart Workspace"
      greatings="Create your Account"
      subTitle="Join us to get started!"
      submitText="Sign Up"
      onSubmit={handleLogin}
      fields={[
        {
          name: "full name",
          placeholder: "Full Name",
          icon: user,
          validation: {
            required: "Full Name is required",
          },
        },
        {
          name: "email",
          placeholder: "Email",
          icon: email,
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
        {
          name: "conformPassword",
          type: "Password",
          placeholder: "Conform Password",
          icon: lock,
          validation: {
            required: "Please Conform the Password",
          },
        },
      ]
      }
      socialProviders={[
        {
          name: "google",
          label: "Google",
          socialIcon: google
        },
        {
          name: "facebook",
          label: "Facebook",
          socialIcon: facebook

        },
        {
          name: "email",
          label: "Email",
          socialIcon: icon_email
        },
      ]}
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Sign In
          </Link>
        </>
      }
    />
  )
}
export default Signup;