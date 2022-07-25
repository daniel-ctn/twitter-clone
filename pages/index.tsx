import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from 'components/layout/Sidebar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next JS App with Tailwind</title>
        <meta
          name="description"
          content="Next JS project with tailwind template"
        />
      </Head>

      <main className="h-screen max-w-2xl px-8">
        <Sidebar />
      </main>
    </>
  )
}

export default Home
