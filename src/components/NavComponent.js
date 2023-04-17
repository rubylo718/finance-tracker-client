import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/AuthContext'
import Toast from '@/utils/toast-helper'

const NavComponent = () => {
	const router = useRouter()
	const { logout, currentUser } = useAuth()
	const handleLogout = () => {
		logout()
		Toast.fire({
			icon: 'success',
			title: 'Logout successfully. See U :)',
		})
		router.push('/users/login')
	}

	return (
		<div className="container">
			<nav className="navbar fixed-top" style={{ backgroundColor: '#e3f2fd' }}>
				<div className="container-fluid">
					<Link className="navbar-brand" href="/">
						Finance Tracker
					</Link>
					{currentUser && (
						<button
							onClick={handleLogout}
							className="btn btn-light"
							role="button"
						>
							Logout
						</button>
					)}
				</div>
			</nav>
		</div>
	)
}

export default NavComponent
