"use client";
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import TimeLeft from './timeleft'
//import PocketBase from 'pocketbase';
//const pb = new PocketBase("http://192.168.86.178:8090")

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>James M</h1>
      <div>
      <a className={styles.button} href='/projects'>
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>Explore projects
</a>
      </div>
    </main>
  )
}
