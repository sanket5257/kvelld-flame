export default function WorkTogether() {
  return (
    <section className="relative flex h-screen items-start overflow-hidden pt-28 lg:pt-20 md:pt-16 sm:pt-12">
      {/* Wave video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-bottom"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/work.webm" type="video/webm" />
      </video>

      <div className="relative mx-auto w-full max-w-[1344px] px-10 lg:px-10 md:px-6">
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
  );
}
