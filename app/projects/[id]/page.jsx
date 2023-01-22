export const dynamic = 'force-dynamic'
export const revalidate = 0
import { Suspense } from "react"
import Project from './project'
import Clientcomp from './client'
import Load from '../../loading'
// Pages are Server Components by default
export default function Page({params}) {
  return (
    <Clientcomp>
      <Suspense fallback={<Load/>}>
          <Project id={params}/>
      </Suspense>
    </Clientcomp>
  );
}