/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import MaxWidthWrapper from '@/components/shared/max-width-wrapper'
import { Check, Star } from 'lucide-react'
import ValueProposition from '../_components/value'

export default function HomePage() {
	return (
		<div className=''>
			<MaxWidthWrapper className=' pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pb-52 lg:pt-24 xl:gap-x-8 xl:pt-10 '>
				<div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
					<div className='relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left'>
						{/* <div className='absolute -top-20 left-0 hidden w-28 lg:block'>
							<img src='/snake-1.png' className='w-full' alt='snake' />
						</div> */}
						<h1 className='relative mt-16  w-fit text-balance text-5xl font-bold !leading-tight tracking-tight md:text-6xl  lg:text-5xl'>
							Bizning javonlarimiz orasidan keyingi ajoyib{' '}
							<span className='rounded-sm bg-blue-600 px-2 '>kitobingizni</span>{' '}
							toping.
						</h1>
						<p className='"lg:text-left mt-8  max-w-prose text-balance  text-lg md:text-wrap lg:pr-10'>
							Har bir kitob o'ziga jalb qiladigan, har bir hikoya sehrlab
							qo'yadigan va har bir o'quvchi g'ayrioddiy kashfiyot va tasavvur
							sayohatiga otlanadigan{' '}
							<span className='rounded-sm bg-blue-600 px-2'>IQRO</span> ga qadam
							qo'ying.
						</p>
						<ul className='mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start'>
							<div className='space-y-2'>
								<li className='flex items-center gap-1.5 text-left'>
									<Check className='size-5 shrink-0 text-blue-600' />
									Faqat siz uchun tanlangan kitoblar{' '}
								</li>
								<li className='flex items-center gap-1.5 text-left'>
									<Check className='size-5 shrink-0 text-blue-600' />
									Mutaxassis tavsiyalari va do'stona xizmat{' '}
								</li>
								<li className='flex items-center gap-1.5 text-left'>
									<Check className='size-5 shrink-0 text-blue-600' />
									Kitob ixlosmandlari uchun qulay joy{' '}
								</li>
							</div>
						</ul>
						<div className='mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start'>
							<div className='flex -space-x-4'>
								<img
									src='/users/user-1.png'
									alt='user image'
									className='inline-block size-10 rounded-full ring-2'
								/>
								<img
									src='/users/user-2.png'
									alt='user image'
									className='inline-block size-10 rounded-full ring-2'
								/>
								<img
									src='/users/user-3.png'
									alt='user image'
									className='inline-block size-10 rounded-full ring-2'
								/>
								<img
									src='/users/user-4.jpg'
									alt='user image'
									className='inline-block size-10 rounded-full ring-2'
								/>
								<img
									src='/users/user-5.jpg'
									alt='user image'
									className='inline-block size-10 rounded-full ring-2 '
								/>
							</div>
							<div className='flex flex-col items-center justify-between sm:items-start'>
								<div className='flex gap-0.5'>
									<Star className='size-4 fill-green-600 text-green-600' />
									<Star className='size-4 fill-green-600 text-green-600' />
									<Star className='size-4 fill-green-600 text-green-600' />
									<Star className='size-4 fill-green-600 text-green-600' />
									<Star className='size-4 fill-green-600 text-green-600' />
								</div>
								<p>
									<span className='font-semibold'>1,250</span> Hursand
									Mijozlarimiz
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='col-span-full  mt-32 flex h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20'>
					<div className='relative md:max-w-xl'>
						{/* <img
							src='/your-image.png'
							alt='your image'
							className='absolute -top-20 left-56 hidden w-40 select-none sm:block lg:hidden lg:w-52 xl:block'
						/> */}
						<img
							src='/line.png'
							alt='line'
							className='absolute -bottom-6 -left-6 w-20 select-none'
						/>
						<img
							src='/main.jpg'
							alt='main books'
							className='h-[500px] rounded-lg object-cover'
						/>
					</div>
				</div>
			</MaxWidthWrapper>

			<ValueProposition />
			{/* <section>
				<MaxWidthWrapper className='py-24'>
					<div className='mb-12 px-16 lg:px-8'>
						<div className='mx-auto max-w-2xl sm:text-center'>
							<h2 className='mg:text-6xl order-1  mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight'>
								Upload your photo and get
								<span className='relative px-2'>
									your own case
									<Icons.underline className='pointer-events-none absolute inset-x-0  -bottom-6 hidden text-blue-600 sm:block' />{' '}
								</span>{' '}
								now
							</h2>
						</div>
					</div>
					<div className='mx-auto max-w-6xl px-6 lg:px-8'>
						<div className='relative flex grid-cols-2 flex-col items-center gap-40 md:grid'>
							<img
								src='/arrow.png'
								className='absolute left-1/2 top-[25rem] z-10 -translate-x-1/2 -translate-y-1/2 rotate-90 md:top-1/2 md:rotate-0'
							/>

							<div className='relative h-80 w-full max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 md:h-full md:justify-self-end lg:rounded-2xl'>
								<img
									src='/horse.jpg'
									className='size-full rounded-md bg-white object-cover shadow-2xl ring-1 ring-gray-900/10'
								/>
							</div>

							<Phone className='w-60' imgSrc='/horse_phone.jpg' />
						</div>
					</div>

					<ul className='mx-auto mt-12 w-fit max-w-prose space-y-2 sm:text-lg'>
						<li className='w-fit'>
							<Check className='mr-1.5 inline size-5 text-green-600' />
							High-quality silicone material
						</li>
						<li className='w-fit'>
							<Check className='mr-1.5 inline size-5 text-green-600' />
							Scratch- and fingerprint resistant coating
						</li>
						<li className='w-fit'>
							<Check className='mr-1.5 inline size-5 text-green-600' />
							Wireless charging compatible
						</li>
						<li className='w-fit'>
							<Check className='mr-1.5 inline size-5 text-green-600' />5 year
							print warranty
						</li>

						<div className='flex justify-center'>
							<Link
								className={buttonVariants({
									size: 'lg',
									className: 'mx-auto mt-8',
								})}
								href='/configure/upload'
							>
								Create your case now <ArrowRight className='ml-1.5 size-4' />
							</Link>
						</div>
					</ul>
				</MaxWidthWrapper>
			</section> */}
		</div>
	)
}
