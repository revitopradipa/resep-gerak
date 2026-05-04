"use client";

import Link from "next/link";
import { useState } from "react";

const libraryItems = [
  {
    tag: "VIDEO COURSE",
    title: "Manajemen Mobilitas Panggul untuk Pelari",
    icon: "schedule",
    meta1: "45 Menit",
    meta2: "12 Modul",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=800&fit=crop",
  },
  {
    tag: "SCIENTIFIC ARTICLE",
    title: "Neuromuscular Training & Pencegahan ACL",
    icon: "article",
    meta1: "15 Menit Baca",
    meta2: "Riset Klinis",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=800&fit=crop",
  },
  {
    tag: "PROTOCOL GUIDE",
    title: "Rehabilitasi Pasca-Operasi Meniskus",
    icon: "book",
    meta1: "E-Book PDF",
    meta2: "80 Halaman",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=800&fit=crop",
  },
  {
    tag: "SCIENTIFIC ARTICLE",
    title: "Pentingnya Recovery Pasca Latihan Berat",
    icon: "article",
    meta1: "10 Menit Baca",
    meta2: "Panduan Umum",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop",
  },
  {
    tag: "PROTOCOL GUIDE",
    title: "Panduan Pemanasan Dinamis untuk Sepak Bola",
    icon: "book",
    meta1: "E-Book PDF",
    meta2: "25 Halaman",
    img: "https://images.unsplash.com/photo-1518605368461-1e1e1160a28f?w=600&h=800&fit=crop",
  },
  {
    tag: "VIDEO COURSE",
    title: "Koreksi Postur Tubuh bagi Pekerja Kantoran",
    icon: "schedule",
    meta1: "30 Menit",
    meta2: "5 Modul",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=800&fit=crop",
  }
];

export default function ArticlesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 3 < libraryItems.length) {
      setCurrentIndex(prev => prev + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(prev => prev - 3);
    } else {
      setCurrentIndex(0);
    }
  };

  const visibleItems = libraryItems.slice(currentIndex, currentIndex + 3);

  return (
    <section id="articles" className="pt-20 bg-[#0C2D3D] text-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 mb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-lexend font-bold text-4xl md:text-5xl text-white mb-4">
              Sains dibalik Gerak Tubuh
            </h2>
            <p className="font-inter text-sm md:text-base text-white/60 leading-relaxed">
              Akses ribuan materi edukasi medis dan tutorial video yang divalidasi oleh
              <br className="hidden md:block" /> dewan spesialis kedokteran olahraga.
            </p>
          </div>
          <div className="flex items-center">
            <Link href="/articles" className="font-lexend text-sm font-bold text-[#0794B9] uppercase tracking-wider hover:text-white transition-colors border-b-2 border-transparent hover:border-[#0794B9] pb-1">
              Lihat Semua
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="relative group/slider">
          {/* Floating Left Button */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-[#0C2D3D] items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.3)] z-10 hover:bg-gray-100 hover:scale-105 transition-all"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
          )}

          {/* Floating Right Button */}
          {currentIndex < libraryItems.length - 3 && (
            <button
              onClick={handleNext}
              className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-[#0C2D3D] items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.3)] z-10 hover:bg-gray-100 hover:scale-105 transition-all"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          )}

          {/* Mobile Horizontal Scroll */}
          <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-8 -mx-6 px-6">
            {libraryItems.map((item, i) => {
              const isEbook = item.meta1 === "E-Book PDF";
              const Wrapper = isEbook ? "a" : Link;
              const linkProps = isEbook
                ? { href: "/SAMPLE.pdf", download: `${item.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`, target: "_blank", rel: "noopener noreferrer" }
                : { href: "/articles/test-id" };

              return (
                <Wrapper key={i} {...linkProps} className="snap-center shrink-0 w-[85vw] group relative rounded-xl overflow-hidden h-[400px] cursor-pointer block">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021E2B] via-[#0C2D3D]/70 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                    <span className="font-lexend text-[10px] font-bold text-[#0794B9] uppercase tracking-widest mb-3">
                      {item.tag}
                    </span>
                    <h3 className="font-lexend text-xl font-bold text-white mb-4 leading-snug">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-xs text-white/60 font-inter">
                      <span className="material-symbols-outlined text-sm mr-2" style={{ fontVariationSettings: "'FILL' 0" }}>{item.icon}</span>
                      <span>{item.meta1}</span>
                      <span className="mx-2">•</span>
                      <span>{item.meta2}</span>
                    </div>
                  </div>
                </Wrapper>
              )
            })}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {visibleItems.map((item, i) => {
              const isEbook = item.meta1 === "E-Book PDF";
              const Wrapper = isEbook ? "a" : Link;
              const linkProps = isEbook
                ? { href: "/SAMPLE.pdf", download: `${item.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`, target: "_blank", rel: "noopener noreferrer" }
                : { href: "/articles/test-id" };

              return (
                <Wrapper key={i} {...linkProps} className="group relative rounded-xl overflow-hidden h-[450px] cursor-pointer block">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021E2B] via-[#0C2D3D]/70 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                    <span className="font-lexend text-[10px] font-bold text-[#0794B9] uppercase tracking-widest mb-3">
                      {item.tag}
                    </span>
                    <h3 className="font-lexend text-2xl font-bold text-white mb-4 leading-snug">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-xs text-white/60 font-inter">
                      <span className="material-symbols-outlined text-sm mr-2" style={{ fontVariationSettings: "'FILL' 0" }}>{item.icon}</span>
                      <span>{item.meta1}</span>
                      <span className="mx-2">•</span>
                      <span>{item.meta2}</span>
                    </div>
                  </div>
                </Wrapper>
              )
            })}
          </div>
        </div>
      </div>

      {/* Progress Bar (Desktop only) */}
      <div className="hidden md:flex w-full h-1.5 bg-white/10">
        <div
          className="h-full bg-[#0794B9] transition-all duration-300"
          style={{ width: `${((currentIndex + 3) / libraryItems.length) * 100}%` }}
        ></div>
      </div>
    </section>
  );
}
