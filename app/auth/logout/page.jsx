"use client";
import PocketBase from 'pocketbase';
import styles from '../Auth.module.css'
import Head from 'next/head';
import Link from 'next/link';
import { Source_Sans_Pro } from '@next/font/google';
import { useEffect } from 'react';
import * as React from "react";
import toast from "../../toast";

const SourceSansPro = Source_Sans_Pro({
  weight: '400',
  subsets: ['latin'],
})
const pb = new PocketBase(process.env.POCKET_URL);


export default function Login() {
  const notify = React.useCallback((type, message) => {
    toast({ type, message });
    console.log(type, message)
  }, []);
  function logOut() {
    pb.authStore.clear();
    window.location.replace("/")
    return
  }
  const status = pb.authStore.isValid
  if (status === false) {
    useEffect(() => {
      //  Code that uses the window object goes here
      window.location.replace("/auth/login")
    }, []);
    return notify("warning", "You're logged out! Redirecting....")
  }
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.loginbox}>
          <h1>Logout</h1>
          <div className={styles.logprov}>
            <button onClick={logOut} className={styles.loginbtn} style={SourceSansPro.style}>Signout</button>
          </div>
          <Link legacyBehavior passHref href="/"><a className={styles.logincancel}>Cancel</a></Link>
        </div>
      </div>
    </div>
  )

}