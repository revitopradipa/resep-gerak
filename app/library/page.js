"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { supabase } from "../../utils/supabaseClient";

// Fallback colors for books without cover images
const bookColors = ["#0C2D3D", "#2d4a3e", "#3a4a64", "#4a3b52", "#523b3b", "#2c3e50"];
const bookIcons = ["menu_book", "auto_stories", "psychology", "science", "biotech", "medical_services"];

export default function LibraryPage() {
  const [allBooks, setAllBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchEbooks() {
      try {
        const { data, error } = await supabase
          .from("e_books")
          .select("id, title, slug, description, author_name, cover_image_url, file_url, view_count, created_at")
          .eq("is_published", true)
          .order("created_at", { ascending: false });

        if (error) throw error;
        setAllBooks(data || []);
      } catch (err) {
        console.error("Error fetching ebooks:", err);
        setAllBooks([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchEbooks();
  }, []);

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
              Koleksi E-Book
            </h1>
            <p className="font-inter text-sm md:text-base text-on-surface-variant leading-relaxed max-w-2xl">
              Eksplorasi seluruh koleksi buku digital dan dokumen PDF yang disusun dan dikurasi oleh para ahli kedokteran olahraga. Panduan komprehensif untuk meningkatkan performa dan proses pemulihan Anda.
            </p>
          </div>

          {/* Books Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center h-[300px]">
              <div className="w-10 h-10 border-4 border-[#0794B9] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : allBooks.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-[300px] text-on-surface-variant/60 bg-white/50 rounded-2xl border border-white/80">
              <span className="material-symbols-outlined text-5xl mb-4 opacity-50">menu_book</span>
              <p className="font-inter text-base">Belum ada e-book yang dipublikasikan.</p>
            </div>
          ) : (
            <div className="flex flex-wrap gap-6 md:gap-8 justify-center sm:justify-start">
              {allBooks.map((book, i) => {
                const bgColor = bookColors[i % bookColors.length];
                const icon = bookIcons[i % bookIcons.length];

                return (
                  <a
                    key={book.id}
                    href={book.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div
                      className="book-shadow w-[160px] md:w-[180px] h-[230px] md:h-[260px] rounded-lg overflow-hidden relative transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl"
                      style={{ background: bgColor }}
                    >
                      {/* Cover image (if available) */}
                      {book.cover_image_url && (
                        <img
                          src={book.cover_image_url}
                          alt={book.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      )}

                      {/* Book spine line */}
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-white/10" />

                      {/* Content */}
                      <div className={`p-4 flex flex-col h-full justify-between relative z-10 ${book.cover_image_url ? "bg-gradient-to-t from-black/80 via-black/40 to-transparent" : ""}`}>
                        {/* Decorative lines */}
                        {!book.cover_image_url && (
                          <>
                            <div className="absolute top-6 right-4 w-12 h-12 border border-white/10 rounded-sm rotate-12" />
                            <div className="absolute top-10 right-8 w-8 h-8 border border-white/5 rounded-sm rotate-45" />
                          </>
                        )}

                        <div>
                          <p
                            className="font-oswald font-bold text-xl md:text-2xl uppercase leading-tight"
                            style={{ color: "#0794B9" }}
                          >
                            {book.title}
                          </p>
                          {book.description && (
                            <p className="font-inter text-[10px] text-white/60 mt-1 leading-snug line-clamp-2">
                              {book.description}
                            </p>
                          )}
                        </div>

                        <div className="flex items-end justify-between">
                          <span
                            className="material-symbols-outlined text-white/15 text-4xl"
                            style={{ fontVariationSettings: "'FILL' 0" }}
                          >
                            {icon}
                          </span>
                          <span className="font-inter text-[8px] text-white/30 uppercase tracking-wider">
                            Resep Gerak
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Author & view count tooltip */}
                    <div className="mt-2 text-center max-w-[180px]">
                      <p className="font-inter text-xs text-primary-container font-medium truncate">
                        {book.title}
                      </p>
                      {book.author_name && (
                        <p className="font-inter text-[10px] text-on-surface-variant/70 truncate">
                          {book.author_name}
                        </p>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
