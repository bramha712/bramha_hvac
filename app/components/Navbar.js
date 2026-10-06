import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-16 w-32 items-center justify-center overflow-hidden rounded-2xl border-2 border-sky-200 bg-white shadow-md shadow-sky-100/80 ring-2 ring-sky-100">
            <Image
              src="/ecocomfort%20logo.png"
              alt="EcoComfort23 logo"
              width={220}
              height={110}
              className="h-full w-full object-contain p-1.5"
            />
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
          className="inline-flex h-16 w-32 items-center justify-center rounded-2xl border-2 border-sky-200 bg-sky-50 p-1.5 shadow-sm transition hover:shadow-md"
          aria-label="Blue Star authorized dealer"
        >
          <Image
            src="/Blue_Star_Logo.png"
            alt="Blue Star logo"
            width={220}
            height={110}
            className="h-full w-full object-contain"
          />
        </Link>
      </nav>
    </header>
  );
}
