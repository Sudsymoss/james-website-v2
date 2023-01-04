export const dynamic = 'force-dynamic'
export const revalidate = 0
import { Suspense } from "react"
import Projects from './projects'
import Clientcomp from './clientcomp'
import Load from '../loading'
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