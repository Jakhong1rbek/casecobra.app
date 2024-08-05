import Link from 'next/link'
import React from 'react'

const Logo = () => {
	return (
		<Link href={'/'} className='z-40 flex font-semibold'>
			case <span className='text-green-600'>cobra</span>
		</Link>
	)
}

export default Logo
