import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-5xl font-bold mb-4 text-blue-500">Home</h1>
          <div className="flex gap-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600"><a href="./Login">Sign In</a>
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600"><a href="./signup">Sign Up</a>
            </button>
            </div>
          
        </div>
      </main>
    </div>
  )
};