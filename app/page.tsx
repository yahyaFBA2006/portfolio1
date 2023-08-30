import Intro from "@/components/Intro"
import About from "@/components/About"
import Projects from "@/components/Projects"
 import Skills
  from "@/components/Skills"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
 
<Intro/>
<About/>
<Projects/>
<Skills/>
<Experience/>
<Contact/>
    </main>
  )
}
