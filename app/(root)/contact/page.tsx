import ContactForm from '@/components/forms/contact'
import { Dot, HomeIcon, Mail, Phone } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
	title: 'Contact  Us',
}
function ContactPage() {
	return (
		<div className='mx-auto mb-40 max-w-6xl max-md:mb-12 max-md:ml-10   '>
			<div className='relative flex min-h-[20vh] flex-col items-center justify-center   '>
				<h1 className='  text-4xl max-md:text-3xl'>
					<span>Bog&apos;lanish</span>
				</h1>
				<div className='mt-4 flex items-center gap-2'>
					<Link href={'/'} className='flex items-center gap-2'>
						<HomeIcon className='size-4' />
						<span className='hover:underline'>IQRO</span>
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Bog&apos;lanish</p>
				</div>
			</div>
			<div className='grid grid-cols-2 gap-4 max-md:grid-cols-1'>
				<div className='flex flex-col '>
					<h1 className=' text-4xl max-md:text-3xl'>
						IQRO bilan bog&apos;lanish
					</h1>
					<p className='mt-2 text-muted-foreground'>
						Murojat va takliflar uchun companiya bilan bog&apos;lanish
						bo&apos;limi.
					</p>
					<div className='mt-12 flex items-center gap-2'>
						<Mail className='size-4 ' />
						<span>@iqro.info.com</span>
					</div>
					<div className='mt-2 flex items-center gap-2'>
						<Phone className='size-4 ' />
						<span>+82 010 4838 7177</span>
					</div>
				</div>
				<div className='flex flex-col space-y-3'>
					<h1 className=' text-4xl max-md:mt-4 max-md:text-3xl'>
						Contact Form
					</h1>
					<ContactForm />
				</div>
			</div>
		</div>
	)
}

export default ContactPage
