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
    </div>

  );
}
