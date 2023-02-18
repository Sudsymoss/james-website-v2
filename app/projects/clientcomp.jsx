'use client';
import styles from './Projectspage.module.css'
import * as React from "react";
import Link from 'next/link'
// Pages are Server Components by default
export default function Page({children}) {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1>Projects</h1>
      </div>
      <div>
        {children}
      </div>
      <div className={styles.create}>
          <Link href='/projects/create'>
          <button className={styles.button}>
            <span className={styles.span}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Create
            </span>
          </button>
          </Link>
        </div>
    </div>

  );
}