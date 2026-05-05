export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-[1280px] mx-auto flex flex-col items-center justify-center pt-20">
        <h1
          className="font-oswald font-bold text-white text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] uppercase tracking-tight mb-6 drop-shadow-lg animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="text-accent-gold">MOVEMENT</span> IS MEDICINE
        </h1>

        <p
          className="font-inter text-surface-container-highest text-lg md:text-xl max-w-2xl mx-auto mb-10 drop-shadow leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          Empowering your journey through clinical sports medicine and an active lifestyle.
        </p>

        <a
          href="#pillars"
          className="inline-flex items-center justify-center font-lexend font-semibold text-base bg-accent-gold text-white px-8 py-4 rounded-lg hover:bg-accent-gold-hover hover:scale-105 active:scale-95 transition-all duration-200 shadow-md animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          DISCOVER YOUR PATH
        </a>
      </div>


    </section>
  );
}
