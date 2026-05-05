import Image from 'next/image';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'AC Installation & Upgrades',
    description: 'Premium air conditioning systems from trusted brands, installed for reliable cooling and energy savings.',
    icon: '❄️',
  },
  {
    title: 'Preventive Maintenance',
    description: 'Complete tune-ups, filter replacement, and system safety checks to keep your home comfortable year-round.',
    icon: '🛠️',
  },
  {
    title: 'Indoor Air Quality',
    description: 'Duct cleaning, air purification solutions, and humidity control to improve comfort and health.',
    icon: '🌿',
  },
];

export default function ServicesPage() {
  return (
    <section className="space-y-16 px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl space-y-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Our Services</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Complete HVAC care for homes and offices in Pune</h1>
        <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
          Eco-Comfort23 delivers professional HVAC service packages for installation, maintenance, and indoor comfort upgrades with a focus on efficiency and longevity.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">Why choose Eco-Comfort23?</h2>
          <p className="text-slate-600 leading-8">
            We combine fast response, certified technicians, and smart energy solutions to reduce operating costs and keep your indoor environment comfortable and healthy.
          </p>
          <ul className="space-y-4 text-slate-600">
            <li className="flex gap-3"><span className="text-sky-600">•</span> Expert service for residential & small commercial systems.</li>
            <li className="flex gap-3"><span className="text-sky-600">•</span> Transparent pricing, detailed diagnostics, and practical recommendations.</li>
            <li className="flex gap-3"><span className="text-sky-600">•</span> Rapid support, emergency repairs, and preventive care plans.</li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-[2rem] bg-slate-100 p-4 shadow-sm">
          <Image src="/service-energy.svg" alt="HVAC efficiency illustration" width={640} height={480} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
