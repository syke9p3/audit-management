import { React, useState } from 'react'
import Sidebar from './Sidebar'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../utils/firebase'

const Layout = ({ children }) => {

	// const [user, loading] = useAuthState(auth);
	const [user] = useState("");

	return (
			<div class="flex">

				{
				
				user && 
				<Sidebar />
				
				}
				<main className='w-full'>
					{children}
				</main>
			</div>
	)
}

export default Layout