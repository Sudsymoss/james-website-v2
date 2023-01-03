import styles from './Projectspage.module.css'
import { Suspense } from "react"
import Load from '../loading'
import Projects from './projects'

import * as React from "react";
import toast from "../../toast";
export const revalidate = 1;
// Pages are Server Components by default
export default function Page() {
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
                    
      <Suspense fallback={<Load/>}>
                <Projects/>
        </Suspense>
                </div>
            </div>
    
  );
}