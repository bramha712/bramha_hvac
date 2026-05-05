export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919766015053"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-500/30 transition hover:bg-emerald-600"
    >
      <span className="text-lg">💬</span>
      Chat on WhatsApp
    </a>
  );
}
