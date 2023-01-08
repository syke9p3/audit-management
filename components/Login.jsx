import React, { useState, useEffect, useRef } from 'react'
import { FcGoogle } from 'react-icons/fc'

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useTitle } from '../hooks'
import { useRouter } from 'next/router';
import { auth } from '../utils/firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

const Login = () => {

	useTitle('Sign in');

	const auth = getAuth();

	const [error, setError] = useState('');

	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const googleProvider = new GoogleAuthProvider();
	const GoogleLogin = async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider)
			console.log(result.user.displayName)
		} catch (error) {
			console.log(error)
		}
	}

	async function handleSubmit(e) {
		e.preventDefault();

		const { name, value } = e.target;
		setFormData(prevFormData => ({
			...prevFormData,
			[name]: value
		}));

		try {
			await signInWithEmailAndPassword(auth, email.value, password.value);
			router.push('/');
		} catch (error) {
			if (error.code === 'auth/wrong-password') {
				setError("Wrong password");
				console.log(error)
				console.log("Wrong Pass")
				
			  } else if (error.code === 'auth/user-not-found') {
				setError('User not found');

			  } else {
				setError(error.message);
			  }
		}
	}

	return (
		<div className="login h-full ">
			
			<form onSubmit={handleSubmit} className='sm:max-w-md bg-white glass sm:fixed right-0 top-0 px-8 py-12 h-full transition-all duration-300 ease-linear overflow-y-auto'>
				<div className='mb-6 space-y-2 flex flex-col justify-center text-center'>
					<img src="https://cdn.pup.edu.ph/img/symbols/logo88x88.png" className='mb-2 mx-auto' />
					<h2 className='text-2xl font-bold'>PUP Audit Management System</h2>
					{/* <h2 className='text-xl font-bold'>Sign in</h2> */}
					<p className='text-sm text-gray-500'>Enter your account details to sign in</p>
				</div>

				{error && <p className="error-message text-xs italic text-red-600 p-3 bg-red-50 my-4">{error}</p>}
           
				<div className='mb-4 space-y-3 min-w-md'>
					<div className='flex flex-col space-y-1'>
						<label className='text-sm font-semibold text-gray-700'>Email</label>
						<input required id="email" name="email" placeholder="Your email" className="`${error} ? '1px solid red' : '1px solid #ccc'` osutline outlinse-2 rounded-md focus:outline-0 focus:ring-1 ring-blue-500 oustline-red-400 py-2 px-3 text-sm" />
					</div>
					<div className='flex flex-col space-y-1'>
						<label className='text-sm font-semibold text-gray-700'>Password</label>
						<input required id="password" name="password" placeholder="Your password" className="`${error} ? '1px solid red' : '1px solid #ccc'` osutline outlinse-2 rounded-md focus:outline-0 focus:ring-1 ring-blue-500 oustline-red-400 py-2 px-3 text-sm" />
					</div>
				</div>
				<button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 rounded-sm mb-3">Sign In</button>
				{/* <div className='flex flex-col gap-2 text-center'>
					<p>or</p>
					<button onClick={googleProvider}  className="w-full bg-white text-gray-800 hover:bg-gray-50 text-sm font-semibold p-3 rounded-sm flex items-center gap-2 justify-center"><FcGoogle className='text-2xl' />Sign in with Google</button>
				</div> */}
			</form>
		</div>
	);
}

export default Login