import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-gray-200/70 dark:border-white/10 bg-gradient-to-br from-white/80 to-white/60 dark:from-white/10 dark:to-white/5 backdrop-blur p-10 shadow-lg"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Ready to launch something futuristic?</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">Ship an interactive, minimalist landing page with 3D and motion in minutes.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="px-6 py-3 rounded-md text-white bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 shadow-lg shadow-indigo-500/20 hover:opacity-90 transition">Get started free</a>
            <a href="#pricing" className="px-6 py-3 rounded-md border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 transition">See pricing</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
