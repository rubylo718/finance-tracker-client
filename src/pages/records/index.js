import Head from 'next/head'
import Layout from '../../components/Layout'
import RecordComponent from '@/components/RecordComponent'

const index = () => {
	return (
		<Layout>
			<Head>
				<title>Records | Finance Tracker</title>
			</Head>
			<RecordComponent />
		</Layout>
	)
}

export default index
