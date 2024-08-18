/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Icons } from '@/components/shared/icons'
import MaxWidthWrapper from '@/components/shared/max-width-wrapper'
import { Reviews } from '@/components/shared/reviews'
import { Check, Star } from 'lucide-react'
import React from 'react'

const ValueProposition = () => {
	return (
		<section className=' py-24'>
			<MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
				<div className='flex flex-col items-center gap-4 sm:gap-6 lg:flex-row'>
					<h2 className='mg:text-6xl order-1  mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight'>
						Bizning{' '}
						<span className='relative px-2'>
							Mijozlarimiz{' '}
							<Icons.underline className='pointer-events-none absolute inset-x-0  -bottom-6 hidden text-blue-600 sm:block' />{' '}
						</span>{' '}
						nma deyishadi!
					</h2>
					{/* <img
						src='/snake-2.png'
						alt='snake'
						// eslint-disable-next-line tailwindcss/no-custom-classname
						className='order-0 w-24 lg:order-2'
					/> */}
				</div>
				<div className='mx-auto grid max-w-2xl grid-cols-1 gap-y-16 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
					<div className=' flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20 '>
						<div className='mb-2 flex gap-0.5'>
							<Star className='size-5 fill-blue-600 text-blue-600' />
							<Star className='size-5 fill-blue-600 text-blue-600' />
							<Star className='size-5 fill-blue-600 text-blue-600' />
							<Star className='size-5 fill-blue-600 text-blue-600' />
							<Star className='size-5 fill-blue-600 text-blue-600' />
						</div>
						<div className='text-lg leading-8'>
							<p>
								Menda bu kitob ikki yarim oydan beri bor va men hali ham sotib
								olganimdan xursandman.{' '}
								<span className='bg-blue-900 p-0.5'>
									Muqovaning dizayni juda chiroyli
								</span>{' '}
								va men hatto bir nechta maqtovlar oldim! Sahifalar qalin va
								bardoshli bo'lib, o'qishni zavqlantiradi. Oldin sotib olgan
								boshqa kitoblarim bilan bosma nashrlar o‘chib keta boshlaydi
								yoki sahifalari tezda eskiradi, lekin bu hali ham yangidek
								yaxshi ko‘rinadi. Bu kitobni yaratishga katta e'tibor
								qaratilgani aniq. Juda yoqtirdim!
							</p>
						</div>
						<div className='mt-2 flex gap-4'>
							<img
								className='size-12 rounded-full object-cover'
								src='/users/user-1.png'
								alt='user'
							/>
							<div className='flex flex-col'>
								<p className='font-semibold'>Jonathan</p>
								<div className='flex items-center gap-1.5'>
									<Check className='size-4 stroke-[3px] text-blue-600' />
									<p className='text-sm'>Verified Purchase</p>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
						<div className='mb-2 flex gap-0.5'>
							<Star className='size-5 fill-blue-600 text-blue-600' />
							<Star className='size-5 fill-blue-600 text-blue-600' />
							<Star className='size-5 fill-blue-600 text-blue-600' />
							<Star className='size-5 fill-blue-600 text-blue-600' />
							<Star className='size-5 fill-blue-600 text-blue-600' />
						</div>
						<div className='text-lg leading-8'>
							<p>
								Ushbu kitobni ochganimdan boshlab, men o'zgacha bir narsani
								ushlab turgandek bo'ldim. Qopqoq bu boy tuzilishga ega bo'lib,
								uni eski, qadrli jilddek his qiladi va ranglari xuddi men sotib
								olgan kundagidek jonli. Ikki yarim oy o'tdi va u hali ham
								birinchi marta ochganimdek toza ko'rinadi. Hech qanday
								pasaymaydi, eskirmaydi - faqat sof sifat. Bu{' '}
								<span className='bg-blue-900 p-0.5'>
									kitob shunchaki o'qish emas
								</span>{' '}
								Bu men ko'p yillar davomida saqlaydigan esdalik
							</p>
						</div>
						<div className='mt-2 flex gap-4'>
							<img
								className='size-12 rounded-full object-cover'
								src='/users/user-4.jpg'
								alt='user'
							/>
							<div className='flex flex-col'>
								<p className='font-semibold'>Josh</p>
								<div className='flex items-center gap-1.5'>
									<Check className='size-4 stroke-[3px] text-blue-600' />
									<p className='text-sm'>Verified Purchase</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
			<div className='pt-16'>
				<Reviews />
			</div>
		</section>
	)
}

export default ValueProposition
