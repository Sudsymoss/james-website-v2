import './globals.css'
import Nav from './nav'
import Footer from './footer'
import Toaster from './toaster'
import Link from 'next/link'


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
        <div className='create'>
          <Link href='/projects/create'>
          <button className='button'>
            <span className='span'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Create
            </span>
          </button>
          </Link>
        </div>
      </body>
    </html>
  )
}
