import Nav     from '@/components/Nav'
import Hero    from '@/components/sections/Hero'
import About   from '@/components/sections/About'
import Work    from '@/components/sections/Work'
import Cases   from '@/components/sections/Cases'
import Writing from '@/components/sections/Writing'
import Contact from '@/components/sections/Contact'

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Cases />
        <Writing />
      </main>
      <Contact />
    </>
  )
}
