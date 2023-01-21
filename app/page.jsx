"use client";
import Image from 'next/image'
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
      <TimeLeft/>
    </main>
  )
}
