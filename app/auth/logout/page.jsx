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
const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETURL);


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
      <div>
                <div className={styles.login}>
                    <div className={styles.card}>
                        <h4 className={styles.title}>Logout!</h4>
                        <form>
                            <div className={styles.buttons}>
                                <button className={styles.crbtn} onClick={logOut} type="submit">Logout</button>
                                <Link passHref legacyBehavior href="/"><a className={styles.btn} >Cancel</a></Link>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>

    </div>
    
  )

}