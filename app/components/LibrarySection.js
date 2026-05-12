"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";

// Fallback accent colors for books without cover images
const bookColors = ["#0C2D3D", "#2d4a3e", "#3a4a64", "#4a3b52", "#523b3b"];
const bookIcons = ["menu_book", "auto_stories", "psychology", "science", "biotech"];

export default function LibrarySection() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchEbooks() {
      try {
        const { data, error } = await supabase
          .from("e_books")
          .select("id, title, slug, description, author_name, cover_image_url, file_url")
          .eq("is_published", true)
          .order("created_at", { ascending: false })
          .limit(5);

        if (error) throw error;
        setBooks(data || []);
      } catch (err) {
        console.error("Error fetching ebooks:", err);
        setBooks([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchEbooks();
  }, []);

  return (
    <section
      id="library"
      className="py-20 md:py-24 px-6"
      style={{ background: "#EFF7FA" }}
    >
      <div className="max-w-[1280px] mx-auto text-center">
        {/* Header */}
        <div className="mb-4 reveal">
          <p className="font-lexend uppercase tracking-widest text-accent-gold text-xs font-semibold mb-3">
            Perpustakaan Digital
          </p>
          <h2 className="font-oswald font-bold text-primary-container text-3xl md:text-4xl uppercase leading-tight mb-4">
            ETALASE E-BOOK GERAK & KESEHATAN MEDIS
          </h2>
          <p className="font-inter text-sm text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            Koleksi buku digital dan PDF yang dikurasi oleh tim medis kami.
            Setiap publikasi berbasis bukti ilmiah dan dirancang untuk membantu
            Anda memahami sains di balik performa tubuh.
          </p>
        </div>

        {/* Book Covers */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12 mb-12">
          {isLoading ? (
            <div className="flex justify-center items-center h-[260px] w-full">
              <div className="w-8 h-8 border-4 border-[#0794B9] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : books.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-[200px] w-full text-on-surface-variant/60">
              <span className="material-symbols-outlined text-4xl mb-4 opacity-50">menu_book</span>
              <p className="font-inter text-sm">Belum ada e-book yang dipublikasikan.</p>
            </div>
          ) : (
            books.map((book, i) => {
              const bgColor = bookColors[i % bookColors.length];
              const icon = bookIcons[i % bookIcons.length];

              return (
                <a
                  key={book.id}
                  href={book.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div
                    className="book-shadow w-[145px] sm:w-[160px] md:w-[180px] h-[210px] sm:h-[230px] md:h-[260px] rounded-lg overflow-hidden relative"
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

                    {/* Content overlay */}
                    {!book.cover_image_url && (
                      <div className="p-4 flex flex-col h-full justify-between relative z-10">
                        {/* Decorative lines */}
                        <div className="absolute top-6 right-4 w-12 h-12 border border-white/10 rounded-sm rotate-12" />
                        <div className="absolute top-10 right-8 w-8 h-8 border border-white/5 rounded-sm rotate-45" />

                        <div>
                          <p
                            className="font-oswald font-bold text-xl md:text-2xl uppercase leading-tight"
                            style={{ color: "#EBBA07" }}
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
                    )}
                  </div>
                </a>
              );
            })
          )}
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
