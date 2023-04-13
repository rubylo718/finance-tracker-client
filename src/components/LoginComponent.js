const LoginComponent = () => {
	return (
		<div className="row justify-content-md-center">
			<div style={{ padding: '5rem' }} className="col-md-10">
				<form>
					<div className="mb-2">
						<label htmlFor="username" className="form-label">
							電子信箱
						</label>
						<input type="text" className="form-control" name="email" />
					</div>
					<br />
					<div className="mb-2">
						<label htmlFor="password">密碼</label>
						<input type="password" className="form-control" name="password" />
					</div>
					<br />
					<div className="mb-2">
						<button className="btn btn-primary">登入</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default LoginComponent
