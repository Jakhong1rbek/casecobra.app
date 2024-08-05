import MaxWidthWrapper from './max-width-wrapper'
import Logo from './logo'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Separator } from '../ui/separator'

const Navbar = () => {
	const user = undefined
	const isAdmin = false
	return (
		<div className='sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all '>
			<MaxWidthWrapper>
				<div className='flex h-14 items-center justify-between border-b border-zinc-200'>
					<Logo />
					<div className='flex h-full items-center space-x-4'>
						{user ? (
							<>
								<Button variant={'ghost'} size={'sm'}>
									<Link href={'api/auth/logout'}>Sign out</Link>
								</Button>

								{isAdmin ? (
									<Button variant={'ghost'} size={'sm'}>
										<Link href={'api/auth/logout'}>Dashboard✨</Link>
									</Button>
								) : null}
								<Button
									variant={'ghost'}
									size={'sm'}
									className='hidden items-center gap-1 sm:flex'
								>
									<Link href={'configuire/upload'}>
										Create case <ArrowRight className='ml-1.5 size-5' />
									</Link>
								</Button>
							</>
						) : (
							<>
								<Button variant={'ghost'} size={'sm'}>
									<Link href={'api/auth/register'}>Sign up</Link>
								</Button>

								<Button variant={'ghost'} size={'sm'}>
									<Link href={'api/auth/login'} className='flex items-center'>
										Log in
									</Link>
								</Button>
								<Separator orientation='vertical' className='h-8' />
								<Button
									size={'sm'}
									className='hidden items-center gap-1 sm:flex'
								>
									<Link
										href={'configuire/upload'}
										className='flex items-center'
									>
										Create case <ArrowRight className='ml-1.5 size-5' />
									</Link>
								</Button>
							</>
						)}
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	)
}

export default Navbar
