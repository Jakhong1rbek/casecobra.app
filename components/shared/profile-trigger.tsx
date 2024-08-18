import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const ProfileTrigger = async () => {
	const { getUser } = getKindeServerSession()
	const user = await getUser()
	return (
		<div className='flex size-10 items-center justify-center rounded-full bg-orange-500 '>
			{user?.email?.charAt(0)}
		</div>
	)
}

export default ProfileTrigger
