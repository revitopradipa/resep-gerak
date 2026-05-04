"use client";

import { useState } from "react";

export default function PhilosophySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="philosophy"
      className="relative py-24 md:py-32 px-6 bg-surface overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-surface-container to-transparent opacity-50 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column — Philosophy */}
        <div className="lg:col-span-7 pr-0 lg:pr-8 reveal-left">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-accent-gold"></div>
            <p className="font-lexend font-semibold text-accent-gold text-sm uppercase tracking-[0.2em]">
              Filosofi Kami
            </p>
          </div>

          <h2 className="font-oswald font-bold text-primary-container text-4xl md:text-5xl lg:text-7xl leading-[1.1] uppercase tracking-tight mb-8">
            Tidak Semua
            <br />
            Orang Butuh <span className="text-outline">Obat,</span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10">Tapi Semua</span>
            </span>
            <br />
            Orang Butuh <span className="text-accent-gold">Gerak</span>
          </h2>

          <p className="font-inter text-on-surface-variant text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-light">
            Gerak adalah fondasi kesehatan. Kami meresepkan aktivitas yang
            disesuaikan dengan tubuh dan gaya hidup anda untuk menyembuhkan,
            memperkuat, dan mengoptimalkan fungsi tubuh seutuhnya.
          </p>

          <div className="inline-flex items-start gap-4 p-5 bg-surface-container rounded-2xl border border-outline-variant/30 max-w-xl">
            <div className="flex-shrink-0 w-10 h-10 bg-primary-container rounded-full flex items-center justify-center mt-0.5">
              <span className="material-symbols-outlined text-accent-gold text-xl">
                verified
              </span>
            </div>
            <p className="font-inter text-sm md:text-base text-on-surface-variant leading-relaxed">
              Portal edukasi gerak pertama di Indonesia yang dikembangkan oleh{" "}
              <strong className="text-primary-container font-semibold">sports medicine expert</strong>. Berbasis bukti ilmiah
              internasional.
            </p>
          </div>
        </div>

        {/* Right Column — Form */}
        <div className="lg:col-span-5 reveal-right">
          <div className="bg-surface-container-lowest p-8 md:p-10 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-outline-variant/20 relative overflow-hidden group">
            {/* Gold accent stripe */}
            <div className="absolute top-0 left-0 w-2 h-full bg-accent-gold transition-all duration-500 group-hover:w-3" />

            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-gold/10 to-transparent rounded-bl-full pointer-events-none" />

            <div className="pl-4">
              <h3 className="font-oswald text-3xl font-bold text-primary-container mb-3">
                KONSULTASI AWAL
              </h3>
              <p className="font-inter text-sm md:text-base text-on-surface-variant mb-8 leading-relaxed">
                Dapatkan artikel eksklusif dan panduan resep gerak mingguan langsung dari ahli medis olahraga kami.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-lexend uppercase tracking-wider font-semibold text-xs text-on-surface-variant mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full border border-outline-variant/40 rounded-xl p-3 md:p-3.5 bg-surface-container-low text-on-surface font-inter focus:bg-surface-container-lowest focus:ring-2 focus:ring-accent-gold focus:border-accent-gold transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block font-lexend uppercase tracking-wider font-semibold text-xs text-on-surface-variant mb-2">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full border border-outline-variant/40 rounded-xl p-3 md:p-3.5 bg-surface-container-low text-on-surface font-inter focus:bg-surface-container-lowest focus:ring-2 focus:ring-accent-gold focus:border-accent-gold transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block font-lexend uppercase tracking-wider font-semibold text-xs text-on-surface-variant mb-2">
                    Keluhan Utama (Opsional)
                  </label>
                  <textarea
                    placeholder="Ceritakan singkat tentang keluhan atau tujuan Anda..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={3}
                    className="w-full border border-outline-variant/40 rounded-xl p-3 md:p-3.5 bg-surface-container-low text-on-surface font-inter focus:bg-surface-container-lowest focus:ring-2 focus:ring-accent-gold focus:border-accent-gold transition-all outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-lexend font-bold uppercase tracking-widest text-sm bg-primary-container text-white py-4 rounded-xl hover:bg-primary-dark active:scale-[0.98] transition-all shadow-md hover:shadow-lg mt-4 flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <span className="material-symbols-outlined text-accent-gold">check_circle</span>
                      <span className="text-accent-gold">Terkirim!</span>
                    </>
                  ) : (
                    <>
                      Mulai Langkahmu
                      <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-outline font-inter mt-4 px-4">
                  Data Anda aman bersama kami. Baca <a href="#" className="underline hover:text-accent-gold transition-colors">Kebijakan Privasi</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
