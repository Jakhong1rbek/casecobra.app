import Navbar from '@/components/shared/navbar'
import { ChildProps } from '@/types'
import React from 'react'

function layout({ children }: ChildProps) {
	return (
		<main>
			<Navbar />
			{children}
		</main>
	)
}

export default layout
