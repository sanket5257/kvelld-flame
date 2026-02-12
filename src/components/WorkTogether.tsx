const workFeatures = [
  {
    title: "Customize workspace",
    description:
      "Create your own offices and meeting rooms to suit your team's needs.",
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <rect x="3" y="3" width="8" height="8" rx="1.5" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" />
        <rect x="13" y="13" width="8" height="8" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Audio and video calls",
    description:
      "Collaborate efficiently and seamlessly with high quality virtual conferencing.",
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M4 4.5A2.5 2.5 0 016.5 2h5A2.5 2.5 0 0114 4.5v15a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 014 19.5v-15z" />
        <path d="M15.5 7.5l3.1-2.07A1 1 0 0120 6.28v11.44a1 1 0 01-1.4.85L15.5 16.5v-9z" />
      </svg>
    ),
  },
  {
    title: "Invite guests",
    description:
      "Meet with guests without ever needing to leave your workspace.",
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
        <path d="M12 14c-5 0-8 2.5-8 5v1.5h16V19c0-2.5-3-5-8-5z" />
        <circle cx="19" cy="8" r="1" />
        <rect x="18.5" y="4.5" width="1" height="7" rx="0.5" />
        <rect x="15.5" y="7.5" width="1" height="7" rx="0.5" transform="rotate(-90 16 11)" />
      </svg>
    ),
  },
];

export default function WorkTogether() {
  return (
    <>
      <section className="relative flex h-screen items-start overflow-hidden pt-28 lg:pt-20 md:pt-50 sm:pt-12">
        {/* Wave video background */}
        <video
          className="absolute inset-0 h-[120vh] w-full scale-110 object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/work.webm" type="video/webm" />
        </video>

        <div className="absolute left-1/2 z-10 w-full max-w-[1344px] -translate-x-1/2 pl-10 lg:pl-10 md:pl-6">
          <h2 className="font-display text-[84px] font-semibold leading-[0.9] tracking-tight text-black lg:text-[72px] md:text-[56px] sm:text-[32px]">
            Work together.
            <br />
            Like in the office.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-black/60 md:mt-4 md:text-base sm:mt-3 sm:text-[15px]">
            Create customized virtual office spaces for any department or event
            with high quality audio and video conferencing.
          </p>
        </div>
      </section>

      {/* Work Together Features */}
      <section className="bg-[#f8f9fb] py-20 md:py-16 sm:py-12">
        <div className="mx-auto max-w-[1344px] px-10 md:px-6">
          <p className="max-w-3xl text-xl leading-relaxed text-black/60 md:text-lg sm:text-base">
            Collaborating with remote teams is easy in your virtual office
            environment. Enjoy real-time communication within your workspace
            without additional software hassle.
          </p>

          <div className="mt-16 flex flex-col gap-10 sm:flex-row sm:gap-12">
            {workFeatures.map((feature) => (
              <div key={feature.title} className="flex-1">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f0fe] text-[#4d9de0]">
                  {feature.icon}
                </div>
                <h3 className="font-display text-2xl font-semibold text-black md:text-xl">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-relaxed text-black/50 sm:text-[15px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
