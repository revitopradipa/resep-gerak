"use client";

import { useState, useMemo, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const allArticles = [
  {
    tag: "VIDEO COURSE",
    title: "Manajemen Mobilitas Panggul untuk Pelari",
    icon: "schedule",
    meta1: "45 Menit",
    meta2: "12 Modul",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=800&fit=crop",
    type: "Pencegahan",
    categories: {
      bodyParts: ["Panggul", "Kaki"],
      sports: ["Lari & Atletik"],
      medicalIssues: ["Kekakuan Sendi"]
    }
  },
  {
    tag: "SCIENTIFIC ARTICLE",
    title: "Neuromuscular Training & Pencegahan ACL",
    icon: "article",
    meta1: "15 Menit Baca",
    meta2: "Riset Klinis",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=800&fit=crop",
    type: "Pencegahan",
    categories: {
      bodyParts: ["Lutut"],
      sports: ["Sepak Bola", "Basket", "Lari & Atletik"],
      medicalIssues: ["Cedera ACL"]
    }
  },
  {
    tag: "PROTOCOL GUIDE",
    title: "Rehabilitasi Pasca-Operasi Meniskus",
    icon: "book",
    meta1: "E-Book PDF",
    meta2: "80 Halaman",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=800&fit=crop",
    type: "Cedera",
    categories: {
      bodyParts: ["Lutut"],
      sports: ["Sepak Bola", "Basket"],
      medicalIssues: ["Robekan Meniskus"]
    }
  },
  {
    tag: "SCIENTIFIC ARTICLE",
    title: "Pentingnya Recovery Pasca Latihan Berat",
    icon: "article",
    meta1: "10 Menit Baca",
    meta2: "Panduan Umum",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop",
    type: "Pencegahan",
    categories: {
      bodyParts: ["Seluruh Tubuh"],
      sports: ["Crossfit & Powerlifting", "Lari & Atletik"],
      medicalIssues: ["Kelelahan Otot"]
    }
  },
  {
    tag: "PROTOCOL GUIDE",
    title: "Panduan Pemanasan Dinamis untuk Sepak Bola",
    icon: "book",
    meta1: "E-Book PDF",
    meta2: "25 Halaman",
    img: "https://images.unsplash.com/photo-1518605368461-1e1e1160a28f?w=600&h=800&fit=crop",
    type: "Pencegahan",
    categories: {
      bodyParts: ["Lutut", "Pergelangan Kaki", "Paha"],
      sports: ["Sepak Bola"],
      medicalIssues: ["Kram Otot"]
    }
  },
  {
    tag: "VIDEO COURSE",
    title: "Koreksi Postur Tubuh bagi Pekerja Kantoran",
    icon: "schedule",
    meta1: "30 Menit",
    meta2: "5 Modul",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=800&fit=crop",
    type: "Pencegahan",
    categories: {
      bodyParts: ["Punggung", "Leher", "Bahu"],
      sports: ["Pelatihan Umum"],
      medicalIssues: ["Nyeri Punggung Bawah", "Nyeri Leher"]
    }
  },
  {
    tag: "SCIENTIFIC ARTICLE",
    title: "Olahraga Ramah Sendi untuk Penderita Artritis",
    icon: "article",
    meta1: "12 Menit Baca",
    meta2: "Tips Medis",
    img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=800&fit=crop",
    type: "Pencegahan",
    categories: {
      bodyParts: ["Lutut", "Panggul"],
      sports: ["Renang", "Sepeda"],
      medicalIssues: ["Artritis"]
    }
  },
  {
    tag: "PROTOCOL GUIDE",
    title: "Panduan Gerak bagi Penyandang Diabetes Tipe 2",
    icon: "book",
    meta1: "E-Book PDF",
    meta2: "45 Halaman",
    img: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&h=800&fit=crop",
    type: "Pencegahan",
    categories: {
      bodyParts: ["Seluruh Tubuh"],
      sports: ["Pelatihan Umum", "Lari & Atletik"],
      medicalIssues: ["Diabetes"]
    }
  },
  {
    tag: "VIDEO COURSE",
    title: "Rehabilitasi Bahu Pasca Cedera Voli",
    icon: "schedule",
    meta1: "60 Menit",
    meta2: "8 Modul",
    img: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&h=800&fit=crop",
    type: "Cedera",
    categories: {
      bodyParts: ["Bahu", "Lengan"],
      sports: ["Voli"],
      medicalIssues: ["Cedera Bahu"]
    }
  },
  {
    tag: "SCIENTIFIC ARTICLE",
    title: "Membangun Ketahanan Jantung dengan Sepeda",
    icon: "article",
    meta1: "8 Menit Baca",
    meta2: "Gaya Hidup",
    img: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=600&h=800&fit=crop",
    type: "Pencegahan",
    categories: {
      bodyParts: ["Dada", "Paru-Paru", "Kaki"],
      sports: ["Sepeda"],
      medicalIssues: ["Jantung Koroner", "Hipertensi"]
    }
  },
  {
    tag: "PROTOCOL GUIDE",
    title: "Latihan Pernapasan untuk Asma saat Hiking",
    icon: "book",
    meta1: "Infografis PDF",
    meta2: "10 Halaman",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=800&fit=crop",
    type: "Pencegahan",
    categories: {
      bodyParts: ["Paru-Paru", "Dada"],
      sports: ["Hiking & Outdoor"],
      medicalIssues: ["Asma"]
    }
  },
  {
    tag: "VIDEO COURSE",
    title: "Pemulihan Skoliosis melalui Yoga & Pilates",
    icon: "schedule",
    meta1: "40 Menit",
    meta2: "6 Modul",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=800&fit=crop",
    type: "Cedera",
    categories: {
      bodyParts: ["Punggung", "Tulang Belakang"],
      sports: ["Pelatihan Umum"],
      medicalIssues: ["Skoliosis"]
    }
  },
  {
    tag: "SCIENTIFIC ARTICLE",
    title: "Latihan Beban untuk Mencegah Sarcopenia",
    icon: "article",
    meta1: "14 Menit Baca",
    meta2: "Riset Klinis",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=800&fit=crop",
    type: "Pencegahan",
    categories: {
      bodyParts: ["Seluruh Tubuh"],
      sports: ["Crossfit & Powerlifting"],
      medicalIssues: ["Sarcopenia", "Osteoporosis"]
    }
  },
  {
    tag: "PROTOCOL GUIDE",
    title: "Aktivitas Fisik untuk Mengatasi Obesitas",
    icon: "book",
    meta1: "E-Book PDF",
    meta2: "50 Halaman",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop",
    type: "Pencegahan",
    categories: {
      bodyParts: ["Seluruh Tubuh"],
      sports: ["Lari & Atletik", "Renang", "Sepeda"],
      medicalIssues: ["Obesitas", "Diabetes"]
    }
  },
  {
    tag: "VIDEO COURSE",
    title: "Panduan Latihan Pasca Stroke Ringan",
    icon: "schedule",
    meta1: "1 Jam 20 Menit",
    meta2: "15 Modul",
    img: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&h=800&fit=crop",
    type: "Cedera",
    categories: {
      bodyParts: ["Seluruh Tubuh"],
      sports: ["Pelatihan Umum"],
      medicalIssues: ["Stroke"]
    }
  },
  {
    tag: "SCIENTIFIC ARTICLE",
    title: "Penanganan Nyeri Otot akibat Fibromyalgia",
    icon: "article",
    meta1: "11 Menit Baca",
    meta2: "Panduan Medis",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=800&fit=crop",
    type: "Pencegahan",
    categories: {
      bodyParts: ["Seluruh Tubuh"],
      sports: ["Pelatihan Umum", "Renang"],
      medicalIssues: ["Fibromyalgia", "Depresi"]
    }
  }
];

const CustomDropdown = ({ label, value, options, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col gap-2">
      <label className="font-lexend text-xs text-white/60 uppercase tracking-widest font-semibold">{label}</label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="w-full flex items-center justify-between bg-[#021E2B] text-white rounded-xl px-4 md:px-5 py-3.5 md:py-4 border border-white/5 hover:bg-white/5 hover:border-accent-gold/50 focus:outline-none focus:border-accent-gold transition-all font-inter text-sm shadow-inner"
      >
        <span className={value === 'All' ? 'text-white/40' : 'text-white font-medium'}>
          {value === 'All' ? placeholder : value}
        </span>
        <span className={`material-symbols-outlined text-white/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-[#0C2D3D] border border-white/10 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] z-50 max-h-60 overflow-y-auto hide-scrollbar animate-fade-in-up">
          <button
            onClick={() => { onChange('All'); setIsOpen(false); }}
            className={`w-full text-left px-5 py-3 font-inter text-sm transition-colors ${value === 'All' ? 'bg-accent-gold/10 text-accent-gold font-medium' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
          >
            {placeholder}
          </button>
          {options.map(opt => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setIsOpen(false); }}
              className={`w-full text-left px-5 py-3 font-inter text-sm transition-colors ${value === opt ? 'bg-accent-gold/10 text-accent-gold font-medium' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function ArticlesPage() {
  const [filterType, setFilterType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const [filterBodyPart, setFilterBodyPart] = useState('All');
  const [filterSport, setFilterSport] = useState('All');
  const [filterMedicalIssue, setFilterMedicalIssue] = useState('All');

  // Derive unique categories from the articles data
  const uniqueBodyParts = useMemo(() => {
    const parts = new Set();
    allArticles.forEach(a => a.categories?.bodyParts?.forEach(p => parts.add(p)));
    return Array.from(parts).sort();
  }, []);

  const uniqueSports = useMemo(() => {
    const items = new Set();
    allArticles.forEach(a => a.categories?.sports?.forEach(p => items.add(p)));
    return Array.from(items).sort();
  }, []);

  const uniqueMedicalIssues = useMemo(() => {
    const items = new Set();
    allArticles.forEach(a => a.categories?.medicalIssues?.forEach(p => items.add(p)));
    return Array.from(items).sort();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const search = params.get('search');
    if (search) setSearchQuery(search);

    // Read specific category params from URL
    const bodyPart = params.get('bodyPart');
    if (bodyPart) setFilterBodyPart(bodyPart);

    const sport = params.get('sport');
    if (sport) setFilterSport(sport);

    const medicalIssue = params.get('medicalIssue');
    if (medicalIssue) setFilterMedicalIssue(medicalIssue);
  }, []);

  const filteredArticles = useMemo(() => {
    return allArticles.filter(article => {
      // 1. Filter by Type (Pencegahan / Cedera)
      if (filterType !== 'All' && article.type !== filterType) return false;

      // 2. Category Selectors
      if (filterBodyPart !== 'All') {
        if (!article.categories?.bodyParts?.includes(filterBodyPart)) return false;
      }
      if (filterSport !== 'All') {
        if (!article.categories?.sports?.includes(filterSport)) return false;
      }
      if (filterMedicalIssue !== 'All') {
        if (!article.categories?.medicalIssues?.includes(filterMedicalIssue)) return false;
      }

      // 4. Search text
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchTitle = article.title.toLowerCase().includes(query);
        const matchBody = article.categories?.bodyParts.some(bp => bp.toLowerCase().includes(query));
        const matchSports = article.categories?.sports.some(sp => sp.toLowerCase().includes(query));
        const matchIssues = article.categories?.medicalIssues.some(mi => mi.toLowerCase().includes(query));

        return matchTitle || matchBody || matchSports || matchIssues;
      }

      return true;
    });
  }, [filterType, filterBodyPart, filterSport, filterMedicalIssue, searchQuery]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0C2D3D] pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-6 font-inter text-sm">
              <span className="material-symbols-outlined text-sm mr-2">arrow_back</span>
              Kembali ke Beranda
            </Link>
            <h1 className="font-lexend font-bold text-4xl md:text-5xl text-white mb-4">
              Semua Artikel & Resep
            </h1>
            <p className="font-inter text-sm md:text-base text-white/60 leading-relaxed max-w-2xl">
              Eksplorasi ribuan materi edukasi medis dan tutorial video yang divalidasi oleh dewan spesialis kedokteran olahraga. Mulai dari panduan protokol hingga riset saintifik terbaru.
            </p>
          </div>

          {/* Filters UI Panel */}
          <div className="mb-8 md:mb-12 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-lg transition-all duration-300">

            {/* Top row: Search & Primary Filters */}
            <div className="flex flex-col lg:flex-row gap-4 md:gap-6 justify-between items-start lg:items-center">
              {/* Search & Mobile Toggle */}
              <div className="flex gap-3 w-full lg:w-1/3">
                <div className="w-full relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40">search</span>
                  <input
                    type="text"
                    placeholder="Cari artikel, panduan..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#021E2B] text-white placeholder-white/40 rounded-xl pl-11 md:pl-12 pr-4 py-3.5 md:py-4 border border-white/5 focus:outline-none focus:border-accent-gold transition-colors font-inter shadow-inner text-sm md:text-base"
                  />
                </div>

                {/* Mobile Filter Toggle Button */}
                <button
                  onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                  className={`md:hidden flex items-center justify-center px-4 rounded-xl border transition-colors ${isMobileFiltersOpen ? 'bg-accent-gold text-white border-accent-gold' : 'bg-[#021E2B] text-white/60 border-white/5 hover:bg-white/5'}`}
                >
                  <span className="material-symbols-outlined">tune</span>
                </button>
              </div>

              <div className="flex w-full lg:w-auto overflow-x-auto hide-scrollbar pb-1 -mb-1">
                {/* Type Filter */}
                <div className="flex bg-[#021E2B] p-1.5 rounded-xl border border-white/5 w-full min-w-max">
                  {['All', 'Pencegahan', 'Cedera'].map(type => (
                    <button
                      key={type}
                      onClick={() => setFilterType(type)}
                      className={`flex-1 px-5 md:px-6 py-2 md:py-2.5 rounded-lg font-inter text-sm transition-all whitespace-nowrap ${filterType === type ? 'bg-accent-gold text-white font-bold shadow-md' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                    >
                      {type === 'All' ? 'Semua Kondisi' : type === 'Cedera' ? 'Penanganan Cedera' : type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Expandable Section for Categories */}
            <div className={`transition-all duration-300 ${isMobileFiltersOpen ? 'block mt-6 md:mt-8' : 'hidden md:block md:mt-8'}`}>
              {/* Divider */}
              <div className="w-full h-px bg-white/5 mb-6 md:mb-8"></div>

              {/* Category Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-0">
                <CustomDropdown
                  label="Bagian Tubuh"
                  value={filterBodyPart}
                  options={uniqueBodyParts}
                  onChange={setFilterBodyPart}
                  placeholder="Semua Bagian Tubuh"
                />
                <CustomDropdown
                  label="Olahraga"
                  value={filterSport}
                  options={uniqueSports}
                  onChange={setFilterSport}
                  placeholder="Semua Olahraga"
                />
                <CustomDropdown
                  label="Kondisi Medis"
                  value={filterMedicalIssue}
                  options={uniqueMedicalIssues}
                  onChange={setFilterMedicalIssue}
                  placeholder="Semua Kondisi Medis"
                />
              </div>

              {/* Active Filters Display */}
              {(filterBodyPart !== 'All' || filterSport !== 'All' || filterMedicalIssue !== 'All' || filterType !== 'All') && (
                <div className="pt-4 md:pt-6 flex flex-wrap items-center gap-2 animate-fade-in">
                  <span className="font-inter text-[10px] md:text-xs text-white/40 mr-1 md:mr-2">Filter Aktif:</span>

                  {filterType !== 'All' && (
                    <span className="px-2.5 md:px-3 py-1 md:py-1.5 bg-accent-gold/20 border border-accent-gold/30 text-accent-gold rounded-full font-inter text-[10px] md:text-xs flex items-center gap-1">
                      {filterType}
                      <button onClick={() => setFilterType('All')} className="hover:text-white transition-colors"><span className="material-symbols-outlined text-[10px] md:text-[12px] leading-none">close</span></button>
                    </span>
                  )}

                  {filterBodyPart !== 'All' && (
                    <span className="px-2.5 md:px-3 py-1 md:py-1.5 bg-white/10 border border-white/20 text-white rounded-full font-inter text-[10px] md:text-xs flex items-center gap-1">
                      {filterBodyPart}
                      <button onClick={() => setFilterBodyPart('All')} className="hover:text-accent-gold transition-colors"><span className="material-symbols-outlined text-[10px] md:text-[12px] leading-none">close</span></button>
                    </span>
                  )}

                  {filterSport !== 'All' && (
                    <span className="px-2.5 md:px-3 py-1 md:py-1.5 bg-white/10 border border-white/20 text-white rounded-full font-inter text-[10px] md:text-xs flex items-center gap-1">
                      {filterSport}
                      <button onClick={() => setFilterSport('All')} className="hover:text-accent-gold transition-colors"><span className="material-symbols-outlined text-[10px] md:text-[12px] leading-none">close</span></button>
                    </span>
                  )}

                  {filterMedicalIssue !== 'All' && (
                    <span className="px-2.5 md:px-3 py-1 md:py-1.5 bg-white/10 border border-white/20 text-white rounded-full font-inter text-[10px] md:text-xs flex items-center gap-1">
                      {filterMedicalIssue}
                      <button onClick={() => setFilterMedicalIssue('All')} className="hover:text-accent-gold transition-colors"><span className="material-symbols-outlined text-[10px] md:text-[12px] leading-none">close</span></button>
                    </span>
                  )}

                  <button
                    onClick={() => {
                      setFilterType('All'); setFilterBodyPart('All'); setFilterSport('All'); setFilterMedicalIssue('All'); setSearchQuery('');
                    }}
                    className="text-[10px] md:text-xs font-inter text-white/40 hover:text-white underline ml-1 md:ml-2 transition-colors"
                  >
                    Reset Semua
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((item, i) => (
                <Link key={i} href="/articles/test-id" className="group relative rounded-xl overflow-hidden h-[450px] cursor-pointer block">
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
                    <h3 className="font-lexend text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-xs text-white/60 font-inter">
                      <span className="material-symbols-outlined text-sm mr-2" style={{ fontVariationSettings: "'FILL' 0" }}>{item.icon}</span>
                      <span>{item.meta1}</span>
                      <span className="mx-2">•</span>
                      <span>{item.meta2}</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-20 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-3xl text-white/40">search_off</span>
                </div>
                <h3 className="font-lexend font-bold text-xl text-white mb-2">Tidak ada artikel ditemukan</h3>
                <p className="font-inter text-white/50 text-sm max-w-md">
                  Coba gunakan kata kunci lain atau ubah filter untuk menemukan apa yang Anda cari.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setFilterType('All');
                    setFilterBodyPart('All');
                    setFilterSport('All');
                    setFilterMedicalIssue('All');
                  }}
                  className="mt-6 font-inter text-sm text-accent-gold hover:text-accent-gold-hover underline transition-colors"
                >
                  Reset Filter
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
