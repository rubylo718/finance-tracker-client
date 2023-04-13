import Head from 'next/head'
import Layout from '@/components/Layout'
import RegisterComponent from '@/components/RegisterComponent'

const register = () => {
  return (
    <Layout>
			<Head>
				<title>Register | Finance Tracker</title>
			</Head>
			<RegisterComponent />
    </Layout>
  )
}

export default register