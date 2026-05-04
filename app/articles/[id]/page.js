"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function ArticleDetail({ params }) {
  // Normally you would fetch the article based on params.id or params.slug.
  // We will use dummy data that represents a typical detailed view.
  const article = {
    tag: "SCIENTIFIC ARTICLE",
    title: "Sains di Balik Pemulihan: Neuromuscular Training & Pencegahan ACL",
    meta1: "15 Menit Baca",
    meta2: "Riset Klinis",
    date: "12 Agustus 2026",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop",
    content: `
      Cidera Anterior Cruciate Ligament (ACL) adalah salah satu momok terbesar bagi atlet di berbagai cabang olahraga. Namun, penelitian terbaru menunjukkan bahwa implementasi program Neuromuscular Training (NMT) yang tepat dapat mengurangi risiko cidera ACL hingga lebih dari 50%.

      Neuromuscular training berfokus pada melatih sistem saraf dan otot agar bekerja secara harmonis, meningkatkan stabilitas sendi, keseimbangan, dan pola pergerakan biomekanik yang aman. Latihan ini umumnya melibatkan elemen-elemen seperti plyometrics, penguatan otot core, latihan keseimbangan (proprioception), dan teknik mendarat (landing mechanics) yang benar.

      Salah satu aspek terpenting dari pencegahan ACL adalah bagaimana atlet mendarat setelah melompat atau melakukan deselerasi cepat. Gaya pendaratan yang kaku (stiff landing) dengan lutut tegak lurus sering kali memberikan tekanan luar biasa pada ligamen lutut. NMT mengajarkan atlet untuk mendarat dengan lutut sedikit ditekuk (soft landing), menyerap benturan melalui aktivasi otot gluteus dan paha belakang (hamstrings).

      Integrasi NMT ke dalam rutinitas pemanasan dinamis, yang memakan waktu hanya 15-20 menit sebelum latihan utama, telah terbukti sangat efisien. Program populer seperti FIFA 11+ adalah contoh sempurna bagaimana sains pergerakan diimplementasikan ke ranah praktis lapangan, menghemat miliaran biaya perawatan medis dan menyelamatkan karier atlet.
    `
  };

  return (
    <>
      <Navbar theme="light" />

      <main className="min-h-screen bg-[#FAFAFA] pt-32 pb-20">
        <article className="max-w-[800px] mx-auto px-6">
          {/* Back Button */}
          <Link href="/articles" className="inline-flex items-center text-primary-container hover:text-primary-container/80 transition-colors mb-8 font-inter text-sm font-semibold">
            <span className="material-symbols-outlined text-sm mr-2">arrow_back</span>
            Kembali ke Semua Artikel
          </Link>

          {/* Article Header */}
          <header className="mb-10">
            <span className="inline-block font-lexend text-[10px] font-bold text-[#D9AD36] uppercase tracking-widest mb-4 bg-accent-gold/10 px-3 py-1 rounded-full">
              {article.tag}
            </span>
            <h1 className="font-oswald font-bold text-4xl md:text-5xl text-primary-container mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-on-surface-variant font-inter border-t border-b border-outline-variant/30 py-4">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-sm mr-2">calendar_today</span>
                <span>{article.date}</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-sm mr-2">schedule</span>
                <span>{article.meta1}</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-sm mr-2">verified</span>
                <span>{article.meta2}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <figure className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={article.img} 
              alt={article.title} 
              className="w-full h-[400px] object-cover"
            />
          </figure>

          {/* Article Body */}
          <div className="font-inter text-base md:text-lg text-on-surface-variant leading-relaxed space-y-6">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-justify">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          {/* Share & Actions */}
          <div className="mt-16 pt-8 border-t border-outline-variant/30 flex items-center justify-between">
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-container hover:bg-accent-gold hover:text-white transition-colors">
                <span className="material-symbols-outlined text-sm">share</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-container hover:bg-accent-gold hover:text-white transition-colors">
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
