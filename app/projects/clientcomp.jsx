'use client';
import styles from './Projectspage.module.css'
import * as React from "react";
import toast from "../toast";
// Pages are Server Components by default
export default function Page({children}) {
  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);
  notify("warning", 'Projects may not update properly due to a server issue!')
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