"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { supabase } from "../../utils/supabaseClient";
import ArticleFilterBar from "../components/ArticleFilterBar";

// ─── Shared Article Card UI ───
const ArticleCard = ({ article, showBadge = false }) => (
  <Link
    href={`/articles/${article.slug}`}
    className="flex flex-col group cursor-pointer w-full h-full bg-white rounded-2xl p-4 border border-transparent shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(7,148,185,0.15)] hover:border-[#0794B9]/20 transition-all duration-500 hover:-translate-y-1"
  >
    {/* Image Container */}
    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-[#EBF5F6]">
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <img
        src={article.illustration_image_url || "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=800&fit=crop"}
        alt={article.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {showBadge && article.sub_categories?.name && (
        <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-[#0794B9] text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm uppercase z-20 tracking-wider">
          {article.sub_categories.name}
        </span>
      )}
    </div>

    {/* Text Content */}
    <div className="flex flex-col flex-1 px-1">
      <h3 className="font-lexend font-bold text-gray-900 text-base md:text-lg leading-snug mb-3 group-hover:text-[#0794B9] transition-colors line-clamp-2">
        {article.title}
      </h3>
      <div className="mt-auto flex items-center gap-2.5 pt-2 border-t border-gray-50">
        <div className="w-7 h-7 rounded-full bg-[#EBF5F6] flex items-center justify-center">
          <span className="material-symbols-outlined text-[#0794B9] text-[14px]">edit_document</span>
        </div>
        <p className="font-inter text-xs text-gray-500 font-medium truncate">
          {article.author_name || "dr. Andi Kurniawan, Sp.KO"}
        </p>
      </div>
    </div>
  </Link>
);

// ─── Subcategory Slider UI ───
const ArticleSlider = ({ subCategoryName, articles }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };

  if (!articles || articles.length === 0) return null;

  return (
    <div className="mb-16 relative">
      {/* Seamless Subcategory Title */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 bg-[#0794B9] rounded-full"></div>
          <h2 className="font-lexend font-bold text-xl md:text-2xl text-[#021E2B] tracking-tight">
            {subCategoryName.toUpperCase()}
          </h2>
        </div>

        {/* Nav Controls */}
        <div className="hidden md:flex gap-2">
          <button onClick={scrollLeft} className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-500 flex items-center justify-center hover:border-[#0794B9] hover:text-[#0794B9] transition-all shadow-sm">
            <span className="material-symbols-outlined text-sm">arrow_back_ios_new</span>
          </button>
          <button onClick={scrollRight} className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-500 flex items-center justify-center hover:border-[#0794B9] hover:text-[#0794B9] transition-all shadow-sm">
            <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
          </button>
        </div>
      </div>

      <div className="relative group/slider -mx-6 px-6 md:mx-0 md:px-0">
        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 md:gap-6 hide-scrollbar snap-x snap-mandatory pb-6 w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {articles.map((article, i) => (
            <div key={article.id || i} className="snap-start shrink-0 w-[280px] md:w-[320px]">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Inner Content ───
function ArticlesContent() {
  const searchParams = useSearchParams();
  const selectedType = searchParams.get('type') || 'ALL';
  const categoryParam = searchParams.get('category') || 'ALL_CATEGORIES';

  const [categories, setCategories] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAllData() {
      try {
        const [catRes, articleRes] = await Promise.all([
          supabase.from('categories').select('*').order('name'),
          supabase
            .from('articles')
            .select(`
              id, title, slug, illustration_image_url, author_name, created_at,
              sub_category_id,
              sub_categories (id, name),
              article_categories (
                category_id,
                categories (id, type, name)
              )
            `)
            .eq('is_published', true)
            .order('created_at', { ascending: false })
        ]);

        if (catRes.error) throw catRes.error;
        if (articleRes.error) throw articleRes.error;

        setCategories(catRes.data || []);
        setMasterData(articleRes.data || []);

      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAllData();
  }, []);

  const isAll = selectedType === 'ALL';
  let displayedArticles = [];
  let displayedSubCats = [];

  if (!isLoading) {
    displayedArticles = masterData.filter(article => {
      if (isAll) return true;
      const hasMatchingType = article.article_categories?.some(
        ac => ac.categories?.type === selectedType
      );
      if (!hasMatchingType) return false;

      if (categoryParam !== 'ALL_CATEGORIES') {
        return article.article_categories?.some(
          ac => ac.categories?.name === categoryParam
        );
      }
      return true;
    });

    if (!isAll && displayedArticles.length > 0) {
      const grouped = {};
      displayedArticles.forEach(article => {
        const subId = article.sub_category_id || 'universal';
        const subName = article.sub_categories?.name || 'Materi Umum';

        if (!grouped[subId]) {
          grouped[subId] = {
            id: subId,
            name: subName,
            articles: []
          };
        }
        grouped[subId].articles.push(article);
      });
      displayedSubCats = Object.values(grouped);
    }
  }

  return (
    <main className="min-h-screen bg-[#EFF7FA] pt-24 md:pt-32 pb-20 font-inter">

      {/* Seamless Header / Filter Section - Removed background box & border */}
      <div className="relative z-40 mb-10 md:mb-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">

          {/* Title Area */}
          <div className="max-w-2xl">
            <span className="font-lexend text-[#0794B9] font-semibold text-xs md:text-sm tracking-wider uppercase mb-3 block">
              Pusat Pengetahuan
            </span>
            <h1 className="font-lexend font-extrabold text-3xl md:text-5xl text-[#021E2B] leading-tight mb-4">
              Eksplorasi Edukasi Medis & Olahraga
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl">
              Temukan ribuan resep gerak, panduan pencegahan, dan penanganan cedera yang divalidasi oleh spesialis kedokteran olahraga.
            </p>
          </div>

          {/* Dropdown Filters Container */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <ArticleFilterBar availableCategories={categories} />
          </div>

        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full min-h-screen">

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 animate-fade-in-up">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-gray-100"></div>
              <div className="absolute inset-0 rounded-full border-4 border-[#0794B9] border-t-transparent animate-spin"></div>
            </div>
            <p className="font-inter text-gray-500 mt-6 font-medium animate-pulse">Menyiapkan materi edukasi...</p>
          </div>
        ) : isAll ? (
          displayedArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 animate-fade-in-up">
              {displayedArticles.map((article, i) => (
                <div key={article.id || i} className="animate-fade-in-up opacity-0 h-full" style={{ animationDelay: `${(i % 12) * 50}ms`, animationFillMode: 'forwards' }}>
                  <ArticleCard article={article} showBadge={true} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 bg-transparent animate-scale-in">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-4xl text-gray-300">menu_book</span>
              </div>
              <h3 className="font-lexend font-bold text-2xl text-gray-800 mb-3">Belum Ada Materi</h3>
              <p className="font-inter text-gray-500 text-center max-w-md">
                Saat ini belum ada materi edukasi atau resep gerakan yang dipublikasikan di platform.
              </p>
            </div>
          )
        ) : (
          displayedSubCats.length > 0 ? (
            <div className="animate-fade-in-up flex flex-col gap-4">
              {displayedSubCats.map(subCat => (
                <ArticleSlider
                  key={subCat.id}
                  subCategoryName={subCat.name}
                  articles={subCat.articles}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 bg-transparent animate-scale-in">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-4xl text-gray-300">search_off</span>
              </div>
              <h3 className="font-lexend font-bold text-2xl text-gray-800 mb-3">Pencarian Kosong</h3>
              <p className="font-inter text-gray-500 text-center max-w-md">
                Materi edukasi untuk kategori <strong className="text-[#0794B9] font-semibold">{categoryParam !== 'ALL_CATEGORIES' ? categoryParam : 'ini'}</strong> belum tersedia. Coba kategori lain.
              </p>
            </div>
          )
        )}

      </div>
    </main>
  );
}

export default function ArticlesPage() {
  return (
    <>
      <Navbar theme="light" />
      <Suspense fallback={
        <main className="min-h-screen bg-[#F8FAFC] pt-24 md:pt-32 pb-20 font-inter flex flex-col items-center justify-center">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-gray-100"></div>
            <div className="absolute inset-0 rounded-full border-4 border-[#0794B9] border-t-transparent animate-spin"></div>
          </div>
        </main>
      }>
        <ArticlesContent />
      </Suspense>
      <Footer />
    </>
  );
}