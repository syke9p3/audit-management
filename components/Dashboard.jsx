import React from 'react'
import Stats from './Stats'

import { auth } from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const Dashboard = () => {

	// const [user, loading] = useAuthState(auth)
	// if (loading) return <h1>Loading...</h1>

	return (
		<div className='container px-16'> 
			<div className="py-4">
				<h1 className='text-2xl font-bold'>Dashboard</h1>
			</div>
			
			{/* Breadcrumbs */}

			<p className='text-sm font-semibold text-red-600'>Dashboard</p>

			<Stats />


		</div>
	)
}

export default Dashboard