import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Tsuchi</title>
      </Head>

      <h1 className="text-center text-5xl">Welcome to Tsuchi</h1>
      <Link href="/register">Click here to register</Link>
      <Link href="/login">Click here to login</Link>
    </div>
  )
}
