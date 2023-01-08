import React from 'react'
import 'firebase/firestore';
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../utils/firebase'

import { FiLogOut } from 'react-icons/fi'
import { RiLayoutGridFill } from 'react-icons/ri'
import { HiDocumentReport } from 'react-icons/hi'
import { HiClipboardDocumentCheck } from 'react-icons/hi2'
import { BsFillPersonFill } from 'react-icons/bs'

const Sidebar = () => {

	const sidebarItems =
		[
			{ name: 'Dashboard', icon: <RiLayoutGridFill />, active: true},
			{ name: 'Audits', icon: <HiClipboardDocumentCheck /> },
			{ name: 'Auditors', icon: <BsFillPersonFill /> },
			{ name: 'Reports', icon: <HiDocumentReport /> },

		]
	const [user] = useAuthState(auth);

	return (

		<div>
			<nav className=" flex flex-col  bg-[#1b0909] w-16 md:w-64 h-full min-h-screen text-gray-900">

				<div className="flex flex-col justify-between h-full">

					<div>
						<div className='icon mx-2 mt-10 flex items-center px-2 md:px-4 space-x-4'>
							<div>
								<img src='https://www.pup.edu.ph/about/images/PUPLogo.png' className='w-10 h-auto' />
							</div>
							<div className='opacity-0 md:opacity-100 hidden md:block'>
								<h1 className=' text-white font-cinzel text-3xl font-semibold '>PUP</h1>
								<p className=' text-gray-200 font-cinzel text-[0.6rem] font-semibold '>AUDIT MANAGEMENT SYSTEM</p>
							</div>
						</div>

						{/* <div className='mx-2 mt-10'>
							<div className='px-2'>
								<input  className='text-sm text-gray-700 w-full px-6 py-2 rounded-md'/>
							</div>
						</div> */}

						<ul class="mx-2 mt-10" >

							{sidebarItems.map((item, i) => (
								<li className={`${item.active ? 'bg-red-800 hover:bg-red-700 ' : 'hover:bg-[#fa78784d] '} transition-all duration-300 cursor-pointer mb-2 px-4 md:px-8 py-4 h text-gray-100 flex flex-row items-center hover:text-white rounded`}>
									<span className='max-w-sm text-xl'>
										{item.icon}
									</span>
									<a href="#" className='ml-4'>
										<span class="text-sm text-center opacity-0 md:opacity-100 transition-all duration-75">{item.name}</span>

									</a>
								</li>
							))}



						</ul>
					</div>
					<div class="py-2 mb-2 flex items-center justify-between px-4 w-full space-x-2">
						<div className='flex space-x-2 items-center max-w-[20rem]'>
							<img
								src={user.photoURL}
								class="w-8 max-w-xs rounded-full"
							/>
							<div className='flex flex-col opacity-0 md:opacity-100 transition-all duration-75'>
								<p class="font-semibold text-white text-sm">{user.displayName}</p>
								<p class=" text-gray-100 text-[0.6rem]">{user.email}</p>


							</div>
						</div>
						<button onClick={() => auth.signOut()} className="hidden md:block text-white font-boldtext-2xl"><FiLogOut /></button>

					</div>
				</div>
			</nav>
		</div>
	)
}

export default Sidebar