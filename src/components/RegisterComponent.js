const RegisterComponent = () => {
	return (
		<div className="row justify-content-md-center">
			<div style={{ padding: '5rem' }} className="col-md-10">
				<form>
					<div>
						<label htmlFor="username" className="form-label">
							用戶名稱
						</label>
						<input type="text" className="form-control" name="username" />
					</div>
					<br />
					<div className="form-group">
						<label htmlFor="email" className="form-label">
							電子信箱
						</label>
						<input type="text" className="form-control" name="email" />
					</div>
					<br />
					<div className="form-group">
						<label htmlFor="password" className="form-label">
							密碼
						</label>
						<input
							type="password"
							className="form-control"
							name="password"
							placeholder="長度至少超過 8 個英文或數字"
						/>
					</div>
					<br />
					<div className="form-group">
						<label htmlFor="password" className="form-label">
							確認密碼
						</label>
						<input
							type="password"
							className="form-control"
							name="checkPassword"
							placeholder="請再輸入一次您的密碼"
						/>
					</div>
					<br />
					<button className="btn btn-primary">
						註冊
					</button>
				</form>
			</div>
		</div>
	)
}

export default RegisterComponent
