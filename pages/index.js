import Head from 'next/head'

// components
import Menu from '../components/Menu'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Bootstrap Starter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Menu />
      <Header />
      <Footer />
    </>
  )
}
