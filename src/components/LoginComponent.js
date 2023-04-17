import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Toast from '../utils/toast-helper'
import { useAuth } from '../contexts/AuthContext'

const LoginComponent = () => {
	const router = useRouter()
	let [email, setEmail] = useState('')
	let [password, setPassword] = useState('')

	const handleEmail = (e) => {
		setEmail(e.target.value)
	}
	const handlePassword = (e) => {
		setPassword(e.target.value)
	}

	const { login, isAuthenticated } = useAuth()

	const handleLogin = async (e) => {
		e.preventDefault()
		const { status, message } = await login({ email, password })
		if (status === 'success') {
			Toast.fire({ icon: 'success', title: message })
		} else {
			Toast.fire({ icon: 'error', title: message })
		}
		return
	}

	useEffect(() => {
		if (isAuthenticated) {
			router.push('/')
		}
	}, [router, isAuthenticated])

	return (
		<div className="row justify-content-md-center">
			<div style={{ padding: '5rem' }} className="col-md-10">
				<form onSubmit={handleLogin}>
					<div>
						<label htmlFor="email" className="form-label">
							電子信箱
						</label>
						<input
							onChange={handleEmail}
							type="email"
							className="form-control"
							id="email"
							required
						/>
					</div>
					<br />
					<div>
						<label htmlFor="password" className="form-label">
							密碼
						</label>
						<input
							onChange={handlePassword}
							type="password"
							className="form-control"
							id="password"
							required
						/>
					</div>
					<br />
					<div>
						<button type="submit" className="btn btn-primary">
							登入
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default LoginComponent
