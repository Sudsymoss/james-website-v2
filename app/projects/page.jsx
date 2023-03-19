export const revalidate = 120
import { Suspense } from "react"
import Projects from './projects'
import Clientcomp from './clientcomp'
import Load from './projectloader'
// Pages are Server Components by default
export default function Page() {
  return (
    <Clientcomp>
      <Suspense fallback={<Load/>}>
          <Projects />
      </Suspense>
    </Clientcomp>
  );
}