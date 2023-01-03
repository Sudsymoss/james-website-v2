import { Suspense } from "react"
import Load from '../loading'
import Projects from './projects'
export const revalidate = 1;
// Pages are Server Components by default
export default function Page() {
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