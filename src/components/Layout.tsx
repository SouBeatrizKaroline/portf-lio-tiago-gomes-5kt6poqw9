import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { CustomCursor } from './CustomCursor'
import { CinematicLoader } from './CinematicLoader'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F5F5F5] font-sans antialiased selection:bg-[#D90429] selection:text-white relative">
      <CinematicLoader />
      <CustomCursor />
      <Navbar />
      <main className="relative overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
