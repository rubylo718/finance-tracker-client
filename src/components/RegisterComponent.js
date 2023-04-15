import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthService from '../services/auth.service'

const RegisterComponent = () => {
	const router = useRouter()
	let [name, setName] = useState('')
	let [email, setEmail] = useState('')
	let [password, setPassword] = useState('')
	let [checkPassword, setCheckPassword] = useState('')

	const handleName = (e) => {
		setName(e.target.value)
	}

	const handleEmail = (e) => {
		setEmail(e.target.value)
	}

	const handlePassword = (e) => {
		setPassword(e.target.value)
	}

	const handleCheckPassword = (e) => {
		setCheckPassword(e.target.value)
	}

	const handleRegister = (e) => {
		AuthService
			.register({name, email, password, checkPassword})
			.then(() => {
				router.push('/users/login')
			})
			.catch((e) => {
				console.log(e)
			})
	}

	return (
		<div className="row justify-content-md-center">
			<div style={{ padding: '5rem' }} className="col-md-10">
				<form>
					<div>
						<label htmlFor="name" className="form-label">
							用戶名稱
						</label>
						<input
							onChange={handleName}
							type="text"
							className="form-control"
							id="name"
						/>
					</div>
					<br />
					<div className="form-group">
						<label htmlFor="email" className="form-label">
							電子信箱
						</label>
						<input
							onChange={handleEmail}
							type="text"
							className="form-control"
							id="email"
						/>
					</div>
					<br />
					<div className="form-group">
						<label htmlFor="password" className="form-label">
							密碼
						</label>
						<input
							onChange={handlePassword}
							type="password"
							className="form-control"
							id="password"
							placeholder="長度至少超過 8 個英文或數字"
						/>
					</div>
					<br />
					<div className="form-group">
						<label htmlFor="checkPassword" className="form-label">
							確認密碼
						</label>
						<input
							onChange={handleCheckPassword}
							type="password"
							className="form-control"
							id="checkPassword"
							placeholder="請再輸入一次您的密碼"
						/>
					</div>
					<br />
					<button
						type="submit"
						onClick={handleRegister}
						className="btn btn-primary"
					>
						註冊
					</button>
				</form>
			</div>
		</div>
	)
}

export default RegisterComponent
