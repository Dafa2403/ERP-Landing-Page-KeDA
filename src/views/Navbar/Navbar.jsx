import { useState } from 'react'
import { Button, LoginDialog } from '../../components'

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-950">ERP</h2>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-950">About</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-950">Pricing</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-slate-950">Contact</a>
            <Button variant="outline" size="sm" onClick={() => setIsLoginOpen(true)}>
              Login
            </Button>
          </nav>
        </div>
      </header>

      <LoginDialog open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  )
}

export default Navbar
