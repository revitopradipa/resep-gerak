"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function ArticlesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [libraryItems, setLibraryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const { data, error } = await supabase
          .from('articles')
          .select(`
            id,
            title,
            slug,
            short_description,
            illustration_image_url,
            author_name,
            created_at,
            sub_categories ( name )
          `)
          .eq('is_published', true)
          .order('created_at', { ascending: false })
          .limit(6);

        if (error) throw error;

        if (data && data.length > 0) {
          const mappedArticles = data.map(article => ({
            id: article.id,
            slug: article.slug,
            tag: article.sub_categories?.name?.toUpperCase() || "ARTIKEL MEDIS",
            title: article.title,
            icon: "article",
            meta1: new Date(article.created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' }),
            meta2: article.author_name || "Resep Gerak",
            img: article.illustration_image_url || "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=800&fit=crop",
          }));
          setLibraryItems(mappedArticles);
        } else {
          setLibraryItems([]);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLibraryItems([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchArticles();
  }, []);

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
            <span className="font-lexend text-sm font-bold text-[#0794B9] uppercase tracking-wider mb-2 block">
              Sains Dibalik Gerak Tubuh
            </span>
            <h2 className="font-lexend font-bold text-4xl md:text-5xl text-white mb-4">
              Pustaka Artikel
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

        {isLoading ? (
          <div className="flex justify-center items-center h-[400px]">
            <div className="w-8 h-8 border-4 border-[#0794B9] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : libraryItems.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-[200px] md:h-[400px] text-white/60 bg-white/5 rounded-2xl border border-white/10">
            <span className="material-symbols-outlined text-4xl mb-4 opacity-50">article</span>
            <p className="font-inter text-sm md:text-base">Belum ada materi edukasi yang dipublikasikan.</p>
          </div>
        ) : (
          /* Cards */
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
                  : { href: item.slug ? `/articles/${item.slug}` : `/articles/test-id` };

                return (
                  <Wrapper key={item.id || i} {...linkProps} className="snap-center shrink-0 w-[85vw] group relative rounded-xl overflow-hidden h-[400px] cursor-pointer block">
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
                  : { href: item.slug ? `/articles/${item.slug}` : `/articles/test-id` };

                return (
                  <Wrapper key={item.id || i} {...linkProps} className="group relative rounded-xl overflow-hidden h-[450px] cursor-pointer block">
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
        )}
      </div>

      {/* Progress Bar (Desktop only) */}
      {!isLoading && libraryItems.length > 0 && (
        <div className="hidden md:flex w-full h-1.5 bg-white/10">
          <div
            className="h-full bg-[#0794B9] transition-all duration-300"
            style={{ width: `${((currentIndex + 3) / Math.max(3, libraryItems.length)) * 100}%` }}
          ></div>
        </div>
      )}
    </section>
  );
}

