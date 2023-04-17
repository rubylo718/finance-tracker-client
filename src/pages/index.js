import Layout from '@/components/Layout'
import AuthService from '@/services/auth.service'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Toast from '@/utils/toast-helper'

export default function Home() {
	const router = useRouter()

	useEffect(() => {
		const checkTokenIsValid = async () => {
			const authToken = localStorage.getItem('authToken')
			if (!authToken) {
				Toast.fire({
					icon: 'warning',
					title: 'Please login.',
				})
				router.push('/users/login')
			} else {
				const user = await AuthService.getCurrentUser(authToken)
				if (user) {
					return
				} else {
					Toast.fire({
						icon: 'warning',
						title: 'Token expired. Please login again.'
					})
					router.push('/user/login')
				}
			}
		}
		checkTokenIsValid()
	}, [router])

	return (
		<Layout>
			<h1 className="text-center" style={{ padding: '5rem' }}>
				Welcome to Home Page
			</h1>
		</Layout>
	)
}
