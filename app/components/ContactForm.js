'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending message...');

    setTimeout(() => {
      setForm({ name: '', email: '', message: '' });
      setStatus('Your message has been sent. We will contact you within 24 hours.');
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          placeholder="name@example.com"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          placeholder="Tell us about your project or comfort needs"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
      >
        Send Message
      </button>
      {status && <p className="pt-2 text-sm text-slate-600">{status}</p>}
    </form>
  );
}
