export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-3xl text-sky-600">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}
