import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Quiz from './Quiz'

const inter = Inter({ subsets: ['latin'] })

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div>
          <Quiz />
        </div>
      </main>
    </>
  )
}

export default Home;
