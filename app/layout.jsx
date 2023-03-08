import './globals.css'
import Nav from './nav'
import Footer from './footer'
import Toaster from './toaster'
import Socials from './socials'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Nav />
        <Toaster />
        {children}
        <Footer />
        <Socials/>
      </body>
    </html>
  )
}
