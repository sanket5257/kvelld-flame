const integrationFeatures = [
  {
    title: "Custom Software",
    description: "Tailored solutions built to fit your unique business requirements and workflows.",
  },
  {
    title: "Data Integration",
    description:
      "Connect and unify data from multiple sources into a single source of truth.",
  },
  {
    title: "Process Mining",
    description: "Discover bottlenecks and optimization opportunities in your existing workflows.",
  },
  {
    title: "Predictive Analytics",
    description: "Forecast trends and outcomes using advanced machine learning models.",
  },
  {
    title: "Real-Time Dashboards",
    description: "Monitor KPIs and business metrics with live, interactive visualizations.",
  },
  {
    title: "Scalable Architecture",
    description: "Solutions designed to grow with your business, from startup to enterprise.",
  },
];

export default function GitHubSync() {
  return (
    <section className="py-24 px-6 bg-dark-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
            <span className="text-sm font-medium text-text-secondary tracking-wide uppercase">
              Enterprise Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold mb-4">
            End-to-end <span className="text-white">solutions</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            From custom software development to advanced analytics, we deliver
            the tools your business needs to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {integrationFeatures.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-dark-bg border border-dark-border hover:border-white/10 transition-all card-glow"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
