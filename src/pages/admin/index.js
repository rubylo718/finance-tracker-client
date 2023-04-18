import Layout from '@/components/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function AdminHome() {
	const router = useRouter()
	return (
		<Layout>
			<Head>
				<title>Admin Home | Finance Tracker</title>
			</Head>
			<h1 className="text-center" style={{ paddingTop: '5rem' }}>
				This page is under construction.
			</h1>
			<div className="d-flex justify-content-center p-4">
				<button
					className="btn btn-info"
					type="button"
					onClick={() => {
						router.back()
					}}
				>
					Back
				</button>
			</div>
		</Layout>
	)
}