export default function Approach() {
  return (
    <section className="bg-dark-bg py-28 lg:py-20 md:py-16 sm:py-12">
      <div className="mx-auto max-w-[1344px] px-10 lg:px-10 md:px-6">
        {/* Bento Layout — 2 columns on desktop, stacked on mobile */}
        <div className="flex gap-5 max-sm:flex-col max-sm:gap-4">
          {/* Left — Card 01 */}
          <div className="relative min-h-[780px] flex-[1.1] overflow-hidden rounded-2xl border border-dark-border bg-dark-card lg:min-h-[660px] max-sm:min-h-[400px]">
            <img
              src="/img/brands/group-40165_1.webp"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
            />
            <div className="relative z-10 flex h-full flex-col justify-end p-10 lg:p-8 max-sm:p-6">
              <span className="mb-6 text-sm font-semibold text-primary">01</span>
              <h3 className="font-display text-[42px] font-light leading-[1.1] tracking-tight text-white lg:text-[36px] md:text-[30px] max-sm:text-[26px]">
                One team.
                <br />
                <em className="font-semibold">Built for speed.</em>
              </h3>
              <p className="mt-5 text-[15px] leading-relaxed text-white/50 max-sm:text-sm">
                No juggling freelancers.
                <br />
                No bloated agencies.
              </p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/50 max-sm:text-sm">
                We cover strategy, content, tech and automation in one go.
              </p>
            </div>
          </div>

          {/* Right — Cards 02, 03, 04 */}
          <div className="flex flex-1 flex-col gap-5 max-sm:gap-4">
            {/* Card 02 — top right */}
            <div className="relative flex-[1.6] overflow-hidden rounded-2xl border border-dark-border bg-dark-card max-sm:min-h-[320px]">
              <img
                src="/img/brands/frame-40166.webp"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
              />
              <div className="relative z-10 flex h-full flex-col justify-end p-8 lg:p-6">
                <span className="mb-4 text-sm font-semibold text-primary">02</span>
                <h3 className="font-display text-[28px] font-semibold leading-[1.15] tracking-tight text-white lg:text-2xl">
                  <em>Strategy</em> before screens
                </h3>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-white/50 max-sm:text-sm">
                  We start with what your audience&apos;s needs and build a site that moves them to action.
                </p>
              </div>
            </div>

            {/* Bottom row — Cards 03 & 04 */}
            <div className="flex flex-1 gap-5 max-sm:flex-col max-sm:gap-4">
              {/* Card 03 */}
              <div className="relative flex-1 overflow-hidden rounded-2xl border border-dark-border bg-dark-card max-sm:min-h-[300px]">
                <img
                  src="/img/brands/frame-40164.webp"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
                />
                <div className="relative z-10 flex h-full flex-col justify-end p-8 lg:p-6">
                  <span className="mb-4 text-sm font-semibold text-primary">03</span>
                  <h3 className="font-display text-[24px] font-semibold leading-[1.15] tracking-tight text-white lg:text-xl">
                    Built to <em>think</em>
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/50 max-sm:text-sm">
                    Smart and integrated systems that scale <em className="text-white/60">with</em> you.
                  </p>
                </div>
              </div>

              {/* Card 04 */}
              <div className="relative flex-1 overflow-hidden rounded-2xl border border-dark-border bg-dark-card max-sm:min-h-[300px]">
                <img
                  src="/img/brands/image-619.webp"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
                />
                <div className="relative z-10 flex h-full flex-col justify-end p-8 lg:p-6">
                  <span className="mb-4 text-sm font-semibold text-primary">04</span>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-[20px] font-semibold tracking-tight text-white lg:text-lg">
                      Our formula
                    </h3>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="text-white"
                      >
                        <path
                          d="M1.5 7h11m0 0L8 2.5M12.5 7 8 11.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
