import React from 'react'

const Stats = () => {
	return (
		<div className='px-8 py-12 my-6 w-full rounded-md bg-white shadow-md space-y-12 md:space-y-0 md:flex justify-between'>
			<div className="space-y-12 md:space-y-0 md:flex md:space-x-12">
				<div className='space-y-2'>
					<h2 className='text-4xl font-semibold text-blue-800'>312</h2>
					<p className='text-xs font-semibold text-gray-500'>Audits</p>
				</div>
				<div className='space-y-2'>
					<h2 className='text-4xl font-semibold text-emerald-600'>267</h2>
					<div>
						<p className='text-xs font-semibold text-gray-500'>Compliant</p>
					</div>
				</div>
				<div className='space-y-2'>
					<h2 className='text-4xl font-semibold text-red-600'>45</h2>
					<div>
						<p className='text-xs font-semibold text-gray-500'>Non-compliant</p>
					</div>
				</div>
			</div>
			<div className='self-center'>
				<button className=' min-w-fit md:ml-8 border-2 text-xs font-semibold text-red-500 hover:text-white hover:bg-red-500 border-red-500 px-2 py-2 rounded-md'>
					View Audit Summary
				</button>
			</div>
		</div>
	)
}

export default Stats