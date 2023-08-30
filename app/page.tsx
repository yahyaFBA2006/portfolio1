

import Intro from "@/components/Intro"
import About from "@/components/About"
 import Skills from "@/components/Skills"
import Projects from '@/components/Project'
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
 
<Intro/>
<About/>
<Skills/>
<Projects/>
<Experience/>
<Contact/>

    </main>
  )
}
