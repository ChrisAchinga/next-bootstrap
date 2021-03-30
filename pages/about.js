import Head from 'next/head'

// components
import Menu from '../components/Menu'
import Header from '../components/Header'
import Footer from '../components/Footer'

 const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Menu />
      <main>
        <Header head='About' description='A nextJS Bootstrap About Page Starter' />
      </main>
      <Footer />
    </>
  )
}


export default About