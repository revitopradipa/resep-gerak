const conditions = [
  { name: "Diabetes", icon: "bloodtype" },
  { name: "Hipertensi", icon: "vital_signs" },
  { name: "Obesitas", icon: "monitor_weight" },
  { name: "Osteoporosis", icon: "skeleton" },
  { name: "Asma", icon: "pulmonology" },
  { name: "Jantung Koroner", icon: "cardiology" },
  { name: "Stroke", icon: "neurology" },
  { name: "Artritis", icon: "rheumatology" },
  { name: "Depresi", icon: "psychology" },
  { name: "Skoliosis", icon: "orthopedics" },
  { name: "Sarcopenia", icon: "accessibility_new" },
  { name: "Fibromyalgia", icon: "body_system" },
];

import Link from "next/link";

export default function ConditionsSection() {
  return (
    <section
      id="conditions"
      className="relative py-24 md:py-32 px-6 bg-surface overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-surface-container to-transparent opacity-50 pointer-events-none" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-10">
        {/* Left Sidebar */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start reveal-left">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-accent-gold"></div>
            <p className="font-lexend font-semibold text-accent-gold text-sm uppercase tracking-[0.2em]">
              Kondisi Medis
            </p>
          </div>

          <h2 className="font-oswald font-bold text-primary-container text-4xl md:text-5xl lg:text-6xl leading-[1.1] uppercase tracking-tight mb-8">
            Resep <span className="text-accent-gold">Gerak</span>
            <br />
            Sesuai
            <br />
            <span className="text-accent-yellow">Kondisi</span> Anda
          </h2>

          <p className="font-inter text-on-surface-variant text-lg leading-relaxed mb-8 font-light">
            Berdasarkan panduan internasional dari ADA, AHA, ACSM, dan WHO — gerak adalah bagian integral dari pengelolaan kondisi kronis dan pencegahan penyakit.
          </p>

          <div className="hidden lg:block w-24 h-1 bg-gradient-to-r from-accent-gold to-transparent mt-12 rounded-full"></div>
        </div>

        {/* Right Grid — 3×4 cards */}
        <div className="lg:w-2/3">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
            {conditions.map((c, i) => (
              <Link
                key={i}
                href={`/articles?type=MEDICAL_CONDITION&category=${encodeURIComponent(c.name)}`}
                className="condition-card bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-4 md:p-6 flex flex-col items-center justify-center text-center hover:border-accent-gold/60 transition-all duration-300 group shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_30px_-10px_rgba(7,148,185,0.15)] reveal"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-surface-container rounded-2xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-accent-gold group-hover:scale-110 group-active:scale-95 transition-all duration-300">
                  <span
                    className="material-symbols-outlined text-primary-container text-2xl md:text-3xl group-hover:text-white transition-colors duration-300"
                    style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}
                  >
                    {c.icon}
                  </span>
                </div>
                <p className="font-lexend font-semibold text-sm text-primary-container uppercase tracking-wide group-hover:text-accent-gold transition-colors duration-300">
                  {c.name}
                </p>

                {/* Subtle bottom indicator line on hover */}
                <div className="w-0 h-0.5 bg-accent-gold mt-4 rounded-full group-hover:w-8 transition-all duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
