/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
	imgSrc: string
	dark?: boolean
}
const Phone = ({ imgSrc, className, dark = true, ...props }: PhoneProps) => {
	return (
		<div
			className={cn(
				'pointer-events-none relative  z-50 overflow-hidden',
				className
			)}
			{...props}
		>
			<img
				src={imgSrc}
				alt='phone image'
				className='pointer-events-none z-50 select-none'
			/>
			<div className='absolute inset-0 -z-10'>
				<img
					src={imgSrc}
					alt='overlaying phone image'
					className='object-cover'
				/>
			</div>
		</div>
	)
}

export default Phone
