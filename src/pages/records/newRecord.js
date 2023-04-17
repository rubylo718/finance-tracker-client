import Head from 'next/head'
import Layout from '../../components/Layout'
import NewRecordComponent from '@/components/NewRecordComponent'

const newRecord = () => {
	return (
		<Layout>
			<Head>
				<title>New Record | Finance Tracker</title>
			</Head>
			<NewRecordComponent />
		</Layout>
	)
}

export default newRecord
