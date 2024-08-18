'use client'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function ModeToggle() {
	const [isMount, setIsMount] = useState(false)
	useEffect(() => {
		setIsMount(true)
	}, [])

	const { setTheme, resolvedTheme } = useTheme()
	return isMount && resolvedTheme === 'light' ? (
		<Button size={'icon'} variant={'ghost'} onClick={() => setTheme('dark')}>
			<Moon />
		</Button>
	) : (
		<Button size={'icon'} variant={'ghost'} onClick={() => setTheme('light')}>
			<Sun />
		</Button>
	)
}

export default ModeToggle
