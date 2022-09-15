import React, { useState, useRef } from "react";
import "./Register.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {Link} from "react-router-dom";

const Logo = "https://i.ibb.co/GVfyB1J/netflix-Logo.png";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const emailRef = useRef();
	const passwordRef = useRef();

	const handleStart = () => {
		setEmail(emailRef.current.value);
		// console.log(emailRef.current.value);
	};

	const handleFinish = (event) => {
		event.preventDefault();
		setPassword(passwordRef.current.value);
		// console.log(passwordRef.current.value);
	};

	return (
		<div className='register'>
			<div className='top'>
				<div className='wrapper'>
					<img className='logo' src={Logo} alt='' />
					<Link to ="/login">
					   <button className='loginButton'>Sign In</button>
					</Link>
				</div>
			</div>
			<div className='container'>
				<h1>Unlimited movies, TV shows andmore</h1>
				<h2>Watch anywhere. Cancel anytime.</h2>
				<p>
					Ready to watch? Enter your email to create or restart your membership.
				</p>
				{!email ? (
					<div className='inputContainer'>
							<input
								type='email'
								placeholder='Enter your email'
								ref={emailRef}
							/>
							<SearchOutlinedIcon className='searchIcon'/>
						
						<button className='registerButton' onClick={handleStart}>
							{"	Get Started"}
						</button>
					</div>
				) : (
					<form className='inputContainer'>
						<input
							type='password'
							placeholder='Enter your password'
							ref={passwordRef}
						/>
						<button
							className='registerButton'
							onClick={(event) => handleFinish(event)}
						>
							{" Start"}
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default Register;
