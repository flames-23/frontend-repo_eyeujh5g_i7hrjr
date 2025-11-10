export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-gray-200 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Flux — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-gray-900 dark:hover:text-white" href="#">Privacy</a>
            <a className="hover:text-gray-900 dark:hover:text-white" href="#">Terms</a>
            <a className="hover:text-gray-900 dark:hover:text-white" href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
