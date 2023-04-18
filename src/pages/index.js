import Layout from '@/components/Layout'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/contexts/AuthContext'

export default function Home() {
	const router = useRouter()
	const { isAuthenticated, currentUser } = useAuth()
	useEffect(() => {
		if (!isAuthenticated) {
			router.push('/users/login')
		}
	}, [router, isAuthenticated])

	return (
		<Layout>
			<div style={{ padding: '5rem' }}>
				<h1 className="text-center">
					Hello, {currentUser?.name}. <br />
					Welcome to Finance Tracker
				</h1>
				<div className="row">
					<div className="col-sm-6 mt-4">
						<div
							className="card  text-bg-warning"
							onClick={() => {
								router.push('/records/newRecord')
							}}
						>
							<div className="card-body">
								<h5 className="card-title">按此新增紀錄</h5>
								<p className="card-text">
									新增一筆紀錄：包含名稱、類型、以及金額。
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 mt-4">
						<div
							className="card text-bg-info"
							onClick={() => {
								router.push('/records/')
							}}
						>
							<div className="card-body">
								<h5 className="card-title">按此查看數據</h5>
								<p className="card-text">查看紀錄以及總金額。</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 mt-4">
						<div
							className="card  text-bg-secondary"
							onClick={() => {
								router.push('/users/'+ currentUser._id)
							}}
						>
							<div className="card-body">
								<h5 className="card-title">使用者資料修改</h5>
								<p className="card-text">
									修改使用者名稱、密碼等資料。
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 mt-4">
						<div
							className="card  text-bg-success"
							onClick={() => {
								router.push('/admin/')
							}}
						>
							<div className="card-body">
								<h5 className="card-title">管理員專區</h5>
								<p className="card-text">
									各項資料維護。
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
