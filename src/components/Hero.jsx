import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white pointer-events-none dark:from-black/40 dark:via-black/30 dark:to-black" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Futuristic experiences for the modern web
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300"
          >
            Build interactive, tech-forward sites with immersive 3D, elegant motion, and minimalist aesthetics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#cta" className="px-6 py-3 rounded-md text-white bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 shadow-lg shadow-indigo-500/20 hover:opacity-90 transition text-center">
              Launch your project
            </a>
            <a href="#features" className="px-6 py-3 rounded-md border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 transition text-center">
              Explore features
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
