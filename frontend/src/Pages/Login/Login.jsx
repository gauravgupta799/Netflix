import React from "react";
import "./Login.scss";

const Logo = "https://i.ibb.co/GVfyB1J/netflix-Logo.png";

const Login = () => {
	return (
		<div className='login-container'>
			<div className='top'>
				<div className='wrapper'>
					<img className='logo' src={Logo} alt='' />
				</div>
			</div>
			<div className='container'>
				<form>
					<h1>Sign In</h1>
					<input type='email' placeholder='Enter your email or phone number' />
					<input type='password' placeholder='Enter your password' />
					<button type='submit' className='loginButton'>
						Sign In
					</button>
					<span>New to Netflix ? <b>Sign up now</b></span>
					<small>
						This page is protected by Google reCAPTCHA to ensure you're not a
						robot. <b>Learn more</b>
					</small>
				</form>
			</div>
		</div>
	);
};

export default Login;
