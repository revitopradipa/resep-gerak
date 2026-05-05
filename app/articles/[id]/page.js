"use client";

import { useEffect, useState, use } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { supabase } from "../../../utils/supabaseClient";

// Helper function to safely convert standard YouTube links to embeddable iframes
const getYouTubeEmbedUrl = (url) => {
  if (!url) return '';
  try {
    if (url.includes('watch?v=')) {
      // Handles: https://www.youtube.com/watch?v=XYZ
      return url.replace('watch?v=', 'embed/').split('&')[0];
    }
    if (url.includes('youtu.be/')) {
      // Handles: https://youtu.be/XYZ
      return url.replace('youtu.be/', 'youtube.com/embed/').split('?')[0];
    }
    return url;
  } catch (error) {
    return url;
  }
};

export default function ArticleDetail({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams?.id;

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const { data, error } = await supabase
          .from('articles')
          .select(`
            *,
            sub_categories (name)
          `)
          .eq('slug', slug)
          .single();

        if (error) throw error;
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    }

    if (slug) fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Navbar theme="light" />
        <main className="min-h-screen bg-[#FAFAFA] pt-32 pb-20 flex justify-center items-center">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-gray-100"></div>
            <div className="absolute inset-0 rounded-full border-4 border-[#0794B9] border-t-transparent animate-spin"></div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!article) {
    return (
      <>
        <Navbar theme="light" />
        <main className="min-h-screen bg-[#FAFAFA] pt-32 pb-20 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Artikel tidak ditemukan</h1>
            <Link href="/articles" className="text-[#0794B9] hover:underline">Kembali ke Semua Artikel</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Format date safely
  const formattedDate = article.created_at
    ? new Date(article.created_at).toLocaleDateString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric'
    })
    : "Tanggal tidak diketahui";

  return (
    <>
      <Navbar theme="light" />

      <main className="min-h-screen bg-[#FAFAFA] pt-32 pb-20">
        <article className="max-w-[800px] mx-auto px-6">
          {/* Back Button */}
          <Link href="/articles" className="inline-flex items-center text-[#0794B9] hover:text-[#068AA6] transition-colors mb-8 font-inter text-sm font-semibold">
            <span className="material-symbols-outlined text-sm mr-2">arrow_back</span>
            Kembali ke Semua Artikel
          </Link>

          {/* Article Header */}
          <header className="mb-10">
            {article.sub_categories?.name && (
              <span className="inline-block font-lexend text-[10px] font-bold text-[#0794B9] uppercase tracking-widest mb-4 bg-[#0794B9]/10 px-3 py-1 rounded-full">
                {article.sub_categories.name}
              </span>
            )}
            <h1 className="font-oswald font-bold text-4xl md:text-5xl text-primary-container mb-4 leading-tight text-[#021E2B]">
              {article.title}
            </h1>

            {article.short_description && (
              <p className="font-inter text-lg md:text-xl text-gray-600 leading-relaxed mb-6 italic">
                {article.short_description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-inter border-t border-b border-gray-200 py-4">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-sm mr-2">calendar_today</span>
                <span>{formattedDate}</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-sm mr-2">person</span>
                <span>{article.author_name}</span>
              </div>
            </div>
          </header>

          {/* Featured Hero Image */}
          {article.illustration_image_url && (
            <figure className="mb-12 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img
                src={article.illustration_image_url}
                alt={article.title}
                className="w-full h-auto max-h-[450px] object-cover"
              />
            </figure>
          )}

          {/* Core Article Body */}
          <div
            className="font-inter text-base md:text-lg text-gray-700 leading-relaxed space-y-6 text-justify prose prose-blue max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Media Section: YouTube Movement Recipes */}
          {article.youtube_video_links && article.youtube_video_links.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold font-lexend text-[#021E2B] mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0794B9]">play_circle</span>
                Video Resep Gerakan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {article.youtube_video_links.map((link, index) => (
                  <div key={index} className="rounded-2xl overflow-hidden shadow-md border border-gray-100 w-full aspect-video bg-gray-900">
                    <iframe
                      src={getYouTubeEmbedUrl(link)}
                      title={`Video Resep Gerakan ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Media Section: Photo Movement Recipes */}
          {article.movement_recipe_photos && article.movement_recipe_photos.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold font-lexend text-[#021E2B] mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0794B9]">image</span>
                Foto Resep Gerakan
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {article.movement_recipe_photos.map((photo, index) => (
                  <figure key={index} className="rounded-xl overflow-hidden shadow-sm border border-gray-200 aspect-square group cursor-pointer">
                    <img
                      src={photo}
                      alt={`Resep gerakan ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </figure>
                ))}
              </div>
            </div>
          )}

          {/* Supporting References */}
          {article.supporting_references && (
            <div className="mt-16 p-6 md:p-8 bg-gray-50 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-bold font-lexend text-gray-800 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-gray-500">menu_book</span>
                Referensi Pendukung
              </h3>
              <div className="text-sm text-gray-600 font-inter whitespace-pre-wrap leading-relaxed">
                {article.supporting_references}
              </div>
            </div>
          )}

          {/* Share & Actions */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm font-inter text-gray-500 font-medium">Bagikan resep gerak ini:</p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0794B9] hover:text-white transition-colors shadow-sm">
                <span className="material-symbols-outlined text-sm">share</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0794B9] hover:text-white transition-colors shadow-sm">
                <span className="material-symbols-outlined text-sm">bookmark</span>
              </button>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}