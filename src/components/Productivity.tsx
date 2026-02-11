const cards = [
  {
    title: "Keyboard shortcuts.",
    description:
      "Work efficiently with instant access to common actions.",
    image: "/img/keyboard.png",
    span: "col-span-4 md:col-span-5 sm:col-span-12",
  },
  {
    title: "Team Planner.",
    description:
      "Keep track of the bigger picture by viewing all individual tasks in one centralized team calendar.",
    image: "/img/team.png",
    span: "col-span-6 md:col-span-7 sm:col-span-12",
  },
  {
    title: "Create New Task",
    description: "",
    image: "/img/team.png",
    span: "col-span-2 md:hidden",
    partial: true,
  },
  {
    title: "Time-blocking.",
    description:
      "Transform daily tasks into structured time blocks for focused productivity.",
    image: "/img/time-block.png",
    span: "col-span-7 md:col-span-7 sm:col-span-12",
  },
  {
    title: "Notifications.",
    description:
      "Keep up to date with any changes by receiving instant notifications.",
    image: "/img/notification.png",
    video: "/videos/waves.mp4",
    span: "col-span-5 md:col-span-5 sm:col-span-12",
  },
];

export default function Productivity() {
  return (
    <section className="bg-white py-28 lg:py-20 md:py-16 sm:py-12">
      <div className="mx-auto max-w-[1344px] px-10 lg:px-10 md:px-6">
        {/* Heading */}
        <h2 className="font-display text-[84px] font-semibold leading-[0.9] tracking-tight text-black lg:text-[72px] md:text-[56px] sm:text-[32px]">
          Unmatched productivity
        </h2>

        {/* Subtitle */}
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-black/60 md:mt-4 md:text-base sm:mt-3 sm:text-[15px]">
          Kvell Dynamics is a process, project, time, and knowledge management
          platform that provides amazing collaboration opportunities for
          developers and product teams alike.
        </p>

        {/* Bento Grid */}
        <div className="mt-14 grid grid-cols-12 gap-5 overflow-hidden lg:mt-10 md:mt-8 md:grid-cols-12 sm:mt-6 sm:grid-cols-1 sm:gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`${card.span} overflow-hidden rounded-2xl bg-[#111113] sm:rounded-xl ${card.partial ? "sm:hidden" : ""}`}
            >
              {/* Image area — update src when images are ready */}
              <div
                className={`relative overflow-hidden ${card.partial ? "h-[320px] lg:h-[260px]" : "h-[360px] lg:h-[300px] md:h-[240px] sm:h-[200px]"}`}
              >
                {card.video && (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={card.video} type="video/mp4" />
                    <source src={card.video.replace(".mp4", ".webm")} type="video/webm" />
                  </video>
                )}
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#111113]">
                    <span className="text-sm text-white/20">Image</span>
                  </div>
                )}
              </div>

              {/* Text area */}
              {!card.partial && (
                <div className="px-7 py-6 lg:px-6 lg:py-5 md:px-5 md:py-4 sm:px-4 sm:py-3.5">
                  <p className="text-[15px] leading-relaxed text-white/80 sm:text-sm">
                    <span className="font-semibold text-white">
                      {card.title}
                    </span>{" "}
                    {card.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
