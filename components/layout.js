import Navigation from './navigation'
import Head from 'next/head'
function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Kutluhan Kip'in web sitesi</title>
        <meta
          name="viewport"
          content="initical-scale=1.0, width=device-width"
        />
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer>Designed by xXx</footer>
    </div>
  )
}

export default Layout
