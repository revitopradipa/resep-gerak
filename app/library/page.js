"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const allBooks = [
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
  {
    title: "Biomechanics",
    subtitle: "Physics of Human Movement",
    color: "#4a3b52",
    accent: "#0794B9",
    icon: "accessibility_new",
  },
  {
    title: "Nutrition",
    subtitle: "Fueling the Athletic Body",
    color: "#523b3b",
    accent: "#0794B9",
    icon: "restaurant",
  },
  {
    title: "Recovery",
    subtitle: "Science of Tissue Repair",
    color: "#2c3e50",
    accent: "#0794B9",
    icon: "battery_charging_full",
  },
  {
    title: "Tendinopathy",
    subtitle: "Loading & Rehab Protocols",
    color: "#0C2D3D",
    accent: "#0794B9",
    icon: "medical_services",
  },
  {
    title: "Core Stability",
    subtitle: "Foundation of Power Transfer",
    color: "#2d4a3e",
    accent: "#0794B9",
    icon: "fitness_center",
  }
];

export default function LibraryPage() {
  return (
    <>
      <Navbar theme="light" />

      <main className="min-h-screen bg-[#E8EAF6] pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center text-primary-container hover:text-primary-container/80 transition-colors mb-6 font-inter text-sm font-semibold">
              <span className="material-symbols-outlined text-sm mr-2">arrow_back</span>
              Kembali ke Beranda
            </Link>
            <h1 className="font-oswald font-bold text-4xl md:text-5xl text-primary-container uppercase mb-4">
              Koleksi Digital Library
            </h1>
            <p className="font-inter text-sm md:text-base text-on-surface-variant leading-relaxed max-w-2xl">
              Eksplorasi seluruh koleksi buku digital dan dokumen PDF yang disusun dan dikurasi oleh para ahli kedokteran olahraga. Panduan komprehensif untuk meningkatkan performa dan proses pemulihan Anda.
            </p>
          </div>

          {/* Books Grid */}
          <div className="flex flex-wrap gap-6 md:gap-8 justify-center sm:justify-start">
            {allBooks.map((book, i) => (
              <a
                key={i}
                href="/SAMPLE.pdf"
                download={`${book.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div
                  className="book-shadow w-[160px] md:w-[180px] h-[230px] md:h-[260px] rounded-lg overflow-hidden relative transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl"
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
        </div>
      </main>

      <Footer />
    </>
  );
}
