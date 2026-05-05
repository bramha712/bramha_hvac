import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <section className="space-y-16 px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl space-y-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Get in touch</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Ready to upgrade your indoor comfort?</h1>
        <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
          Contact Eco-Comfort23 today for a free consultation. We respond quickly and can schedule service at a time that suits you.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-6 rounded-[2rem] bg-sky-600 p-10 text-white shadow-xl">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-100">Office</p>
            <h2 className="mt-3 text-3xl font-semibold">Eco-Comfort23, Pune</h2>
          </div>
          <div className="space-y-4 text-slate-100">
            <p>Phone: <a href="tel:+919766015053" className="font-semibold text-white">+91 97660 15053</a></p>
            <p>Email: <a href="mailto:info@ecoccomfort23.com" className="font-semibold text-white">info@ecocomfort23.com</a></p>
            <p>Address: 42 Green Valley, Baner, Pune, Maharashtra</p>
          </div>
          <div className="rounded-3xl bg-white/10 p-6">
            <p className="font-medium text-white">Service hours</p>
            <p className="mt-2 text-slate-100">Mon–Sat: 8:00 AM – 8:00 PM</p>
            <p className="text-slate-100">Sun: Emergency support only</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
