import { useState } from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 dark:bg-black/40 border-b border-white/20 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 text-white"><Rocket className="h-5 w-5" /></span>
            <span className="text-xl">Flux</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700 dark:text-gray-300">
            <a href="#features" className="hover:text-gray-900 dark:hover:text-white transition">Features</a>
            <a href="#showcase" className="hover:text-gray-900 dark:hover:text-white transition">Showcase</a>
            <a href="#pricing" className="hover:text-gray-900 dark:hover:text-white transition">Pricing</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="px-4 py-2 text-sm rounded-md border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 transition">Sign in</a>
            <a href="#cta" className="px-4 py-2 text-sm rounded-md bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 text-white shadow hover:opacity-90 transition">Get Started</a>
          </div>

          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <a href="#features" className="block px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10">Features</a>
            <a href="#showcase" className="block px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10">Showcase</a>
            <a href="#pricing" className="block px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10">Pricing</a>
            <div className="flex gap-2 pt-2">
              <a href="#" className="flex-1 px-4 py-2 text-center rounded-md border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 transition">Sign in</a>
              <a href="#cta" className="flex-1 px-4 py-2 text-center rounded-md bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 text-white shadow hover:opacity-90 transition">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
