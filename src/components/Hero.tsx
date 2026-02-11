import HeroCTA from "./HeroCTA";

const ticker = [
  "Data Management",
  "Process Automation",
  "Vision Machines",
  "AI Solutions",
  "Neural Networks",
  "Analytics",
];

export default function Hero() {
  return (
    <section className="hero relative h-[1700px] overflow-hidden pt-[184px] lg:h-[1300px] lg:pt-28 md:h-auto md:pt-24 sm:pt-[92px]">
      <div className="relative mx-auto pt-10 flex h-full max-w-[1344px] flex-col px-10 lg:px-10 md:px-6">
        {/* Headline */}
        <h1 className="relative z-30   bg-gradient-to-br from-white from-30% via-[#d5d8f6] via-80% to-[#fdf7fe] bg-clip-text font-display text-[84px] font-semibold leading-[0.9] tracking-tight text-transparent  lg:text-[72px]  md:text-[56px]  sm:text-[32px]">
          Building a Better&nbsp;<br />Tomorrow
        </h1>

        {/* Subheading */}
        <p className="relative z-30 mt-5  text-lg leading-snug tracking-tight text-white/60 lg:mt-4 md:mt-3.5 md:text-base sm:mt-3  sm:text-[15px]">
          One data-driven decision at a time. Kvell Dynamics delivers AI-driven <br />
          solutions for data management, automation, and machine learning.
        </p>

        {/* CTA */}
        <div className="mt-11 lg:mt-9 md:mt-7 sm:mt-5">
          <div className="relative z-10 inline-flex items-center">
            <HeroCTA />
          </div>
        </div>

        {/* Video + Image container */}
        <div className="absolute bottom-0 left-0 right-0 top-[35%] lg:top-[30%] md:relative md:top-auto md:mt-10 sm:mt-6">
          {/* Video with mix-blend-lighten */}
          <div className="absolute -left-[220px] bottom-12 z-0 h-[2000px] w-[1920px] max-w-none mix-blend-lighten lg:bottom-10 lg:left-[-160px] lg:h-[1600px] lg:w-[1620px] md:bottom-8 md:left-[-18%] md:h-[1000px] md:w-[147%] sm:bottom-6 sm:left-[-26%] sm:h-[800px] sm:w-[189%]">
            <video
              className="absolute bottom-0 h-full w-full object-cover"
              width={1920}
              height={1438}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
              <source src="/videos/hero.webm" type="video/webm" />
            </video>
          </div>

          {/* Hero illustration */}
          <img
            src="/img/hero-illustration.7100a376.jpg"
            alt="Kvell Dynamics platform interface"
            className="relative -left-6 w-full rounded-t-[10px] lg:-left-4 lg:w-[90%] md:-left-3 md:w-[120%] md:max-w-none md:-translate-y-[32%] md:rounded-t-md sm:w-[135%] sm:max-w-none sm:-translate-y-[28%] sm:rounded-t"
          />
        </div>

        {/* Bottom ticker */}
        <div className="absolute bottom-[88px] z-30 overflow-hidden text-[14px] tracking-tight lg:bottom-14 md:bottom-12 md:text-[13px] sm:bottom-9 sm:left-5 sm:right-0 sm:text-[12px]">
          <p className="mb-3.5 font-light leading-none text-white/60 md:mb-3">
            Everything you need for intelligent business operations:
          </p>
          <div className="w-full sm:flex sm:overflow-hidden">
            <ul className="flex shrink-0 font-semibold leading-snug text-white hero-ticker-scroll">
              {ticker.map((item, i) => (
                <li
                  key={item}
                  className={`relative shrink-0 ${
                    i > 0
                      ? "before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle"
                      : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <ul
              className="hidden shrink-0 font-semibold leading-snug text-white sm:flex hero-ticker-scroll"
              aria-hidden
            >
              {ticker.map((item) => (
                <li
                  key={`dup-${item}`}
                  className="relative shrink-0 before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-[340px] w-full bg-gradient-to-b from-[rgba(9,10,12,0)] to-dark-bg to-50% lg:h-[250px] md:h-44 sm:left-0 sm:h-[170px] sm:w-[107%]" />
    </section>
  );
}
