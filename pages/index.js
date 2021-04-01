import Layout from '../components/layout'
import Head from 'next/head'

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Ana SAYFA</title>
      </Head>
      <h1 className="title">İlk web siteme hoşgeldin!</h1>
      <style jsx>{``}</style>
    </Layout>
  )
}

export default HomePage
