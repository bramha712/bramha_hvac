import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 shadow-sm shadow-white/5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-lg">✓</span>
              Trusted HVAC services across Pune
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Eco-Comfort23 delivers smart cooling, cleaner air, and lower energy bills.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-200">
                Your local HVAC partner for reliable AC installation, preventive maintenance, and indoor air quality improvements designed for Pune homes and offices.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
              >
                Book a free survey
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/15"
              >
                Explore services
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-3xl font-semibold text-white">24h</p>
                <p className="text-sm text-slate-300">Rapid response support</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-3xl font-semibold text-white">200+</p>
                <p className="text-sm text-slate-300">Completed installations</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-3xl font-semibold text-white">95%</p>
                <p className="text-sm text-slate-300">Customer satisfaction</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-12 top-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"></div>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40">
              <Image
                src="/hero-hvac.svg"
                alt="HVAC illustration"
                width={760}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">What we do</p>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900">HVAC services designed for comfort, energy savings, and healthy air.</h2>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              From brand-new AC installation to ongoing maintenance and home air quality upgrades, Eco-Comfort23 makes your space more comfortable, durable, and efficient.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="mb-3 inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">Installation</p>
              <h3 className="text-2xl font-semibold text-slate-900">AC system design</h3>
              <p className="mt-3 text-slate-600">Customized layout, correct sizing, and seamless installation for efficient cooling.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="mb-3 inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">Maintenance</p>
              <h3 className="text-2xl font-semibold text-slate-900">Preventive care</h3>
              <p className="mt-3 text-slate-600">Regular servicing, cleaning, and performance checks to avoid breakdowns.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="mb-3 inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">Indoor air</p>
              <h3 className="text-2xl font-semibold text-slate-900">Air quality</h3>
              <p className="mt-3 text-slate-600">Duct cleaning, filtration upgrades, and humidity control for cleaner air.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="mb-3 inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">Smart controls</p>
              <h3 className="text-2xl font-semibold text-slate-900">Climate automation</h3>
              <p className="mt-3 text-slate-600">Smart thermostats and remote controls for efficient comfort.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Live HVAC insights</p>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900">Realtime monitoring and motion-aware system visuals</h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Our HVAC projects include live performance tracking, motion-infused system animations, and responsive telemetry so you can see how the system behaves in real time.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Realtime dashboards</p>
                <p className="mt-4 text-slate-600">Visualize temperature, airflow, and equipment status continuously for smarter decisions.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Motion system flow</p>
                <p className="mt-4 text-slate-600">Dynamic motion visuals show how cooling systems, vents, and controls move air throughout your space.</p>
              </div>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <Image src="/realtime-monitor.svg" alt="Realtime HVAC monitoring dashboard" width={580} height={420} className="w-full rounded-3xl object-cover" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 animate-pulse rounded-full bg-sky-500/20 blur-3xl"></div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <Image src="/motion-system.svg" alt="HVAC system motion illustration" width={580} height={420} className="w-full rounded-3xl object-cover" />
              <div className="pointer-events-none absolute -left-8 -bottom-8 h-24 w-24 animate-pulse rounded-full bg-cyan-500/20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Featured projects</p>
              <h2 className="text-4xl font-semibold tracking-tight">Projects completed for Pune homes and businesses.</h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                We deliver dependable HVAC installations, retrofit services, and preventive care plans designed for local climate conditions.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/10 p-6">
                  <p className="text-3xl font-semibold">200+</p>
                  <p className="mt-2 text-slate-300">Satisfied customers across Pune.</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-6">
                  <p className="text-3xl font-semibold">8</p>
                  <p className="mt-2 text-slate-300">Years of local HVAC experience.</p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-slate-900/80 p-6 shadow-2xl shadow-black/20">
                <Image src="/project-field.svg" alt="Project highlight" width={540} height={420} className="w-full rounded-3xl object-cover" />
              </div>
              <div className="rounded-[2rem] bg-slate-900/80 p-6 shadow-2xl shadow-black/20">
                <Image src="/service-energy.svg" alt="Energy efficient HVAC" width={540} height={420} className="w-full rounded-3xl object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Contact</p>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900">Bring better air and smarter cooling to your property.</h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Whether you need a new installation, seasonal tune-up, or indoor air improvement, our team is ready to help with honest advice and affordable service.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-800">
                Contact us
              </Link>
              <a href="https://wa.me/919766015053" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100">
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-[2.5rem] bg-white p-10 shadow-xl">
            <div className="space-y-5">
              <div className="rounded-3xl bg-slate-950/95 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Service request</p>
                <p className="mt-4 text-3xl font-semibold">Quick help from certified HVAC professionals.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-semibold text-slate-900">Phone</p>
                  <p className="text-slate-600">+91 97660 15053</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-semibold text-slate-900">Email</p>
                  <p className="text-slate-600">info@ecocomfort23.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
