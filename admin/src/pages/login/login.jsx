import React, { useState,useContext } from "react";
import "./loginStyle.css";
import {AuthContext} from "../../components/context/authContext/AuthContext";
import {login } from "../../components/context/authContext/apiCalls";


export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { isFetching, dispatch} = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		login({email, password}, dispatch);
	}

	return (
		<div className='login'>
			<form className='loginForm'>
				<input
					type='text'
					placeholder='Email'
					className='loginInput'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Password'
					className='loginInput'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className='login-btn' 
				  onClick={handleSubmit}
				  disable ={isFetching}
				>
					Login
				</button>
			</form>
		</div>
	);
};

