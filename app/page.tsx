

import Intro from "@/components/Intro"
import About from "@/components/About"
import Project from "@/components/Project"
 import Skills
  from "@/components/Skills"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
 
<Intro/>
<About/>
<Skills/>
<Experience/>
<Contact/>
<Project/>
    </main>
  )
}
