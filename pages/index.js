import Head from 'next/head'

import { Login, Dashboard } from '../components'

import 'firebase/firestore';
import 'firebase/auth'

import { auth } from '../utils/firebase'

import { React, useEffect, useState } from 'react'

export default function Home() {

	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState(null);

	// useEffect(() => {
	// 	const unsubscribe = auth.onAuthStateChanged((user) => {
	// 		if (user) {
	// 			setIsAuthenticated(true);
	// 			setUser(user);
	// 		} else {
	// 			setIsAuthenticated(false);
	// 			setUser(null);
	// 		}
	// 	});
	// 	return unsubscribe;
	// }, []);

	return (
		<>
			<Head>
				<title>PUP Audit Management System</title>
				<meta name="description" content="This is not final" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className='h-screen'>
				{!user ? <Login /> : <Dashboard /> }
			</div>
		</>
	)
}
