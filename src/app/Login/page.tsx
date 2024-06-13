import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-8 text-blue-800">Log In</h1>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="ID"
              className="text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            ><a href="/dashboard">
              Sign In</a>
            </button>
          </form>
        </div>
        <div className="mt-8">
          <p className="text-gray-600">Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a></p>
        </div>
      </main>
    </div>
  )
};