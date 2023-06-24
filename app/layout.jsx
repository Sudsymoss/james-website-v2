import './globals.css'
import Nav from './nav'
import Footer from './footer'
import Toaster from './toaster'
import Head from './head'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Head/>
        <Nav />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  )
}
