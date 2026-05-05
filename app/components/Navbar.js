import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-600 text-xl font-semibold text-white shadow-lg shadow-sky-500/20">
            E
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-900">Eco-Comfort23</p>
            <p className="text-xs text-slate-500">Pune HVAC solutions</p>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex text-slate-700">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <Link
          href="/contact"
          className="inline-flex rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700"
        >
          Request Quote
        </Link>
      </nav>
    </header>
  );
}
