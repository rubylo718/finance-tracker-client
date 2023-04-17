import Layout from '@/components/Layout'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/contexts/AuthContext'

export default function Home() {
	const router = useRouter()
	const { isAuthenticated } = useAuth()
	useEffect(() => {
		if (!isAuthenticated) {
			router.push('/users/login')
		} 
	}, [router, isAuthenticated])

	return (
		<Layout>
			<h1 className="text-center" style={{ padding: '5rem' }}>
				Welcome to Home Page
			</h1>
		</Layout>
	)
}
