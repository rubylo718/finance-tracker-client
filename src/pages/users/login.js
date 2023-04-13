import Head from "next/head"
import Layout from "@/components/Layout"
import LoginComponent from "@/components/LoginComponent"

const login = () => {
  return (
    <Layout>
			<Head>
				<title>Login | Finance Tracker</title>
			</Head>
			<LoginComponent />
    </Layout>
  )
}

export default login