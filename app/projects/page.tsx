import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Cold Storage Retrofit',
    location: 'Pimpri, Pune',
    summary: 'Upgraded a commercial cold storage unit with a new inverter AC system and energy-efficient insulation to lower costs and improve reliability.',
    image: '/project-field.svg',
    tags: ['Commercial', 'Energy Efficiency', 'Controls'],
  },
  {
    title: 'Smart Home Comfort',
    location: 'Kothrud, Pune',
    summary: 'Installed centralized climate control and air purification for a premium residential property, delivering quiet cooling and healthier indoor air.',
    image: '/project-installation.svg',
    tags: ['Residential', 'Air Quality', 'Automation'],
  },
  {
    title: 'HVAC Preventive Care',
    location: 'Baner, Pune',
    summary: 'Implemented a preventive maintenance contract across multiple office floors to boost uptime and extend system life.',
    image: '/service-energy.svg',
    tags: ['Maintenance', 'Safety', 'Performance'],
  },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-16 px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl space-y-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Project Highlights</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Real installations with measurable comfort gains</h1>
        <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
          See how Eco-Comfort23 brings professional HVAC design, installation, and service to homes and businesses across Pune.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
