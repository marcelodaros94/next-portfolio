import Experience from './components/Experience'
import MainBanner from './components/MainBanner'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] px-16 py-12">
      <MainBanner/>
      <Experience/>
    </main>
  )
}
