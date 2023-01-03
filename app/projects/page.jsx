import { Suspense } from "react"
import Load from '../loading'
import Projects from './projects'


import ClientComponent from "./client";
export const revalidate = 1;
// Pages are Server Components by default
export default function Page() {
  return (
    <ClientComponent>
      <Suspense fallback={<Load/>}>
                <Projects/>
        </Suspense>
    </ClientComponent>
  );
}