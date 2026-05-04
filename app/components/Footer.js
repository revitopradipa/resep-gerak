import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0C2D3D" }} className="text-white">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/Logo_ResepGerak_2.svg"
                alt="Resep Gerak Logo"
                className="h-9 w-auto brightness-0 invert"
              />
              <img
                src="/Logo_ResepGerak_3.svg"
                alt="Resep Gerak"
                className="h-5 w-auto brightness-0 invert"
              />
            </div>
            <p className="font-inter text-sm text-white/60 leading-relaxed max-w-xs">
              Portal edukasi gerak pertama di Indonesia. Dikembangkan oleh
              sports medicine expert, berbasis bukti ilmiah internasional.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <p className="font-lexend uppercase tracking-widest text-accent-gold text-xs font-semibold mb-4">
              Navigasi
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Bagian Tubuh", href: "/#body-parts" },
                { label: "Olahraga", href: "/#sports" },
                { label: "Kondisi Medis", href: "/#conditions" },
                { label: "Artikel", href: "/#articles" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-inter text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="font-lexend uppercase tracking-widest text-accent-gold text-xs font-semibold mb-4">
              Sumber Daya
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Perpustakaan", href: "/#library" },
                { label: "Research Portal", href: "#" },
                { label: "Clinical Directory", href: "#" },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="font-inter text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="font-lexend uppercase tracking-widest text-accent-gold text-xs font-semibold mb-4">
              Legal
            </p>
            <div className="flex flex-col gap-2.5">
              {["Terms of Service", "Privacy Policy", "Accessibility"].map(
                (label) => (
                  <Link
                    key={label}
                    href="#"
                    className="font-inter text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                )
              )}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="font-lexend uppercase tracking-widest text-accent-gold text-xs font-semibold mb-4">
              Kontak
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:info@resepgerak.id"
                className="font-inter text-sm text-white/50 hover:text-white transition-colors"
              >
                info@resepgerak.id
              </a>
              <p className="font-inter text-sm text-white/50">
                Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-white/30">
            © {new Date().getFullYear()} Resep Gerak. All rights reserved.
            Expertise in motion.
          </p>
          <p className="font-inter text-xs text-white/20">
            Built with evidence-based medicine 💪
          </p>
        </div>
      </div>
    </footer>
  );
}
