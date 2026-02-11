export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-primary/10 via-dark-card to-purple-500/10 border border-white/10 overflow-hidden">
          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold mb-4">
              Ready to transform your business?
            </h2>
            <p className="text-text-secondary text-lg max-w-lg mx-auto mb-8">
              Let Kvell Dynamics help you harness the power of data and AI to
              drive real results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-xl text-base font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Contact Us
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors"
              >
                View Solutions
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
