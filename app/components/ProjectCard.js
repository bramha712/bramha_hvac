export default function ProjectCard({ title, location, summary, image, tags }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 bg-slate-100">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <p className="mb-1 text-sm font-medium uppercase tracking-[0.2em] text-sky-600">{location}</p>
        <h3 className="mb-3 text-2xl font-semibold text-slate-900">{title}</h3>
        <p className="mb-4 text-slate-600">{summary}</p>
        <div className="flex flex-wrap gap-2 text-xs text-slate-500">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
