import Nav        from '@/components/Nav'
import Hero       from '@/components/sections/Hero'
import Stats      from '@/components/sections/Stats'
import Story      from '@/components/sections/Story'
import Experience from '@/components/sections/Experience'
import Work       from '@/components/sections/Work'
import Cases      from '@/components/sections/Cases'
import Skills     from '@/components/sections/Skills'
// import Writing from '@/components/sections/Writing'   // hidden for now — no posts published yet
import Contact    from '@/components/sections/Contact'

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />

      <main
        className="wrap"
        style={{
          padding: '44px 32px 64px',
          display: 'flex', flexDirection: 'column', gap: 44,
        }}
      >
        <Stats />
        <Story />
        <Work />
        <Cases />
        <Experience />
        <Skills />
        {/* <Writing /> */}
      </main>

      <Contact />
    </>
  )
}
