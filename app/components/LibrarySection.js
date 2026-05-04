import Link from "next/link";

const books = [
  {
    title: "VO2MAX",
    subtitle: "Understanding Aerobic Capacity",
    color: "#0C2D3D",
    accent: "#0794B9",
    icon: "sprint",
  },
  {
    title: "Running Economy",
    subtitle: "Optimizing Efficiency & Performance",
    color: "#2d4a3e",
    accent: "#0794B9",
    icon: "directions_run",
  },
  {
    title: "Eminence Edge",
    subtitle: "Peak Performance Mechanics",
    color: "#0C2D3D",
    accent: "#0794B9",
    icon: "psychology",
  },
  {
    title: "OA Lutut",
    subtitle: "Penatalaksanaan & Rehabilitasi",
    color: "#3a4a64",
    accent: "#0794B9",
    icon: "rheumatology",
  },
  {
    title: "80/20 Rule",
    subtitle: "Balancing Training Intensity",
    color: "#0C2D3D",
    accent: "#0794B9",
    icon: "pie_chart",
  },
];

export default function LibrarySection() {
  return (
    <section
      id="library"
      className="py-20 md:py-24 px-6"
      style={{ background: "#E8EAF6" }}
    >
      <div className="max-w-[1280px] mx-auto text-center">
        {/* Header */}
        <div className="mb-4 reveal">
          <p className="font-lexend uppercase tracking-widest text-accent-gold text-xs font-semibold mb-3">
            Digital Library
          </p>
          <h2 className="font-oswald font-bold text-primary-container text-3xl md:text-4xl uppercase leading-tight mb-4">
            ETALASE GERAK & KESEHATAN MEDIS
          </h2>
          <p className="font-inter text-sm text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            Koleksi buku digital dan PDF yang dikurasi oleh tim medis kami.
            Setiap publikasi berbasis bukti ilmiah dan dirancang untuk membantu
            Anda memahami sains di balik performa tubuh.
          </p>
        </div>

        {/* Book Covers */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12 mb-12">
          {books.map((book, i) => (
            <a
              key={i}
              href="/SAMPLE.pdf"
              download={`${book.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="group reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="book-shadow w-[145px] sm:w-[160px] md:w-[180px] h-[210px] sm:h-[230px] md:h-[260px] rounded-lg overflow-hidden relative"
                style={{ background: book.color }}
              >
                {/* Book spine line */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-white/10" />

                {/* Content */}
                <div className="p-4 flex flex-col h-full justify-between relative z-10">
                  {/* Decorative lines */}
                  <div className="absolute top-6 right-4 w-12 h-12 border border-white/10 rounded-sm rotate-12" />
                  <div className="absolute top-10 right-8 w-8 h-8 border border-white/5 rounded-sm rotate-45" />

                  <div>
                    <p
                      className="font-oswald font-bold text-xl md:text-2xl uppercase leading-tight"
                      style={{ color: book.accent }}
                    >
                      {book.title}
                    </p>
                    <p className="font-inter text-[10px] text-white/60 mt-1 leading-snug">
                      {book.subtitle}
                    </p>
                  </div>

                  <div className="flex items-end justify-between">
                    <span
                      className="material-symbols-outlined text-white/15 text-4xl"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      {book.icon}
                    </span>
                    <span className="font-inter text-[8px] text-white/30 uppercase tracking-wider">
                      Resep Gerak
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Show All */}
        <div className="reveal">
          <Link
            href="/library"
            className="inline-flex items-center gap-2 font-lexend uppercase tracking-wider font-bold text-sm text-primary-container border-2 border-primary-container px-8 py-3 rounded-lg hover:bg-primary-container hover:text-white transition-all"
          >
            Jelajahi
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
