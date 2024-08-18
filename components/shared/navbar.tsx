import MaxWidthWrapper from './max-width-wrapper'
import Logo from './logo'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight, LogOut, Mail } from 'lucide-react'
import { Separator } from '../ui/separator'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import ProfileTrigger from './profile-trigger'
import ModeToggle from './mode-toggle'
import ContactForm from '../forms/contact'

const Navbar = async () => {
	const { getUser } = getKindeServerSession()
	const user = await getUser()

	const isAdmin = user?.email === process.env.ADMIN_PANEL
	return (
		<div className='sticky inset-x-0 top-0 z-[100] h-14 w-full border-b   backdrop-blur-lg transition-all '>
			<MaxWidthWrapper>
				<div className='flex h-14 items-center justify-between border-b '>
					<Logo />
					<div className='flex h-full items-center space-x-4'>
						{user ? (
							<>
								{isAdmin ? (
									<>
										<Button variant={'ghost'} size={'sm'}>
											<Link href={'api/auth/logout'}>Dashboard ✨</Link>
										</Button>

										<DropdownMenu>
											<DropdownMenuTrigger>
												<ProfileTrigger />
											</DropdownMenuTrigger>
											<DropdownMenuContent>
												<DropdownMenuLabel>My Account</DropdownMenuLabel>
												<DropdownMenuSeparator />
												<div className='space-y-3'>
													<DropdownMenuItem className='space-x-2'>
														<Mail />
														<h1>{user.email}</h1>
													</DropdownMenuItem>
													<Link href={'api/auth/logout'}>
														<DropdownMenuItem>
															<LogOut />
															<Button variant={'ghost'} size={'sm'}>
																Sign out
															</Button>
														</DropdownMenuItem>
													</Link>
												</div>
											</DropdownMenuContent>
										</DropdownMenu>
									</>
								) : null}
								{/* <Button
									variant={'ghost'}
									size={'sm'}
									className='hidden items-center gap-1 sm:flex'
								>
									<Link href={'configuire/upload'}>
										Create case <ArrowRight className='ml-1.5 size-5' />
									</Link>
								</Button> */}
							</>
						) : (
							<>
								<Button variant={'ghost'} size={'sm'}>
									<Link href={'/api/auth/register'}>Sign up</Link>
								</Button>

								<Button variant={'ghost'} size={'sm'}>
									<Link href={'/api/auth/login'} className='flex items-center'>
										Log in
									</Link>
								</Button>
								<Separator orientation='vertical' className='h-8' />
								<ModeToggle />
								<Button
									size={'sm'}
									className='hidden items-center gap-1 sm:flex'
								>
									<Link href={'/contact'} className='flex items-center'>
										Contact <ArrowRight className='ml-1.5 size-5' />
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
