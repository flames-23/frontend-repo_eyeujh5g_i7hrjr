import { Sparkles, Cpu, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Sparkles,
    title: 'Elegant Motion',
    desc: 'Micro-animations that guide focus and delight users without getting in the way.'
  },
  {
    icon: Cpu,
    title: '3D Interactivity',
    desc: 'Immersive scenes powered by Spline bring a futuristic, tactile feel to your brand.'
  },
  {
    icon: Shield,
    title: 'Robust Foundation',
    desc: 'Production-ready setup with accessibility and performance best practices.'
  },
  {
    icon: Zap,
    title: 'Blazing Fast',
    desc: 'Optimized assets and modern tooling for ultra-fast load and interaction times.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Modern features, minimal effort</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">Focused tooling and patterns that help you ship stunning, interactive websites quickly.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-gray-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 backdrop-blur shadow-sm hover:shadow-md transition"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
