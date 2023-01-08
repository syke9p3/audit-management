import React, { useEffect } from 'react'

export const useTitle = (title) => {
	useEffect(() => {
		const prevTitle = document.title
		document.title = `${title} - PUP Audit Management System`
		return () => {
			document.title = prevTitle
		}
	})
}

