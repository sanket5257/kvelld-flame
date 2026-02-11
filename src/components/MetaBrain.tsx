const aiFeatures = [
  {
    title: "Intelligent Automation",
    description: "AI-powered workflows that learn and adapt to your business processes.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Machine Learning Models",
    description: "Custom ML models trained on your data for precise predictions and insights.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Computer Vision",
    description: "Enable machines to interpret visual data for quality control and analysis.",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Natural Language Processing",
    description: "Extract meaning from text data, documents, and customer communications.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Robotic Process Automation",
    description: "Automate repetitive tasks with software robots that work around the clock.",
    gradient: "from-rose-500/20 to-red-500/20",
  },
  {
    title: "Neural Networks",
    description: "Deep learning architectures that uncover complex patterns in your data.",
    gradient: "from-indigo-500/20 to-violet-500/20",
  },
];

export default function MetaBrain() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-medium tracking-wide uppercase">
            AI & Machine Learning
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold mt-3 mb-4">
            Powered by
            <br />
            <span className="gradient-text">artificial intelligence</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Leverage cutting-edge AI technologies to achieve unprecedented levels
            of productivity and accuracy across your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-white/10 transition-all overflow-hidden card-glow"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
