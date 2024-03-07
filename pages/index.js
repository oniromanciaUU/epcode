import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Copy the below text</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Copy the below text" />
        <p className="description">
    rundll32 printui.dll,PrintUIEntry /y /in /n \\edp-uu-prn01.user.uu.se\eduPrint-UU
      
<! --    Get started by editing <code>pages/index.js</code> -->
        </p>
      </main>

      <Footer />
    </div>
  )
}
